
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
import { Edit, Plus, Star, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  date: string;
  status: "published" | "draft";
}

const AdminTestimonialsContent = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("list");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample testimonial data - would come from database in a real implementation
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: "1",
      name: "João Silva",
      role: "CEO",
      company: "Tech Solutions",
      content: "Este produto transformou nossa operação. Recomendo fortemente!",
      rating: 5,
      date: "2025-01-15",
      status: "published",
    },
    {
      id: "2",
      name: "Maria Oliveira",
      role: "Diretora de Marketing",
      company: "Crescimento Digital",
      content: "A plataforma é intuitiva e os resultados são impressionantes.",
      rating: 4,
      date: "2025-02-20",
      status: "published",
    },
    {
      id: "3",
      name: "Carlos Santos",
      role: "Empreendedor",
      company: "Startup Inovadora",
      content: "Melhor investimento que fiz para meu negócio este ano.",
      rating: 5,
      date: "2025-03-05",
      status: "draft",
    },
  ]);
  
  const [newTestimonial, setNewTestimonial] = useState<Omit<Testimonial, "id" | "date">>({
    name: "",
    role: "",
    company: "",
    content: "",
    rating: 5,
    status: "draft"
  });
  
  const handleAddTestimonial = () => {
    const testimonial: Testimonial = {
      ...newTestimonial,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString().split("T")[0],
    };
    
    setTestimonials([...testimonials, testimonial]);
    setNewTestimonial({
      name: "",
      role: "",
      company: "",
      content: "",
      rating: 5,
      status: "draft"
    });
    setActiveTab("list");
    
    toast({
      title: "Depoimento adicionado",
      description: "O depoimento foi adicionado com sucesso.",
    });
  };
  
  const handleDeleteTestimonial = (id: string) => {
    setTestimonials(testimonials.filter(t => t.id !== id));
    toast({
      title: "Depoimento removido",
      description: "O depoimento foi removido com sucesso.",
    });
  };
  
  const handleStatusChange = (id: string) => {
    setTestimonials(testimonials.map(t => {
      if (t.id === id) {
        return {
          ...t,
          status: t.status === "published" ? "draft" : "published"
        };
      }
      return t;
    }));
    
    toast({
      title: "Status atualizado",
      description: "O status do depoimento foi atualizado.",
    });
  };
  
  const filteredTestimonials = testimonials.filter(t => 
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    t.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.company.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
      />
    ));
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Gerenciar Depoimentos</h1>
          {activeTab === "list" && (
            <Button onClick={() => setActiveTab("add")}>
              <Plus size={16} className="mr-2" /> Adicionar Depoimento
            </Button>
          )}
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="list">Lista de Depoimentos</TabsTrigger>
            <TabsTrigger value="add">Adicionar Depoimento</TabsTrigger>
          </TabsList>
          
          <TabsContent value="list">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>Depoimentos</CardTitle>
                  <div className="w-72">
                    <Input
                      placeholder="Pesquisar depoimentos..."
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
                        <TableHead>Nome</TableHead>
                        <TableHead>Empresa</TableHead>
                        <TableHead>Avaliação</TableHead>
                        <TableHead>Data</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredTestimonials.length > 0 ? (
                        filteredTestimonials.map((testimonial) => (
                          <TableRow key={testimonial.id}>
                            <TableCell>
                              <div>
                                <p className="font-medium">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                              </div>
                            </TableCell>
                            <TableCell>{testimonial.company}</TableCell>
                            <TableCell>
                              <div className="flex">{renderStars(testimonial.rating)}</div>
                            </TableCell>
                            <TableCell>{testimonial.date}</TableCell>
                            <TableCell>
                              <div 
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                                  testimonial.status === "published" 
                                    ? "bg-green-100 text-green-700" 
                                    : "bg-yellow-100 text-yellow-700"
                                }`}
                              >
                                {testimonial.status === "published" ? "Publicado" : "Rascunho"}
                              </div>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end space-x-2">
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  onClick={() => handleStatusChange(testimonial.id)}
                                >
                                  {testimonial.status === "published" ? "Despublicar" : "Publicar"}
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => {
                                    // Edit functionality would be implemented here
                                    toast({
                                      title: "Editar depoimento",
                                      description: "Funcionalidade a ser implementada.",
                                    });
                                  }}
                                >
                                  <Edit size={16} />
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => handleDeleteTestimonial(testimonial.id)}
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
                            Nenhum depoimento encontrado
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="add">
            <Card>
              <CardHeader>
                <CardTitle>Adicionar Novo Depoimento</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  handleAddTestimonial();
                }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input 
                        id="name" 
                        value={newTestimonial.name}
                        onChange={(e) => setNewTestimonial({...newTestimonial, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Cargo</Label>
                      <Input 
                        id="role" 
                        value={newTestimonial.role}
                        onChange={(e) => setNewTestimonial({...newTestimonial, role: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input 
                        id="company" 
                        value={newTestimonial.company}
                        onChange={(e) => setNewTestimonial({...newTestimonial, company: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="rating">Avaliação</Label>
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={24}
                            className={`cursor-pointer ${
                              star <= newTestimonial.rating 
                                ? "fill-yellow-400 text-yellow-400" 
                                : "text-gray-300"
                            }`}
                            onClick={() => setNewTestimonial({...newTestimonial, rating: star})}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="content">Depoimento</Label>
                    <textarea
                      id="content"
                      rows={4}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      value={newTestimonial.content}
                      onChange={(e) => setNewTestimonial({...newTestimonial, content: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="flex justify-end space-x-2 pt-4">
                    <Button variant="outline" type="button" onClick={() => setActiveTab("list")}>
                      Cancelar
                    </Button>
                    <Button type="submit">Salvar Depoimento</Button>
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

export default AdminTestimonialsContent;
