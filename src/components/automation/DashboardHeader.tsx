
import { Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-purple-600"></div>
          <span className="font-bold text-xl text-gradient">NexusAI Automation</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="glass-effect">
              <DropdownMenuItem>Account Settings</DropdownMenuItem>
              <DropdownMenuItem>API Configurations</DropdownMenuItem>
              <DropdownMenuItem>User Management</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <a href="/" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Home
          </a>
        </div>
      </div>
    </header>
  );
}
