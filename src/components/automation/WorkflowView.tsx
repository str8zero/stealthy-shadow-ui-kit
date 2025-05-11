
import { useState, useEffect } from "react";
import { Check, Clock, ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

interface WorkflowStep {
  id: string;
  name: string;
  status: "pending" | "in_progress" | "completed" | "failed";
  description: string;
}

interface WorkflowViewProps {
  workflowId: string;
}

export function WorkflowView({ workflowId }: WorkflowViewProps) {
  const [workflow, setWorkflow] = useState<{
    id: string;
    name: string;
    progress: number;
    steps: WorkflowStep[];
  } | null>(null);
  
  const [currentStep, setCurrentStep] = useState(0);
  
  useEffect(() => {
    // Simulated workflow data - in a real app, this would be fetched from an API
    const demoWorkflow = {
      id: workflowId,
      name: "Document Processing Automation",
      progress: 40,
      steps: [
        {
          id: "step-1",
          name: "Document Extraction",
          status: "completed" as const,
          description: "Extract text and data from uploaded documents"
        },
        {
          id: "step-2",
          name: "Classification",
          status: "in_progress" as const,
          description: "Categorize document type and content"
        },
        {
          id: "step-3",
          name: "Validation",
          status: "pending" as const,
          description: "Verify data against business rules"
        },
        {
          id: "step-4",
          name: "Integration",
          status: "pending" as const,
          description: "Update external systems with extracted data"
        }
      ]
    };
    
    setWorkflow(demoWorkflow);
    
    // Simulate workflow progression
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= 3) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 8000);
    
    return () => clearInterval(interval);
  }, [workflowId]);
  
  useEffect(() => {
    if (workflow && currentStep > 0) {
      const updatedSteps = [...workflow.steps];
      
      if (currentStep < updatedSteps.length) {
        // Mark current step as in progress
        updatedSteps[currentStep].status = "in_progress";
        
        // Mark previous step as completed
        if (currentStep > 0) {
          updatedSteps[currentStep - 1].status = "completed";
        }
      }
      
      setWorkflow({
        ...workflow,
        steps: updatedSteps,
        progress: Math.min(100, (currentStep * 100) / updatedSteps.length)
      });
    }
  }, [currentStep, workflow]);
  
  if (!workflow) {
    return <div className="flex justify-center py-8">Loading workflow...</div>;
  }
  
  const getStepIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <Check className="h-5 w-5 text-green-500" />;
      case "in_progress":
        return <Clock className="h-5 w-5 text-primary animate-pulse" />;
      case "failed":
        return <span className="h-5 w-5 text-destructive">✕</span>;
      default:
        return <div className="h-5 w-5 rounded-full border border-muted-foreground/30" />;
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="font-medium">{workflow.name}</h3>
          <span className="text-sm text-muted-foreground">{workflow.progress}% complete</span>
        </div>
        <Progress value={workflow.progress} className="h-2" />
      </div>
      
      <div className="space-y-4">
        {workflow.steps.map((step, index) => (
          <div key={step.id} className="space-y-2">
            <div className="flex items-start gap-3">
              <div className="mt-0.5">{getStepIcon(step.status)}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className={`font-medium ${step.status === "in_progress" ? "text-primary" : ""}`}>
                    {step.name}
                  </h4>
                  <span className="text-xs capitalize px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                    {step.status.replace("_", " ")}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
            {index < workflow.steps.length - 1 && (
              <div className="ml-2.5 pl-3 border-l h-6 border-dashed border-border" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
