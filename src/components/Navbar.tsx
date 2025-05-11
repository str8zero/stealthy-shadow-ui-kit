import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProfileButton } from "./auth/ProfileButton";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tighter text-foreground">
              Floword
            </span>
          </Link>
          
          <nav className="hidden gap-6 md:flex">
            <Link to="/floword" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Workflows
            </Link>
            <Link to="/automation" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Automation
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <ProfileButton />
        </div>
      </div>
    </header>
  );
}
