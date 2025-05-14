import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Check, Clock, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/sonner";

interface WorkflowExecutionProps {
  workflow: any;
  onComplete: () => void;
}

export function FlowtuneWorkflowExecution({ workflow, onComplete }: WorkflowExecutionProps) {
  const [executionProgress, setExecutionProgress] = useState(0);
  const [currentNodeIndex, setCurrentNodeIndex] = useState(0);
  const [nodeStatuses, setNodeStatuses] = useState<Record<string, "pending" | "running" | "completed" | "failed">>({});

  // Initialize node statuses
  useEffect(() => {
    const initialStatuses: Record<string, "pending" | "running" | "completed" | "failed"> = {};
    if (workflow && workflow.nodes && Array.isArray(workflow.nodes)) {
      workflow.nodes.forEach((node: any, index: number) => {
        if (node && typeof node.id !== 'undefined' && node.id !== null) {
          initialStatuses[node.id] = index === 0 ? "running" : "pending";
        } else {
          console.warn(`Workflow node at index ${index} is invalid or missing an id:`, node);
        }
      });
    }
    setNodeStatuses(initialStatuses);
  }, [workflow]);

  // Simulate workflow execution
  useEffect(() => {
    if (!workflow || !workflow.nodes || workflow.nodes.length === 0) {
      // Handle cases where workflow or nodes are not properly defined
      if (workflow && workflow.nodes && workflow.nodes.length === 0) {
        // If there are no nodes, consider it complete immediately.
        toast.info("Workflow has no steps to execute.");
        onComplete();
      }
      return;
    }
    
    if (currentNodeIndex >= workflow.nodes.length) {
      // This condition means all nodes are processed or currentNodeIndex is out of bounds.
      // The completion toast and onComplete are handled in the main logic block below.
      return;
    }

    const currentNode = workflow.nodes[currentNodeIndex];
    const totalNodes = workflow.nodes.length;
    
    // Ensure currentNode and its ID are valid before proceeding
    if (!currentNode || typeof currentNode.id === 'undefined' || currentNode.id === null) {
      console.error("Current node is invalid or missing ID at index:", currentNodeIndex, currentNode);
      // Potentially handle this as a failed step or skip
      // For now, let's assume this shouldn't happen with valid workflow data
      // If it does, the workflow might stall here. Consider advancing or failing.
      onComplete(); // Or call a failure handler
      toast.error("Workflow execution failed due to invalid node data.");
      return;
    }
    
    const timer = setTimeout(() => {
      setNodeStatuses(prev => ({
        ...prev,
        [currentNode.id]: "completed"
      }));

      if (currentNodeIndex < totalNodes - 1) {
        const nextNode = workflow.nodes[currentNodeIndex + 1];
        // Ensure nextNode and its ID are valid
        if (nextNode && typeof nextNode.id !== 'undefined' && nextNode.id !== null) {
          setNodeStatuses(prev => ({
            ...prev,
            [nextNode.id]: "running"
          }));
        } else {
           console.error("Next node is invalid or missing ID at index:", currentNodeIndex + 1, nextNode);
           // Workflow might stall or complete prematurely if next node is invalid
        }
        
        setCurrentNodeIndex(prev => prev + 1);
        setExecutionProgress(((currentNodeIndex + 1) / totalNodes) * 100);
      } else {
        // Workflow complete
        setExecutionProgress(100);
        toast.success("Workflow execution completed successfully");
        // Delay onComplete to allow final state to render
        setTimeout(() => {
          onComplete();
        }, 1000); 
      }
    }, 2500); // Each step takes 2.5 seconds

    return () => clearTimeout(timer);
  }, [currentNodeIndex, workflow, onComplete]); // Added workflow to dependencies as its structure is used

  const getStatusIcon = (status: string, nodeType: string) => {
    switch (status) {
      case "completed":
        return <Check className="h-5 w-5 text-green-500" />;
      case "running":
        return <Clock className="h-5 w-5 text-primary animate-pulse" />;
      case "failed":
        return <AlertCircle className="h-5 w-5 text-destructive" />;
      default:
        return <div className={`h-5 w-5 rounded-full border ${getNodeBorderColor(nodeType)}`} />;
    }
  };

  const getNodeBorderColor = (type: string): string => {
    switch (type) {
      case "trigger":
        return "border-blue-500/30";
      case "process":
        return "border-purple-500/30";
      case "action":
        return "border-green-500/30";
      default:
        return "border-muted-foreground/30";
    }
  };

  const getStatusBadgeColor = (status: string): string => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "running":
        return "bg-primary/20 text-primary border-primary/30";
      case "failed":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  if (!workflow || !workflow.nodes) {
    return (
      <Card className="glass-effect mt-6">
        <CardHeader>
          <CardTitle>Loading Workflow...</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Workflow data is not available.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="glass-effect mt-6">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Executing: {workflow.name}</span>
          <Badge variant="outline" className="ml-2">
            {executionProgress < 100 ? "Running" : "Completed"}
          </Badge>
        </CardTitle>
        <Progress value={executionProgress} className="h-2" />
      </CardHeader>
      <CardContent className="space-y-6">
        {workflow.nodes.map((node: any, index: number) => {
          if (!node || typeof node.id === 'undefined' || node.id === null) {
            console.warn("Rendering invalid node in workflow.nodes:", node, "at index:", index);
            return (
              <div key={`invalid-node-${index}`} className="flex items-start space-x-3 p-2 border border-destructive rounded-md">
                <AlertCircle className="h-5 w-5 text-destructive" />
                <p className="text-destructive-foreground">Invalid workflow node data at step {index + 1}.</p>
              </div>
            );
          }
          
          const status = nodeStatuses[node.id];
          const displayStatus = status || "pending";
          
          return (
            <div key={node.id} className="flex items-start space-x-3">
              <div className="mt-0.5">
                {getStatusIcon(displayStatus, node.type)}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{node.name}</h4>
                  <Badge variant="outline" className={getStatusBadgeColor(displayStatus)}>
                    {displayStatus.charAt(0).toUpperCase() + displayStatus.slice(1)}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{node.details}</p>
                
                {displayStatus === "running" && (
                  <div className="mt-2 text-sm text-primary animate-pulse">
                    {getExecutionMessage(node.type)}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

function getExecutionMessage(nodeType: string): string {
  switch (nodeType) {
    case "trigger":
      return "Initializing workflow...";
    case "process":
      return "Processing data...";
    case "action":
      return "Executing action...";
    default:
      return "Working...";
  }
}
