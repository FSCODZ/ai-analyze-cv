import { Link } from "react-router";

export function meta() {
  return [
    { title: "Välkommen till Resumind" },
    { name: "description", content: "Svensk AI-CV-analys" },
  ];
}

export default function Index() {
  return (
    <main className="bg-white min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Välkommen till Resumind</h1>
      <p className="text-lg mb-8">Få smart feedback på ditt CV – nu på svenska.</p>
      <Link to="/home" className="primary-button text-xl px-6 py-3 rounded">
        Gå till Mitt Konto
      </Link>
    </main>
  );
}
