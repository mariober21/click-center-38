
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Academy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Academia</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Cursos em Destaque</h2>
            <ul className="space-y-3">
              <li className="p-3 border rounded-md hover:bg-accent transition-colors">
                Desenvolvimento Web Avançado
              </li>
              <li className="p-3 border rounded-md hover:bg-accent transition-colors">
                Marketing Digital Completo
              </li>
              <li className="p-3 border rounded-md hover:bg-accent transition-colors">
                Gestão de Projetos
              </li>
              <li className="p-3 border rounded-md hover:bg-accent transition-colors">
                Design UX/UI
              </li>
            </ul>
          </Card>
          
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Áreas de Estudo</h2>
            <ul className="space-y-3">
              <li className="p-3 border rounded-md hover:bg-accent transition-colors">
                Tecnologia
              </li>
              <li className="p-3 border rounded-md hover:bg-accent transition-colors">
                Marketing
              </li>
              <li className="p-3 border rounded-md hover:bg-accent transition-colors">
                Negócios
              </li>
              <li className="p-3 border rounded-md hover:bg-accent transition-colors">
                Design
              </li>
              <li className="p-3 border rounded-md hover:bg-accent transition-colors">
                Desenvolvimento Pessoal
              </li>
            </ul>
          </Card>
          
          <Card className="p-6 md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Metodologia de Ensino</h2>
            <p className="text-gray-600">
              Nossa metodologia de ensino combina teoria e prática, com instrutores experientes e materiais atualizados constantemente. Os cursos são projetados para proporcionar uma experiência de aprendizado completa, com exercícios práticos, estudos de caso e projetos reais.
            </p>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Academy;
