import { Upload, Cpu, FileCheck, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button"; // justera vägen om det behövs

export default function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="w-12 h-12 text-primary" />,
      step: "01",
      title: "Upload Your Resume",
      description:
        "Drag and drop your CV or browse to select it. We support PDF, DOC, and DOCX formats for your convenience.",
    },
    {
      icon: <Cpu className="w-12 h-12 text-primary" />,
      step: "02",
      title: "AI Analysis Process",
      description:
        "Our advanced AI analyzes your resume structure, content, keywords, and formatting against ATS requirements and job descriptions.",
    },
    {
      icon: <FileCheck className="w-12 h-12 text-primary" />,
      step: "03",
      title: "Get Detailed Results",
      description:
        "Receive comprehensive feedback with ATS scores, improvement suggestions, and job-specific optimization recommendations.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How It               Works

          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get professional resume analysis in three simple steps. No signup
            required, instant results guaranteed.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative animate-slide-in text-center bg-card/50 backdrop-blur-sm rounded-xl p-6 shadow-md group hover:shadow-elegant hover:-translate-y-2 transition-bounce"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-full w-full z-0">
                  <div className="w-full h-0.5 bg-gradient-to-r from-primary to-primary-glow opacity-30"></div>
                  <ArrowRight className="absolute top-1/2 right-4 transform -translate-y-1/2 w-6 h-6 text-primary/50" />
                </div>
              )}

              <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center text-white shadow-elegant group-hover:shadow-glow transition-smooth">
                {step.icon}
              </div>
              <div className="text-sm font-semibold text-primary tracking-wider">
                STEP {step.step}
              </div>
              <h3 className="text-2xl font-semibold mt-2 group-hover:text-primary transition-smooth">
                {step.title}
              </h3>
              <p className="text-base text-muted-foreground mt-4 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center animate-slide-in" style={{ animationDelay: "0.6s" }}>
          <Button  size="lg" className="text-lg px-8 py-6">
            Try It Now - It's Free
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            No registration required • Results in under 30 seconds
          </p>
        </div>
      </div>
    </section>
  );
}
