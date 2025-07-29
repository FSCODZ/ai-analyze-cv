import { Mail, Heart } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <span className="text-xl font-bold">AI CV Analyzer</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Transform your career with AI-powered resume analysis. Get instant ATS scores, 
              personalized feedback, and optimization recommendations.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="icon">
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-smooth">
                How It Works
              </div>
              <div className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-smooth">
                Features
              </div>
              <div className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-smooth">
                Sample Analysis
              </div>
              <div className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-smooth">
                FAQ
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-smooth">
                Privacy Policy
              </div>
              <div className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-smooth">
                Terms of Service
              </div>
              <div className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-smooth">
                Contact Us
              </div>
              <div className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-smooth">
                Help Center
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 AI CV Analyzer. All rights reserved.
          </div>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;