
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl mb-6">
            <span className="text-gradient">Enterprise AI</span> Automation Platform
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Harness the power of AI to solve your business pain points, automate workflows, 
            and integrate with your enterprise systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/automation">
              <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-500/90">
                Explore Automation Platform
              </Button>
            </Link>
            <Link to="/flowtune">
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                Try Flowtune AI
              </Button>
            </Link>
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
