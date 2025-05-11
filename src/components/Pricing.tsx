
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams and startups.",
      price: "$49",
      period: "/month",
      features: [
        "1 AI model",
        "100k API requests/month",
        "Basic analytics",
        "Email support",
        "1 team member"
      ],
      highlighted: false
    },
    {
      name: "Pro",
      description: "Ideal for growing businesses.",
      price: "$99",
      period: "/month",
      features: [
        "5 AI models",
        "500k API requests/month",
        "Advanced analytics",
        "Priority support",
        "5 team members",
        "Custom model training"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs.",
      price: "Custom",
      period: "",
      features: [
        "Unlimited AI models",
        "Unlimited API requests",
        "Enterprise analytics",
        "24/7 dedicated support",
        "Unlimited team members",
        "Custom model training",
        "On-premise deployment"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-12 md:py-20 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Pricing
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that works best for your business needs.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {plans.map((plan, index) => (
            <Card key={index} className={`backdrop-blur-md ${plan.highlighted ? 'bg-primary/10 border-primary/30' : 'bg-card/30 border-primary/5'} relative`}>
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs py-1 px-3 rounded-full">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${plan.highlighted ? 'bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-500/90' : ''}`}
                  variant={plan.highlighted ? 'default' : 'outline'}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
