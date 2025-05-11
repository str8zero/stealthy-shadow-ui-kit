
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function FlowtunePlaybooks() {
  const playbookCases = [
    {
      useCase: "Client Follow-Ups",
      prompt: "Remind clients who didn't pay invoices in 7 days",
      integrations: ["Stripe", "Gmail", "Notion"],
      category: "Finance"
    },
    {
      useCase: "HR Onboarding",
      prompt: "Auto-send onboarding checklist to new hires",
      integrations: ["Email", "Slack", "Google Docs"],
      category: "Human Resources"
    },
    {
      useCase: "Lead Nurturing",
      prompt: "Send 3 emails after signup, spaced 3 days apart",
      integrations: ["CRM", "Email", "GPT-4"],
      category: "Marketing"
    },
    {
      useCase: "Feedback Collection",
      prompt: "Summarize user feedback and create a Notion doc weekly",
      integrations: ["Forms", "Sentiment Analysis", "Notion"],
      category: "Customer Success"
    },
    {
      useCase: "Legal Compliance",
      prompt: "Monitor policy changes in government sites",
      integrations: ["Web Scraper", "GPT-4", "Notifications"],
      category: "Legal"
    },
    {
      useCase: "Local Business",
      prompt: "Text me when someone books an appointment",
      integrations: ["Calendly", "Twilio SMS"],
      category: "Small Business"
    }
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Business Playbooks
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Solve Real Business Problems
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ready-to-deploy automated workflows for common business challenges
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {playbookCases.map((playbook, index) => (
            <Card key={index} className="bg-card/30 backdrop-blur-md border border-primary/5">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{playbook.useCase}</CardTitle>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    {playbook.category}
                  </Badge>
                </div>
                <CardDescription>
                  <div className="flex items-center mt-1">
                    <span className="text-sm font-medium text-muted-foreground">Prompt:</span>
                  </div>
                  <div className="mt-1 p-2 rounded bg-secondary/40 text-sm">
                    "{playbook.prompt}"
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {playbook.integrations.map((integration, i) => (
                    <Badge key={i} variant="secondary" className="bg-secondary/60">
                      {integration}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <div className="text-sm text-muted-foreground">
                  Setup time: ~3 minutes
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
