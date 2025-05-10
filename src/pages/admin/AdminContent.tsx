
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Edit, Image, Video, LayoutDashboard, FileQuestion } from "lucide-react";

const AdminContent = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Gerenciar Conteúdo</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center gap-2">
                  <FileText size={18} className="text-primary" />
                  Blog & Artigos
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Gerencie posts de blog e artigos do site</p>
              <Button variant="outline" className="w-full">Acessar</Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center gap-2">
                  <LayoutDashboard size={18} className="text-primary" />
                  Páginas
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Edite páginas estáticas do site</p>
              <Button variant="outline" className="w-full">Acessar</Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center gap-2">
                  <Image size={18} className="text-primary" />
                  Biblioteca de Mídia
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Organize suas imagens, vídeos e arquivos</p>
              <Button variant="outline" className="w-full">Acessar</Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center gap-2">
                  <Edit size={18} className="text-primary" />
                  Depoimentos
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Gerencie os depoimentos de clientes</p>
              <Button variant="outline" className="w-full">Acessar</Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center gap-2">
                  <Video size={18} className="text-primary" />
                  Vídeos
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Adicione e gerencie vídeos</p>
              <Button variant="outline" className="w-full">Acessar</Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center gap-2">
                  <FileQuestion size={18} className="text-primary" />
                  FAQ
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Gerencie perguntas frequentes</p>
              <Button variant="outline" className="w-full">Acessar</Button>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Conteúdo Recente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <FileText size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Como Aumentar suas Vendas Online</p>
                    <p className="text-sm text-muted-foreground">Blog Post • Editado 2 dias atrás</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">Editar</Button>
              </div>
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <LayoutDashboard size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Página Sobre Nós</p>
                    <p className="text-sm text-muted-foreground">Página • Editado 1 semana atrás</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">Editar</Button>
              </div>
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <Video size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Tutorial de Marketing</p>
                    <p className="text-sm text-muted-foreground">Vídeo • Adicionado 3 dias atrás</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">Editar</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminContent;
