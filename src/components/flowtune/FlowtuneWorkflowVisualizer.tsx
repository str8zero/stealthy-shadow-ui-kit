
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface Node {
  id: string;
  type: string;
  name: string;
  details: string;
  icon: string;
}

interface Workflow {
  name: string;
  description: string;
  nodes: Node[];
}

interface FlowtuneWorkflowVisualizerProps {
  workflow: Workflow;
}

export function FlowtuneWorkflowVisualizer({ workflow }: FlowtuneWorkflowVisualizerProps) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-max">
        <div className="flex items-start gap-4 py-4">
          {workflow.nodes.map((node, index) => (
            <div key={node.id} className="flex items-center">
              <Card className={`w-60 backdrop-blur-md border ${getNodeColor(node.type)}`}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{node.icon}</div>
                    <div>
                      <h4 className="font-medium">{node.name}</h4>
                      <Badge variant="outline" className={getBadgeColor(node.type)}>
                        {node.type.charAt(0).toUpperCase() + node.type.slice(1)}
                      </Badge>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {node.details}
                  </p>
                </CardContent>
              </Card>
              
              {index < workflow.nodes.length - 1 && (
                <div className="mx-2 flex-shrink-0">
                  <ArrowRight className="h-6 w-6 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-4 text-sm text-muted-foreground">
          <p>{workflow.description}</p>
          <p className="mt-2">This workflow will run automatically based on the trigger conditions.</p>
        </div>
      </div>
    </div>
  );
}

function getNodeColor(type: string): string {
  switch (type) {
    case "trigger":
      return "border-blue-500/30 bg-blue-500/10";
    case "process":
      return "border-purple-500/30 bg-purple-500/10";
    case "action":
      return "border-green-500/30 bg-green-500/10";
    default:
      return "border-primary/30 bg-primary/10";
  }
}

function getBadgeColor(type: string): string {
  switch (type) {
    case "trigger":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    case "process":
      return "bg-purple-500/20 text-purple-400 border-purple-500/30";
    case "action":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    default:
      return "bg-primary/20 text-primary border-primary/30";
  }
}
