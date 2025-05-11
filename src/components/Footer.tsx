
export function Footer() {
  return (
    <footer className="py-10 border-t border-border/40">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-purple-600"></div>
              <span className="font-bold text-xl text-gradient">NexusAI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Building the future of AI-powered solutions for businesses of all sizes.
            </p>
            <div className="flex gap-4 mt-4">
              {[1, 2, 3, 4].map((i) => (
                <a 
                  href="#" 
                  key={i}
                  className="h-8 w-8 flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <div className="h-4 w-4 rounded-full bg-foreground/60"></div>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium text-sm mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">API</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-sm mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Terms</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-sm mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Status</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Community</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border/40 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-muted-foreground">
            © 2025 NexusAI. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary">Terms of Service</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
