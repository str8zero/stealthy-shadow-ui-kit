
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export function FlowtuneDifferentiators() {
  const differentiators = [
    {
      feature: "Workflow Creation",
      flowtune: "Full workflows built by typing goals in natural language",
      competitor: "Traditional drag-and-drop canvas",
    },
    {
      feature: "Templates",
      flowtune: "Auto-generated, industry-specific flows tailored to your business",
      competitor: "Static pre-built templates",
    },
    {
      feature: "Learning Optimization",
      flowtune: "Continuously improves based on workflow outcomes",
      competitor: "No learning optimization",
    },
    {
      feature: "Business Solutions",
      flowtune: "Built-in systems for real-world business goals",
      competitor: "Requires custom flow building",
    },
    {
      feature: "Voice Interface",
      flowtune: "Create workflows via voice commands",
      competitor: "No voice interface",
    },
    {
      feature: "Deployment Options",
      flowtune: "Cloud and self-hosted for privacy-focused clients",
      competitor: "Cloud-only offering",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Why Floword AI
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              The Future of Business Automation
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See how Floword AI stands out from traditional automation platforms
            </p>
          </div>
        </div>
        
        <Card className="glass-effect bg-card/20 border-primary/10 overflow-hidden">
          <CardHeader className="pb-0">
            <CardTitle className="text-center">Competitive Advantages</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="rounded-md border border-primary/10 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-primary/5">
                    <TableHead className="w-1/3">Feature</TableHead>
                    <TableHead className="w-1/3">Floword AI</TableHead>
                    <TableHead className="w-1/3">Traditional Platforms</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {differentiators.map((item, index) => (
                    <TableRow key={index} className={index % 2 === 0 ? "bg-background/30" : "bg-background/10"}>
                      <TableCell className="font-medium">{item.feature}</TableCell>
                      <TableCell className="text-primary">
                        <div className="flex items-start gap-2">
                          <Check className="h-5 w-5 mt-0.5 text-green-500 flex-shrink-0" />
                          <span>{item.flowtune}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{item.competitor}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
