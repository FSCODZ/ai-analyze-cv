import { Upload, Cpu, FileCheck, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="w-12 h-12 text-white" />,
      step: "01",
      title: "Upload Your Resume",
      description: "Drag and drop your CV or browse to select it. We support PDF, DOC, and DOCX formats for your convenience.",
    },
    {
      icon: <Cpu className="w-12 h-12 text-white" />,
      step: "02", 
      title: "AI Analysis Process",
      description: "Our advanced AI analyzes your resume structure, content, keywords, and formatting against ATS requirements and job descriptions.",
    },
    {
      icon: <FileCheck className="w-12 h-12 text-white" />,
      step: "03",
      title: "Get Detailed Results",
      description: "Receive comprehensive feedback with ATS scores, improvement suggestions, and job-specific optimization recommendations.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            How It{" "}
            <span className="hero-gradient">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get professional resume analysis in three simple steps. No signup required, instant results guaranteed.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-full w-full z-0">
                  <div className="w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30"></div>
                  <ArrowRight className="absolute top-1/2 right-4 transform -translate-y-1/2 w-6 h-6 text-blue-500/50" />
                </div>
              )}

              <div className="step-card relative z-10">
                <div className="step-icon hero-gradient-bg">
                  {step.icon}
                </div>
                <div className="text-sm font-semibold text-blue-600 tracking-wider mb-2">
                  STEP {step.step}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="hero-button">
            Try It Now - It's Free
            <ArrowRight className="w-5 h-5 ml-2 inline" />
          </button>
          <p className="text-sm text-gray-500 mt-4">
            No registration required • Results in under 30 seconds
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;