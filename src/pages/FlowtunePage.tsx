
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FlowtuneHero } from "@/components/flowtune/FlowtuneHero";
import { FlowtuneFeatures } from "@/components/flowtune/FlowtuneFeatures";
import { FlowtunePlaybooks } from "@/components/flowtune/FlowtunePlaybooks";
import { FlowtuneDifferentiators } from "@/components/flowtune/FlowtuneDifferentiators";
import { FlowtuneWorkflowBuilder } from "@/components/flowtune/FlowtuneWorkflowBuilder";

const FlowtunePage = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main>
        <FlowtuneHero onGetStarted={() => setActiveSection("builder")} />
        
        {activeSection === "builder" ? (
          <FlowtuneWorkflowBuilder />
        ) : (
          <>
            <FlowtuneFeatures />
            <FlowtuneDifferentiators />
            <FlowtunePlaybooks />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default FlowtunePage;
