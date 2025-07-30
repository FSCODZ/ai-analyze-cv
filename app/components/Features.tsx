import { Upload, Brain, BarChart3, Zap, Shield, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Upload className="w-8 h-8 text-blue-600" />,
      title: "Easy Resume Upload",
      description: "Simply drag and drop your CV or upload multiple formats. Our system supports PDF, DOC, and DOCX files with instant processing.",
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze your resume content, structure, keywords, and formatting against industry standards.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Detailed ATS Scoring",
      description: "Get comprehensive ATS compatibility scores with specific recommendations for improvement and job-specific optimization tips.",
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Instant Results",
      description: "Receive your analysis in under 30 seconds with real-time feedback and actionable insights to improve your job prospects.",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Secure & Private",
      description: "Your data is encrypted and processed securely. We never store your personal information or share it with third parties.",
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "24/7 Availability",
      description: "Access our AI analysis tool anytime, anywhere. Perfect for job seekers working on applications around the clock.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Why Choose {" "}
            <span className="hero-gradient">
              CVision
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage cutting-edge artificial intelligence to optimize your resume for any job application 
            and increase your chances of landing interviews.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-blue-50 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;