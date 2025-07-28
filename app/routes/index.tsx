import { Link } from "react-router";
import Features from "~/components/Features";
import Footer from "~/components/Footer";
import HowItWorks from "~/components/HowItWorks";
import Navbar from "~/components/Navbar";

export function meta() {
  return [
    { title: "Welcome to Resumind" },
    { name: "description", content: "Svensk AI-CV-analys" },
  ];
}

export default function Index() {
  return (
    <>
      <Navbar showUploadButton={false} showOptions={true} />
      <main className="bg-white min-h-screen flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-2xl font-bold mb-4">Welcome to Resumind</h1>
        <h2>Where you can easy upload your resume and get feedback from an AI in seconds</h2>
        <p className="text-lg mb-8">
          Få smart feedback på ditt CV – nu på svenska.
        </p>
        <Link
          to="/auth?next=/home"
          className="primary-button text-xl px-6 py-3 rounded"
        >
        
          Fortsätt till inloggning
        </Link>
        <HowItWorks/>
          <Features/>
          <Footer/>
      </main>
    </>
  );
}
