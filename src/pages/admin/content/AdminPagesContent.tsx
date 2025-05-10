
import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, Eye, FileText, Globe, Plus, Search, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Page {
  id: string;
  title: string;
  slug: string;
  lastModified: string;
  author: string;
  status: "published" | "draft";
  template?: string;
}

const AdminPagesContent = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample pages data - would come from database in a real implementation
  const [pages, setPages] = useState<Page[]>([
    {
      id: "1",
      title: "Página Inicial",
      slug: "home",
      lastModified: "2025-03-15",
      author: "Admin",
      status: "published",
      template: "Home",
    },
    {
      id: "2",
      title: "Sobre Nós",
      slug: "sobre",
      lastModified: "2025-03-10",
      author: "Admin",
      status: "published",
      template: "Standard",
    },
    {
      id: "3",
      title: "Nossos Serviços",
      slug: "servicos",
      lastModified: "2025-02-28",
      author: "Admin",
      status: "published",
      template: "Services",
    },
    {
      id: "4",
      title: "Contato",
      slug: "contato",
      lastModified: "2025-02-15",
      author: "Admin",
      status: "published",
      template: "Contact",
    },
    {
      id: "5",
      title: "Política de Privacidade",
      slug: "privacidade",
      lastModified: "2025-01-20",
      author: "Admin",
      status: "published",
      template: "Legal",
    },
    {
      id: "6",
      title: "Nova Promoção",
      slug: "promocao-julho",
      lastModified: "2025-03-18",
      author: "Marketing",
      status: "draft",
      template: "Landing",
    },
  ]);
  
  const [newPage, setNewPage] = useState<Omit<Page, "id" | "lastModified" | "author">>({
    title: "",
    slug: "",
    status: "draft",
    template: "Standard",
  });
  
  const handleAddPage = (e: React.FormEvent) => {
    e.preventDefault();
    
    const page: Page = {
      ...newPage,
      id: Math.random().toString(36).substr(2, 9),
      lastModified: new Date().toISOString().split("T")[0],
      author: "Admin",
    };
    
    setPages([...pages, page]);
    setNewPage({
      title: "",
      slug: "",
      status: "draft",
      template: "Standard",
    });
    setActiveTab("all");
    
    toast({
      title: "Página criada",
      description: "A página foi criada com sucesso.",
    });
  };
  
  const handleDeletePage = (id: string) => {
    setPages(pages.filter(page => page.id !== id));
    toast({
      title: "Página removida",
      description: "A página foi removida com sucesso.",
    });
  };
  
  const handleStatusChange = (id: string) => {
    setPages(pages.map(page => {
      if (page.id === id) {
        return {
          ...page,
          status: page.status === "published" ? "draft" : "published"
        };
      }
      return page;
    }));
    
    toast({
      title: "Status atualizado",
      description: "O status da página foi atualizado.",
    });
  };
  
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-');
  };
  
  const filteredPages = pages.filter(page => {
    if (activeTab !== "all" && page.status !== activeTab) return false;
    if (searchQuery && !page.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Gerenciar Páginas</h1>
          <Button onClick={() => setActiveTab("new")}>
            <Plus size={16} className="mr-2" /> Criar Página
          </Button>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="all">Todas as Páginas</TabsTrigger>
            <TabsTrigger value="published">Publicadas</TabsTrigger>
            <TabsTrigger value="draft">Rascunhos</TabsTrigger>
            <TabsTrigger value="new">Nova Página</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Páginas do Site</CardTitle>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Pesquisar páginas..."
                      className="pl-8 w-[250px]"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Título</TableHead>
                        <TableHead>Slug</TableHead>
                        <TableHead>Template</TableHead>
                        <TableHead>Modificado</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredPages.length > 0 ? (
                        filteredPages.map((page) => (
                          <TableRow key={page.id}>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <FileText size={16} className="text-primary" />
                                {page.title}
                              </div>
                            </TableCell>
                            <TableCell>/{page.slug}</TableCell>
                            <TableCell>{page.template || "Padrão"}</TableCell>
                            <TableCell>{page.lastModified}</TableCell>
                            <TableCell>
                              <div 
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                                  page.status === "published" 
                                    ? "bg-green-100 text-green-700" 
                                    : "bg-yellow-100 text-yellow-700"
                                }`}
                              >
                                {page.status === "published" ? "Publicada" : "Rascunho"}
                              </div>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end space-x-2">
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => {
                                    window.open(`/${page.slug}`, '_blank');
                                  }}
                                >
                                  <Eye size={16} />
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => {
                                    // Edit functionality would be implemented here
                                    toast({
                                      title: "Editar página",
                                      description: "Esta funcionalidade será implementada em breve.",
                                    });
                                  }}
                                >
                                  <Edit size={16} />
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => handleStatusChange(page.id)}
                                >
                                  {page.status === "published" ? "Despublicar" : "Publicar"}
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => handleDeletePage(page.id)}
                                  disabled={page.slug === "home"}
                                >
                                  <Trash2 size={16} className="text-red-500" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-4">
                            Nenhuma página encontrada
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="published">
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Título</TableHead>
                        <TableHead>Slug</TableHead>
                        <TableHead>Template</TableHead>
                        <TableHead>Modificado</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pages
                        .filter(page => page.status === "published")
                        .map((page) => (
                          <TableRow key={page.id}>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <FileText size={16} className="text-primary" />
                                {page.title}
                              </div>
                            </TableCell>
                            <TableCell>/{page.slug}</TableCell>
                            <TableCell>{page.template || "Padrão"}</TableCell>
                            <TableCell>{page.lastModified}</TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end space-x-2">
                                <Button variant="ghost" size="sm">
                                  <Eye size={16} />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Edit size={16} />
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => handleStatusChange(page.id)}
                                >
                                  Despublicar
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="draft">
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Título</TableHead>
                        <TableHead>Slug</TableHead>
                        <TableHead>Template</TableHead>
                        <TableHead>Modificado</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pages
                        .filter(page => page.status === "draft")
                        .map((page) => (
                          <TableRow key={page.id}>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <FileText size={16} className="text-primary" />
                                {page.title}
                              </div>
                            </TableCell>
                            <TableCell>/{page.slug}</TableCell>
                            <TableCell>{page.template || "Padrão"}</TableCell>
                            <TableCell>{page.lastModified}</TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end space-x-2">
                                <Button variant="ghost" size="sm">
                                  <Edit size={16} />
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => handleStatusChange(page.id)}
                                >
                                  Publicar
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => handleDeletePage(page.id)}
                                >
                                  <Trash2 size={16} className="text-red-500" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="new">
            <Card>
              <CardHeader>
                <CardTitle>Criar Nova Página</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddPage} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Título da Página</Label>
                    <Input
                      id="title"
                      placeholder="Ex: Sobre Nossa Empresa"
                      value={newPage.title}
                      onChange={(e) => {
                        const title = e.target.value;
                        setNewPage({
                          ...newPage,
                          title,
                          slug: generateSlug(title),
                        });
                      }}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="slug">
                      Slug (URL)
                      <span className="text-sm text-muted-foreground ml-2">
                        (gerado automaticamente, mas pode ser editado)
                      </span>
                    </Label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground">
                        <Globe size={16} className="mr-1" /> /
                      </span>
                      <Input
                        id="slug"
                        className="rounded-l-none"
                        value={newPage.slug}
                        onChange={(e) => setNewPage({ ...newPage, slug: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="template">Template</Label>
                    <select
                      id="template"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={newPage.template}
                      onChange={(e) => setNewPage({ ...newPage, template: e.target.value })}
                    >
                      <option value="Standard">Padrão</option>
                      <option value="Home">Página Inicial</option>
                      <option value="Contact">Contato</option>
                      <option value="Landing">Landing Page</option>
                      <option value="Services">Serviços</option>
                      <option value="Legal">Documentos Legais</option>
                    </select>
                  </div>
                  
                  <div className="pt-4 flex justify-end space-x-2">
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => setActiveTab("all")}
                    >
                      Cancelar
                    </Button>
                    <Button type="submit">Criar Página</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default AdminPagesContent;
