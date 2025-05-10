
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Recursos</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">E-books Gratuitos</h2>
            <ul className="space-y-3">
              <li className="p-3 border rounded-md hover:bg-accent transition-colors">
                Guia de Marketing Digital
              </li>
              <li className="p-3 border rounded-md hover:bg-accent transition-colors">
                Introdução à Programação
              </li>
              <li className="p-3 border rounded-md hover:bg-accent transition-colors">
                Produtividade no Trabalho Remoto
              </li>
            </ul>
          </Card>
          
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Templates</h2>
            <ul className="space-y-3">
              <li className="p-3 border rounded-md hover:bg-accent transition-colors">
                Planejamento de Projeto
              </li>
              <li className="p-3 border rounded-md hover:bg-accent transition-colors">
                Análise de Concorrentes
              </li>
              <li className="p-3 border rounded-md hover:bg-accent transition-colors">
                Plano de Marketing
              </li>
            </ul>
          </Card>
          
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Ferramentas</h2>
            <ul className="space-y-3">
              <li className="p-3 border rounded-md hover:bg-accent transition-colors">
                Calculadora de ROI
              </li>
              <li className="p-3 border rounded-md hover:bg-accent transition-colors">
                Checklist de SEO
              </li>
              <li className="p-3 border rounded-md hover:bg-accent transition-colors">
                Modelo de Orçamento
              </li>
            </ul>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
