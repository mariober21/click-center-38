
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WhatsIncluded = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">O que está incluído?</h1>
        
        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Acesso a todos os cursos</h2>
            <p className="text-gray-600">Com a assinatura da ClickCenter, você tem acesso completo a todos os nossos cursos, workshops e materiais educacionais.</p>
          </Card>
          
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Comunidade exclusiva</h2>
            <p className="text-gray-600">Faça parte de nossa comunidade de membros, onde você pode interagir com outros profissionais, trocar experiências e expandir sua rede de contatos.</p>
          </Card>
          
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Certificados reconhecidos</h2>
            <p className="text-gray-600">Todos os cursos concluídos oferecem certificados que podem ser compartilhados em seu perfil profissional.</p>
          </Card>
          
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Suporte dedicado</h2>
            <p className="text-gray-600">Nossa equipe de suporte está disponível para ajudá-lo com qualquer dúvida ou problema que você possa ter durante sua jornada de aprendizado.</p>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WhatsIncluded;
