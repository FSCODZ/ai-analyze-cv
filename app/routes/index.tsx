
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import HowItWorks from "~/components/HowItWorks";
import Features from "~/components/Features";
import Footer from "~/components/Footer";
import heroAi from "~/assets/ai-hero.jpg";
import Navbar from "~/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar showUploadButton = {false} />
      <section className="relative min-h-screen flex items-center bg-gradient overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

<div className="container mx-auto px-6 pt-20 pb-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-8 animate-slide-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                AI-Powered CV Analysis
              </div>
              
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Welcome to{" "}
                  <span className="hero-gradient">
                    CVision
                  </span>
                </h1>
                
                <h2 className="text-xl text-muted-foreground leading-relaxed">
                  Where you can easily upload your resume and get feedback from an AI in seconds
                </h2>
                
                <p className="text-lg text-muted-foreground">
                  Get smart feedback on your CV with our advanced AI analysis system.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/auth?next=/home"
                  className="hero-button inline-flex items-center justify-center gap-2 text-lg px-8 py-4"
                >
                  Continue to Login
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="flex items-center gap-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10k+</div>
                  <div className="text-sm text-muted-foreground">CVs Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">&lt; 30s</div>
                  <div className="text-sm text-muted-foreground">Analysis Time</div>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <img 
                  src={heroAi} 
                  alt="CVision" 
                  className="w-(80%) h-auto rounded-2xl shadow-elegant hover:shadow-glow transition-smooth"
                />
             
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <Features />
     
      <Footer />
    </div>
  );
};

export default Index;