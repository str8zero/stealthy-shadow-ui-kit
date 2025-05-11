
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function FlowtuneFeatures() {
  const features = [
    {
      title: "Prompt-Driven Builder",
      description: "Build complete workflows by simply typing your goals in natural language.",
      icon: "🗣️"
    },
    {
      title: "AI-Curated Templates",
      description: "Access auto-generated, industry-specific workflow templates tailored to your business.",
      icon: "📚"
    },
    {
      title: "Foresight Feedback Loop",
      description: "Workflows continuously improve based on real-world outcomes and performance.",
      icon: "🔄"
    },
    {
      title: "Guided Business Playbooks",
      description: "Pre-built systems for real-world goals like invoice automation and client onboarding.",
      icon: "📋"
    },
    {
      title: "Voice-to-Automation",
      description: "Create workflows with simple voice commands on mobile or web interfaces.",
      icon: "🎤"
    },
    {
      title: "Self-Hosted Option",
      description: "Deploy Flowtune AI on your own infrastructure for enhanced privacy and control.",
      icon: "🔒"
    }
  ];

  return (
    <section id="features" className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Build Workflows With Words
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Flowtune AI transforms how businesses automate workflows by making complex processes simple.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/30 backdrop-blur-md border border-primary/5 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader>
                <div className="text-4xl mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
