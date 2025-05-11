
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Features() {
  const features = [
    {
      title: "Advanced AI Integration",
      description: "Seamlessly integrate state-of-the-art AI models into your workflow for enhanced productivity.",
      icon: "🧠"
    },
    {
      title: "Real-time Analysis",
      description: "Process and analyze data in real-time with our lightning-fast AI-powered infrastructure.",
      icon: "⚡"
    },
    {
      title: "Custom Training",
      description: "Train models on your specific data to create personalized AI solutions for your unique needs.",
      icon: "🎯"
    },
    {
      title: "Secure & Private",
      description: "Enterprise-grade security and privacy controls to keep your sensitive data safe at all times.",
      icon: "🔒"
    },
    {
      title: "Multi-platform Support",
      description: "Deploy your AI solutions across web, mobile, and desktop platforms with our unified SDK.",
      icon: "🔄"
    },
    {
      title: "24/7 Expert Support",
      description: "Access our team of AI specialists whenever you need assistance with your implementation.",
      icon: "🛟"
    }
  ];

  return (
    <section id="features" className="py-12 md:py-20 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Everything You Need
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform provides comprehensive AI capabilities to power your next-gen applications.
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
