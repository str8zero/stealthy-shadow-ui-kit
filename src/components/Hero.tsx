
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none animate-fade-in">
                <span className="text-gradient">AI-Powered</span> Future Awaits
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Integrate powerful AI capabilities into your workflow. Experience the next generation of intelligent solutions.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-500/90">
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
                View Demo
              </Button>
            </div>
            <div className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="inline-block h-8 w-8 rounded-full bg-gradient-to-r from-secondary to-secondary/50 ring-2 ring-background"></div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">4,000+</span> satisfied users
              </div>
            </div>
          </div>
          <div className="mx-auto lg:mx-0 relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/30 to-purple-500/30 blur-xl"></div>
            <div className="glass-effect rounded-xl p-1 animate-glow">
              <div className="h-[350px] w-full rounded-lg bg-secondary/40 lg:h-[400px] xl:h-[500px]"></div>
            </div>
            <div className="absolute -bottom-10 -left-10 h-[150px] w-[150px] rounded-full bg-primary/20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
