
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, ArrowRight, MessageSquare, Play, Save, XCircle } from "lucide-react";
import { FlowtuneWorkflowVisualizer } from "./FlowtuneWorkflowVisualizer";
import { FlowtuneWorkflowExecution } from "./FlowtuneWorkflowExecution";
import { toast } from "@/components/ui/sonner";

export function FlowtuneWorkflowBuilder() {
  const [prompt, setPrompt] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [workflow, setWorkflow] = useState<any>(null);
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionCount, setExecutionCount] = useState(0);
  
  const samplePrompts = [
    "Remind clients who didn't pay invoices in 7 days",
    "Auto-send onboarding checklist to new hires",
    "Send 3 emails after signup, spaced 3 days apart",
    "Text me when someone books an appointment"
  ];
  
  const handleSubmit = () => {
    if (!prompt.trim()) return;
    
    setIsProcessing(true);
    
    // Simulate AI processing with a timeout
    setTimeout(() => {
      // Generate a mock workflow based on the prompt
      const mockWorkflow = generateMockWorkflow(prompt);
      setWorkflow(mockWorkflow);
      setIsProcessing(false);
    }, 2000);
  };
  
  // Mock function to generate a workflow from a prompt
  const generateMockWorkflow = (promptText: string) => {
    // Very simple pattern matching for demo purposes
    const workflow = {
      name: promptText.charAt(0).toUpperCase() + promptText.slice(1),
      description: "Automatically generated workflow based on your prompt.",
      nodes: [] as any[],
    };
    
    // Add trigger node
    if (promptText.includes("invoice") || promptText.includes("pay")) {
      workflow.nodes.push({
        id: "trigger",
        type: "trigger",
        name: "Invoice Status Check",
        details: "Monitors unpaid invoices in your accounting system",
        icon: "📊"
      });
    } else if (promptText.includes("onboarding") || promptText.includes("hire")) {
      workflow.nodes.push({
        id: "trigger",
        type: "trigger",
        name: "New Hire Detection",
        details: "Triggered when a new employee is added to HR system",
        icon: "👤"
      });
    } else if (promptText.includes("signup") || promptText.includes("email")) {
      workflow.nodes.push({
        id: "trigger",
        type: "trigger",
        name: "New Signup Detection",
        details: "Triggered when a user signs up on your platform",
        icon: "✍️"
      });
    } else if (promptText.includes("appointment") || promptText.includes("book")) {
      workflow.nodes.push({
        id: "trigger",
        type: "trigger",
        name: "Calendar Booking",
        details: "Triggered when a new appointment is booked",
        icon: "📅"
      });
    } else {
      workflow.nodes.push({
        id: "trigger",
        type: "trigger",
        name: "Custom Trigger",
        details: "Initiates the workflow based on specified conditions",
        icon: "🔄"
      });
    }
    
    // Add processing node
    workflow.nodes.push({
      id: "process",
      type: "process",
      name: "Data Processing",
      details: "Analyzes and prepares data for the next step",
      icon: "⚙️"
    });
    
    // Add action node
    if (promptText.includes("remind") || promptText.includes("send") || promptText.includes("email")) {
      workflow.nodes.push({
        id: "action",
        type: "action",
        name: "Send Communication",
        details: "Sends an email or notification",
        icon: "📧"
      });
    } else if (promptText.includes("text") || promptText.includes("SMS")) {
      workflow.nodes.push({
        id: "action",
        type: "action",
        name: "Send SMS",
        details: "Sends text message via Twilio",
        icon: "📱"
      });
    } else {
      workflow.nodes.push({
        id: "action",
        type: "action",
        name: "Custom Action",
        details: "Performs the required task to complete the workflow",
        icon: "✅"
      });
    }
    
    return workflow;
  };
  
  const useSamplePrompt = (prompt: string) => {
    setPrompt(prompt);
  };
  
  const handleRunWorkflow = () => {
    setIsExecuting(true);
    setExecutionCount(prev => prev + 1);
    toast.info("Workflow execution started");
  };

  const handleSaveWorkflow = () => {
    toast.success("Workflow saved successfully");
  };

  const handleCancelExecution = () => {
    setIsExecuting(false);
    toast.info("Workflow execution cancelled");
  };

  const handleExecutionComplete = () => {
    setIsExecuting(false);
  };
  
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-effect border-primary/10 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Floword AI Workflow Builder</CardTitle>
              <CardDescription className="text-center">
                Describe what you want to automate in plain language
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Textarea
                  placeholder="e.g., 'Send a welcome email when a new customer signs up'"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[100px] bg-background/50 border-border"
                  disabled={isExecuting}
                />
                
                <div className="flex flex-wrap gap-2 mt-3">
                  <div className="text-sm text-muted-foreground mr-2 pt-1">Try:</div>
                  {samplePrompts.map((samplePrompt, index) => (
                    <Badge 
                      key={index} 
                      className="cursor-pointer bg-secondary/60 hover:bg-primary/20 transition-colors"
                      onClick={() => useSamplePrompt(samplePrompt)}
                    >
                      {samplePrompt}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center">
                <Button
                  onClick={handleSubmit}
                  disabled={!prompt.trim() || isProcessing || isExecuting}
                  className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-500/90 w-full sm:w-auto"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Building Workflow
                    </>
                  ) : (
                    <>
                      Build Workflow <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
              
              {workflow && !isProcessing && (
                <div className="space-y-6 mt-6 pt-6 border-t border-border/40">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">{workflow.name}</h3>
                    <div className="flex gap-2">
                      {isExecuting ? (
                        <Button variant="destructive" size="sm" onClick={handleCancelExecution}>
                          <XCircle className="h-4 w-4 mr-1" /> Cancel
                        </Button>
                      ) : (
                        <>
                          <Button variant="outline" size="sm">
                            <MessageSquare className="h-4 w-4 mr-1" /> Edit
                          </Button>
                          <Button 
                            size="sm" 
                            className="bg-primary hover:bg-primary/90"
                            onClick={handleRunWorkflow}
                          >
                            <Play className="h-4 w-4 mr-1" /> Run
                          </Button>
                          <Button variant="outline" size="sm" onClick={handleSaveWorkflow}>
                            <Save className="h-4 w-4 mr-1" /> Save
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                  
                  {isExecuting ? (
                    <FlowtuneWorkflowExecution 
                      key={`execution-${executionCount}`}
                      workflow={workflow} 
                      onComplete={handleExecutionComplete} 
                    />
                  ) : (
                    <FlowtuneWorkflowVisualizer workflow={workflow} />
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] translate-x-1/2 -z-10" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] -translate-x-1/2 -z-10" />
    </section>
  );
}
