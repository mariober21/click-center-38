
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  const features = [
    {
      title: "Upload de Conteúdo",
      description: "Envie vídeos, e-books, palestras online, arquivos PDF, e muito mais para criar seus cursos."
    },
    {
      title: "Área de Membros",
      description: "Ofereça acesso exclusivo para alunos e permita que eles interajam e comentem nas aulas."
    },
    {
      title: "Calendário de Aulas",
      description: "Programe a liberação de aulas e defina o tempo de acesso para cada curso."
    },
    {
      title: "Afiliados",
      description: "Permita que afiliados promovam seus cursos e ofereça comissões personalizadas."
    },
    {
      title: "Informações de Compras",
      description: "Acompanhe vendas, aproveitamento dos alunos e desempenho de afiliados em tempo real."
    },
    {
      title: "Saques e Pagamentos",
      description: "Gerencie os ganhos dos produtores e afiliados com facilidade. Suporte para saques em diversos países."
    },
    {
      title: "Domínios",
      description: "Compre e configure domínios diretamente pela plataforma para personalizar sua marca."
    },
    {
      title: "Suporte 24/7",
      description: "Receba assistência a qualquer momento com nossa equipe dedicada."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-green-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">Plataforma de Cursos Online</span>
                </h1>
                <p className="text-xl mb-8 text-gray-700">
                  Crie, gerencie e venda seus cursos com facilidade. Nossa plataforma oferece todas as ferramentas necessárias para seu sucesso como educador online.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link to="/courses">
                    <Button size="lg" className="w-full sm:w-auto">
                      Explorar Cursos
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto flex items-center justify-center">
                      Criar Conta <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Educação Online" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16" id="funcionalidades">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Funcionalidades Principais</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Nossa plataforma oferece todas as ferramentas necessárias para criar e vender cursos online com sucesso.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <FeatureCard 
                  key={index}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Worldwide Section */}
        <section className="py-16 bg-green-50" id="mundial">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Global Reach" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-bold mb-6">Disponível para Todo o Mundo</h2>
                <p className="text-lg mb-6 text-gray-700">
                  Venda seus cursos em qualquer lugar do mundo. Nossa plataforma suporta várias moedas e métodos de pagamento para garantir que todos os alunos possam acessar seu conteúdo sem barreiras.
                </p>
                <Link to="#">
                  <Button>
                    Saiba Mais <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Free Hosting Section */}
        <section className="py-16" id="gratuito">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0 order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6">Hospedagem Gratuita</h2>
                <p className="text-lg mb-6 text-gray-700">
                  Hospede seus cursos na nossa plataforma gratuitamente. Invista apenas na expansão do seu negócio enquanto cuidamos da infraestrutura.
                </p>
                <Link to="#">
                  <Button>
                    Comece Agora <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Cloud Hosting" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Additional Services */}
        <section className="py-16 bg-green-50" id="outros-servicos">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Outros Serviços</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Além das funcionalidades principais, oferecemos serviços adicionais para potencializar seu sucesso.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Ferramentas de Marketing</h3>
                <p className="text-gray-600 mb-4">Integração com ferramentas de marketing por e-mail para aumentar sua base de alunos.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Soluções de SEO</h3>
                <p className="text-gray-600 mb-4">Otimização para motores de busca para aumentar a visibilidade dos seus cursos online.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Relatórios Detalhados</h3>
                <p className="text-gray-600 mb-4">Acompanhe o desempenho dos seus cursos e vendas com relatórios personalizados.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Marketplace Integrado</h3>
                <p className="text-gray-600 mb-4">Promova seus cursos para um público maior através do nosso marketplace integrado.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Começar?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Crie sua conta gratuitamente e comece a criar e vender seus cursos online hoje mesmo.
            </p>
            <Link to="/login">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
                Crie Sua Conta Agora <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
