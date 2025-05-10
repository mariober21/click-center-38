
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Marketplace = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Marketplace da ClickCenter</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Cursos Premium</h2>
            <p className="text-gray-600 mb-4">Cursos avançados desenvolvidos por especialistas da indústria.</p>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="font-medium">A partir de R$ 199,90</p>
            </div>
          </Card>
          
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Consultoria Personalizada</h2>
            <p className="text-gray-600 mb-4">Sessões individuais com mentores especializados.</p>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="font-medium">A partir de R$ 299,90/hora</p>
            </div>
          </Card>
          
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Produtos Digitais</h2>
            <p className="text-gray-600 mb-4">E-books, templates e recursos premium para profissionais.</p>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="font-medium">A partir de R$ 29,90</p>
            </div>
          </Card>
          
          <Card className="p-6 md:col-span-3">
            <h2 className="text-xl font-semibold mb-4">Venda seus Conhecimentos</h2>
            <p className="text-gray-600">
              É um especialista em sua área? Junte-se à nossa comunidade de instrutores e compartilhe seus conhecimentos. 
              Crie e venda cursos, e-books ou ofereça serviços de consultoria em nossa plataforma.
            </p>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Marketplace;
