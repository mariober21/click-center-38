
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, BarChart, Bot, Wand2, Instagram, Mail, FileText, ArrowRight } from "lucide-react";

const AdminTools = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Ferramentas</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="overflow-hidden hover:shadow-md transition-all duration-300 border-t-4 border-t-blue-500">
            <CardHeader className="pb-3">
              <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center mb-2">
                <Search size={20} className="text-blue-500" />
              </div>
              <CardTitle className="text-lg">SEO</CardTitle>
              <CardDescription>Otimize seus produtos para buscas</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                  Análise de palavras-chave
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                  Otimização de meta tags
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                  Relatórios de desempenho
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-blue-500 hover:bg-blue-600">
                Acessar
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-md transition-all duration-300 border-t-4 border-t-purple-500">
            <CardHeader className="pb-3">
              <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center mb-2">
                <BarChart size={20} className="text-purple-500" />
              </div>
              <CardTitle className="text-lg">Analytics</CardTitle>
              <CardDescription>Analise o desempenho dos seus produtos</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-purple-500"></div>
                  Visualização de dados
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-purple-500"></div>
                  Relatórios personalizados
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-purple-500"></div>
                  Métricas de conversão
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-purple-500 hover:bg-purple-600">
                Acessar
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-md transition-all duration-300 border-t-4 border-t-green-500">
            <CardHeader className="pb-3">
              <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center mb-2">
                <Bot size={20} className="text-green-500" />
              </div>
              <CardTitle className="text-lg">Automações</CardTitle>
              <CardDescription>Configure processos automatizados</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-green-500"></div>
                  Emails automáticos
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-green-500"></div>
                  Notificações programadas
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-green-500"></div>
                  Fluxos de trabalho personalizados
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-500 hover:bg-green-600">
                Acessar
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">Ferramentas em Destaque</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="overflow-hidden hover:shadow-md transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-violet-500 to-purple-500 text-white">
              <div className="flex justify-between items-center">
                <CardTitle>Gerador de Landing Pages</CardTitle>
                <Wand2 size={24} />
              </div>
              <CardDescription className="text-white/80">
                Crie páginas de vendas de alta conversão em poucos minutos
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">
                Nossa ferramenta de geração de landing pages utiliza IA para criar páginas de vendas 
                otimizadas que convertem mais visitantes em clientes.
              </p>
              <div className="flex justify-between items-center">
                <Button variant="outline" size="sm">Saber mais</Button>
                <Button variant="default" size="sm" className="bg-gradient-to-r from-violet-500 to-purple-500">
                  Experimentar
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-md transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
              <div className="flex justify-between items-center">
                <CardTitle>Social Media Manager</CardTitle>
                <Instagram size={24} />
              </div>
              <CardDescription className="text-white/80">
                Conecte suas redes sociais para promoção automática
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">
                Integre suas redes sociais para publicar automaticamente novidades, 
                promoções e lançamentos diretamente do seu painel.
              </p>
              <div className="flex justify-between items-center">
                <Button variant="outline" size="sm">Saber mais</Button>
                <Button variant="default" size="sm" className="bg-gradient-to-r from-blue-500 to-cyan-500">
                  Configurar
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-md transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
              <div className="flex justify-between items-center">
                <CardTitle>Email Marketing Pro</CardTitle>
                <Mail size={24} />
              </div>
              <CardDescription className="text-white/80">
                Crie campanhas de email profissionais e automatizadas
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">
                Ferramenta completa para criação, envio e análise de campanhas de email marketing 
                com modelos prontos e relatórios detalhados.
              </p>
              <div className="flex justify-between items-center">
                <Button variant="outline" size="sm">Saber mais</Button>
                <Button variant="default" size="sm" className="bg-gradient-to-r from-amber-500 to-orange-500">
                  Acessar
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-md transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
              <div className="flex justify-between items-center">
                <CardTitle>Assistente de Conteúdo AI</CardTitle>
                <FileText size={24} />
              </div>
              <CardDescription className="text-white/80">
                Use inteligência artificial para criar conteúdo persuasivo
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">
                Gere descrições de produtos, posts para blog, emails e textos para redes sociais 
                com nossa ferramenta alimentada por IA.
              </p>
              <div className="flex justify-between items-center">
                <Button variant="outline" size="sm">Saber mais</Button>
                <Button variant="default" size="sm" className="bg-gradient-to-r from-green-500 to-emerald-500">
                  Experimentar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex justify-end mt-6">
          <Button variant="outline" className="flex items-center gap-2">
            Ver todas as ferramentas
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminTools;
