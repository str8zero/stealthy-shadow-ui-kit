
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FlowtuneHero } from "@/components/flowtune/FlowtuneHero";
import { FlowtuneFeatures } from "@/components/flowtune/FlowtuneFeatures";
import { FlowtunePlaybooks } from "@/components/flowtune/FlowtunePlaybooks";
import { FlowtuneDifferentiators } from "@/components/flowtune/FlowtuneDifferentiators";
import { FlowtuneWorkflowBuilder } from "@/components/flowtune/FlowtuneWorkflowBuilder";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/sonner";

const FlowtunePage = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const navigate = useNavigate();

  // Redirect users who try to access the old /flowtune route to the new /floword route
  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === "/flowtune") {
      navigate("/floword", { replace: true });
      toast.info("We've updated our URL to /floword");
    }
  }, [navigate]);

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
