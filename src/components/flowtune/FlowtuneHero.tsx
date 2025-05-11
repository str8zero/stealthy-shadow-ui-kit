
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FlowtuneHeroProps {
  onGetStarted: () => void;
}

export function FlowtuneHero({ onGetStarted }: FlowtuneHeroProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl mb-6">
            <span className="text-gradient">Flowtune AI</span>
          </h1>
          <p className="text-3xl font-medium mb-8 text-foreground/90">
            From prompt to process—business automation in your own words.
          </p>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create powerful, AI-driven business workflows using natural language. 
            Think "Notion meets Zapier meets ChatGPT" but radically simpler, more visual, and goal-focused.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={onGetStarted}
              className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-500/90 group"
            >
              Start Building Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              See Examples
            </Button>
          </div>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/20 blur-[120px] -z-10" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600/30 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 -z-10" />
    </section>
  );
}
