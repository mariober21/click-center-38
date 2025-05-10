
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HelpCenter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Central de Ajuda</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Perguntas Frequentes</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Como faço para me cadastrar na plataforma?</AccordionTrigger>
                <AccordionContent>
                  Para se cadastrar na ClickCenter, clique no botão "Cadastrar" no canto superior direito da página. Preencha o formulário com seus dados e siga as instruções para completar o cadastro.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Qual é a política de reembolso?</AccordionTrigger>
                <AccordionContent>
                  Oferecemos garantia de satisfação de 7 dias para todos os cursos adquiridos na plataforma. Se você não estiver satisfeito, pode solicitar reembolso dentro desse período.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Como acesso os certificados dos cursos?</AccordionTrigger>
                <AccordionContent>
                  Os certificados são disponibilizados automaticamente após a conclusão de cada curso. Acesse seu Dashboard, clique na seção "Certificados" e faça o download.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>Por quanto tempo tenho acesso aos cursos?</AccordionTrigger>
                <AccordionContent>
                  O acesso aos cursos é vitalício. Uma vez adquirido, você poderá acessá-lo sempre que quiser, incluindo atualizações futuras do conteúdo.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>Como posso me tornar um instrutor?</AccordionTrigger>
                <AccordionContent>
                  Para se tornar um instrutor na ClickCenter, envie uma solicitação através da seção "Marketplace" e clique em "Venda seus Conhecimentos". Nossa equipe entrará em contato para avaliar sua proposta.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div>
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Contato</h2>
              <p className="text-gray-600 mb-4">Precisa de ajuda adicional? Entre em contato conosco:</p>
              
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="font-medium mr-2">Email:</span> 
                  <span>suporte@clickcenter.com</span>
                </li>
                <li className="flex items-center">
                  <span className="font-medium mr-2">Telefone:</span>
                  <span>(11) 1234-5678</span>
                </li>
                <li className="flex items-center">
                  <span className="font-medium mr-2">Horário:</span>
                  <span>Seg a Sex, 9h às 18h</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HelpCenter;
