
import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, Edit, Trash, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const AdminBlogContent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // This would come from database in a real implementation
  const blogPosts = [
    { id: 1, title: "Como Aumentar suas Vendas Online", status: "publicado", author: "João Silva", date: "10/05/2025", views: 245 },
    { id: 2, title: "Dicas de Marketing Digital", status: "rascunho", author: "Maria Oliveira", date: "08/05/2025", views: 0 },
    { id: 3, title: "Os Melhores Recursos para Afiliados", status: "publicado", author: "Carlos Santos", date: "02/05/2025", views: 187 },
    { id: 4, title: "Guia para Iniciantes em E-commerce", status: "publicado", author: "Ana Pereira", date: "29/04/2025", views: 322 },
    { id: 5, title: "Tendências de Marketing para 2025", status: "rascunho", author: "Paulo Rocha", date: "25/04/2025", views: 0 },
  ];

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Blog & Artigos</h1>
          <Link to="/admin/content/blog/new">
            <Button>
              <Plus size={16} className="mr-2" /> Novo Post
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar artigos..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="published">Publicados</TabsTrigger>
            <TabsTrigger value="draft">Rascunhos</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Todos os Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="py-3 px-4 text-left font-medium">Título</th>
                        <th className="py-3 px-4 text-left font-medium">Status</th>
                        <th className="py-3 px-4 text-left font-medium">Autor</th>
                        <th className="py-3 px-4 text-left font-medium">Data</th>
                        <th className="py-3 px-4 text-left font-medium">Visualizações</th>
                        <th className="py-3 px-4 text-left font-medium">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredPosts.map((post) => (
                        <tr key={post.id} className="border-b">
                          <td className="py-3 px-4">{post.title}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              post.status === "publicado" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                            }`}>
                              {post.status === "publicado" ? "Publicado" : "Rascunho"}
                            </span>
                          </td>
                          <td className="py-3 px-4">{post.author}</td>
                          <td className="py-3 px-4">{post.date}</td>
                          <td className="py-3 px-4">{post.views}</td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <Button variant="ghost" size="icon">
                                <Eye size={16} />
                              </Button>
                              <Link to={`/admin/content/blog/edit/${post.id}`}>
                                <Button variant="ghost" size="icon">
                                  <Edit size={16} />
                                </Button>
                              </Link>
                              <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                                <Trash size={16} />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="published" className="mt-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Posts Publicados</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Similar table for published posts */}
                <p>Conteúdo filtrado para posts publicados apareceria aqui</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="draft" className="mt-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Rascunhos</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Similar table for drafts */}
                <p>Conteúdo filtrado para rascunhos apareceria aqui</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default AdminBlogContent;
