
import { Button } from "@/components/ui/button";
import { Moon, ChevronDown } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-purple-600 animate-pulse-slow"></div>
          <span className="font-bold text-xl text-gradient">NexusAI</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Testimonials
          </a>
          <a href="#pricing" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="/automation" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Automation Platform
          </a>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1">
                Resources <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="glass-effect">
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Blog</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Moon className="h-5 w-5" />
          </Button>
          <Button variant="secondary" size="sm" className="hidden md:flex">
            Sign In
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-500/90">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
