
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
    workflow.nodes.forEach((node: any, index: number) => {
      initialStatuses[node.id] = index === 0 ? "running" : "pending";
    });
    setNodeStatuses(initialStatuses);
  }, [workflow]);

  // Simulate workflow execution
  useEffect(() => {
    if (currentNodeIndex >= workflow.nodes.length) {
      toast.success("Workflow execution completed successfully");
      onComplete();
      return;
    }

    const currentNode = workflow.nodes[currentNodeIndex];
    const totalNodes = workflow.nodes.length;
    
    const timer = setTimeout(() => {
      // Update current node status to completed
      setNodeStatuses(prev => ({
        ...prev,
        [currentNode.id]: "completed"
      }));

      // Move to next node
      if (currentNodeIndex < totalNodes - 1) {
        const nextNode = workflow.nodes[currentNodeIndex + 1];
        setNodeStatuses(prev => ({
          ...prev,
          [nextNode.id]: "running"
        }));
        
        setCurrentNodeIndex(prev => prev + 1);
        setExecutionProgress(((currentNodeIndex + 1) / totalNodes) * 100);
      } else {
        // Workflow complete
        setExecutionProgress(100);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 2500); // Each step takes 2.5 seconds

    return () => clearTimeout(timer);
  }, [currentNodeIndex, workflow.nodes, onComplete]);

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
        {workflow.nodes.map((node: any, index: number) => (
          <div key={node.id} className="flex items-start space-x-3">
            <div className="mt-0.5">
              {getStatusIcon(nodeStatuses[node.id], node.type)}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">{node.name}</h4>
                <Badge variant="outline" className={getStatusBadgeColor(nodeStatuses[node.id])}>
                  {nodeStatuses[node.id].charAt(0).toUpperCase() + nodeStatuses[node.id].slice(1)}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{node.details}</p>
              
              {nodeStatuses[node.id] === "running" && (
                <div className="mt-2 text-sm text-primary animate-pulse">
                  {getExecutionMessage(node.type)}
                </div>
              )}
            </div>
          </div>
        ))}
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
