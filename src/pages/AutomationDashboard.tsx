
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProblemClassifier } from "@/components/automation/ProblemClassifier";
import { WorkflowView } from "@/components/automation/WorkflowView";
import { IntegrationPanel } from "@/components/automation/IntegrationPanel";
import { DashboardHeader } from "@/components/automation/DashboardHeader";

const AutomationDashboard = () => {
  const [activeWorkflow, setActiveWorkflow] = useState<string | null>(null);
  
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container py-6 space-y-8">
        <h1 className="text-3xl font-bold text-gradient">Enterprise AI Automation</h1>
        <p className="text-muted-foreground max-w-3xl">
          Leverage AI to solve enterprise pain points, automate workflows, and integrate with your existing systems.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2 glass-effect">
            <CardHeader>
              <CardTitle>Active Workflows</CardTitle>
              <CardDescription>Monitor and manage automated processes</CardDescription>
            </CardHeader>
            <CardContent>
              {activeWorkflow ? (
                <WorkflowView workflowId={activeWorkflow} />
              ) : (
                <div className="flex flex-col items-center justify-center h-60 text-center">
                  <p className="text-muted-foreground mb-4">No active workflow selected</p>
                  <Button 
                    variant="default" 
                    onClick={() => setActiveWorkflow("demo-workflow-1")}
                    className="bg-gradient-to-r from-primary to-purple-600"
                  >
                    Start Demo Workflow
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle>Problem Classifier</CardTitle>
                <CardDescription>Identify enterprise pain points</CardDescription>
              </CardHeader>
              <CardContent>
                <ProblemClassifier onClassify={(problem) => console.log(problem)} />
              </CardContent>
            </Card>
            
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Active Workflows</span>
                  <span className="font-medium">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Completed Tasks</span>
                  <span className="font-medium">27</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Success Rate</span>
                  <span className="font-medium">94%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <Tabs defaultValue="integrations" className="w-full">
          <TabsList className="glass-effect">
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="integrations" className="mt-4">
            <IntegrationPanel />
          </TabsContent>
          <TabsContent value="history" className="mt-4">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle>Workflow History</CardTitle>
                <CardDescription>Review past automation runs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Historical workflow data will appear here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="settings" className="mt-4">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>Configure your automation platform</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Settings will appear here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AutomationDashboard;
