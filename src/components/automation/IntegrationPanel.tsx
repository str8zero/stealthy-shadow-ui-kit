
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface Integration {
  id: string;
  name: string;
  description: string;
  active: boolean;
  icon: string;
}

export function IntegrationPanel() {
  const [integrations, setIntegrations] = useState<Integration[]>([
    { 
      id: "salesforce", 
      name: "Salesforce", 
      description: "Connect to your CRM for customer data", 
      active: true,
      icon: "🔄"
    },
    { 
      id: "sap", 
      name: "SAP", 
      description: "Enterprise resource planning integration", 
      active: false,
      icon: "🏢"
    },
    { 
      id: "sharepoint", 
      name: "SharePoint", 
      description: "Document management and storage system", 
      active: true,
      icon: "📄"
    },
    { 
      id: "slack", 
      name: "Slack", 
      description: "Team communication and notifications", 
      active: false,
      icon: "💬"
    }
  ]);

  const toggleIntegration = (id: string) => {
    setIntegrations(integrations.map(integration => 
      integration.id === id 
        ? { ...integration, active: !integration.active } 
        : integration
    ));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {integrations.map((integration) => (
        <Card key={integration.id} className={`glass-effect ${integration.active ? "" : "opacity-75"}`}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{integration.icon}</span>
                  <CardTitle>{integration.name}</CardTitle>
                </div>
                <CardDescription>{integration.description}</CardDescription>
              </div>
              <Switch 
                checked={integration.active} 
                onCheckedChange={() => toggleIntegration(integration.id)} 
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                {integration.active ? "Connected" : "Disconnected"}
              </span>
              <Button 
                variant={integration.active ? "outline" : "default"} 
                size="sm"
              >
                {integration.active ? "Configure" : "Connect"}
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
