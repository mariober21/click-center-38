
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, BarChart, Bot } from "lucide-react";

const AdminTools = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Ferramentas</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center gap-2">
                  <Search size={18} className="text-primary" />
                  SEO
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Otimize seus produtos para mecanismos de busca</p>
              <Button variant="outline" className="w-full">Acessar</Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center gap-2">
                  <BarChart size={18} className="text-primary" />
                  Analytics
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Analise o desempenho dos seus produtos e marketing</p>
              <Button variant="outline" className="w-full">Acessar</Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center gap-2">
                  <Bot size={18} className="text-primary" />
                  Automações
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Configure automações para seus processos de negócio</p>
              <Button variant="outline" className="w-full">Acessar</Button>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Ferramentas em Destaque</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-semibold">Gerador de Páginas de Vendas</h3>
                <p className="text-sm text-muted-foreground mb-2">Crie páginas de vendas de alta conversão em minutos</p>
                <Button variant="outline" size="sm">Experimentar</Button>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-semibold">Integração com Redes Sociais</h3>
                <p className="text-sm text-muted-foreground mb-2">Conecte suas redes sociais para promoção automática</p>
                <Button variant="outline" size="sm">Configurar</Button>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-semibold">Assistente de Conteúdo AI</h3>
                <p className="text-sm text-muted-foreground mb-2">Use inteligência artificial para criar conteúdo persuasivo</p>
                <Button variant="outline" size="sm">Experimentar</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminTools;
