
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Implementing NexusAI has transformed our business operations. We've seen a 40% increase in productivity since deployment.",
      author: "Alex Johnson",
      role: "CTO, TechGlobe"
    },
    {
      quote: "The custom AI models we've trained with NexusAI have given us insights we never thought possible. A game-changer for data analysis.",
      author: "Sarah Miller",
      role: "Data Scientist, AnalyticsPlus"
    },
    {
      quote: "The security features offered by NexusAI gave us the confidence to move our sensitive operations to an AI-powered system.",
      author: "Michael Chang",
      role: "Security Director, SecureFinance"
    }
  ];

  return (
    <section id="testimonials" className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Trusted by Innovative Teams
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from the organizations that have transformed their operations with our AI solutions.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="backdrop-blur-md bg-card/30 border border-primary/10">
              <CardContent className="pt-6">
                <div className="mb-4 text-2xl text-primary">"</div>
                <p className="text-lg">{testimonial.quote}</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start border-t border-primary/5 pt-4">
                <div className="font-medium">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
