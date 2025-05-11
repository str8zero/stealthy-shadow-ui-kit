
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";

interface ProblemClassifierProps {
  onClassify: (problem: string) => void;
}

export function ProblemClassifier({ onClassify }: ProblemClassifierProps) {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  
  const handleClassify = () => {
    if (!input.trim()) return;
    
    setIsLoading(true);
    
    // Simulated AI classification - in a real app, this would call an AI service
    setTimeout(() => {
      const problemTypes = [
        "document_processing",
        "customer_onboarding",
        "inventory_management",
        "compliance_reporting",
        "data_integration"
      ];
      
      // Simple keyword matching for demo purposes
      const matched = problemTypes.filter(type => 
        input.toLowerCase().includes(type.split("_")[0]) || 
        input.toLowerCase().includes(type.split("_")[1])
      );
      
      setSuggestions(matched.length > 0 ? matched : [problemTypes[Math.floor(Math.random() * problemTypes.length)]]);
      setIsLoading(false);
    }, 1500);
  };
  
  const handleSelectProblem = (problem: string) => {
    onClassify(problem);
    setInput("");
    setSuggestions([]);
  };
  
  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Describe the business problem you need to solve..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="min-h-[120px] bg-background/50 border-border"
      />
      
      <Button
        onClick={handleClassify}
        disabled={!input.trim() || isLoading}
        className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-500/90"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing
          </>
        ) : (
          "Classify Problem"
        )}
      </Button>
      
      {suggestions.length > 0 && (
        <div className="pt-2">
          <p className="text-sm text-muted-foreground mb-2">Identified problem categories:</p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((problem) => (
              <Badge 
                key={problem} 
                className="cursor-pointer bg-secondary hover:bg-primary transition-colors"
                onClick={() => handleSelectProblem(problem)}
              >
                {problem.replace("_", " ")}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
