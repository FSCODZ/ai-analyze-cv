import { Upload, Brain, BarChart3, Zap, Shield, Clock } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

import upload from "../assets/upload.png";
import analyze from "../assets/analyze.png";
import scoreIcon from "../assets/score.png";

const Features = () => {
  const features = [
    {
      icon: <Upload className="w-8 h-8 text-primary" />,
      image: upload,
      title: "Easy Resume Upload",
      description: "Simply drag and drop your CV or upload multiple formats. Our system supports PDF, DOC, and DOCX files with instant processing.",
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      image: analyze,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze your resume content, structure, keywords, and formatting against industry standards.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      image: scoreIcon,
      title: "Detailed ATS Scoring",
      description: "Get comprehensive ATS compatibility scores with specific recommendations for improvement and job-specific optimization tips.",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Instant Results",
      description: "Receive your analysis in under 30 seconds with real-time feedback and actionable insights to improve your job prospects.",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Secure & Private",
      description: "Your data is encrypted and processed securely. We never store your personal information or share it with third parties.",
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "24/7 Availability",
      description: "Access our AI analysis tool anytime, anywhere. Perfect for job seekers working on applications around the clock.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose Our{" "}
            <span className="bg-gradient-hero bg-clip-text ">
              AI CV Analyzer
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leverage cutting-edge artificial intelligence to optimize your resume for any job application 
            and increase your chances of landing interviews.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant hover:-translate-y-2 transition-bounce border-0 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                {feature.image ? (
                  <div className="mx-auto mb-4 w-16 h-16 rounded-xl overflow-hidden bg-primary/10 flex items-center justify-center">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                  </div>
                ) : (
                  <div className="mx-auto mb-4 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                    {feature.icon}
                  </div>
                )}
                <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;