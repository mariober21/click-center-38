
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
import { FileQuestion, Move, Plus, Search, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
  isActive: boolean;
}

const AdminFaqContent = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isAdding, setIsAdding] = useState(false);
  
  // Sample FAQ data - would come from database in a real implementation
  const [faqItems, setFaqItems] = useState<FaqItem[]>([
    {
      id: "1",
      question: "Como faço para alterar minha senha?",
      answer: "Para alterar sua senha, acesse seu perfil, clique em 'Configurações' e escolha a opção 'Alterar senha'. Siga as instruções para criar uma nova senha.",
      category: "conta",
      order: 1,
      isActive: true,
    },
    {
      id: "2",
      question: "É possível cancelar minha assinatura?",
      answer: "Sim, você pode cancelar sua assinatura a qualquer momento. Vá para 'Minha Conta' > 'Assinaturas' e clique em 'Cancelar'. Você continuará tendo acesso até o fim do período atual já pago.",
      category: "pagamentos",
      order: 1,
      isActive: true,
    },
    {
      id: "3",
      question: "Quais métodos de pagamento são aceitos?",
      answer: "Aceitamos cartões de crédito (Visa, Mastercard, American Express), débito, PayPal e pix para todos os pagamentos em nossa plataforma.",
      category: "pagamentos",
      order: 2,
      isActive: true,
    },
    {
      id: "4",
      question: "Quanto tempo leva para processar um reembolso?",
      answer: "Os reembolsos geralmente são processados em até 5 dias úteis. O tempo para o valor aparecer em sua conta depende da sua instituição financeira e pode levar até 10 dias úteis adicionais.",
      category: "pagamentos",
      order: 3,
      isActive: true,
    },
    {
      id: "5",
      question: "Como entro em contato com o suporte?",
      answer: "Você pode entrar em contato com nossa equipe de suporte por email em suporte@exemplo.com, por chat em nosso site ou pelo telefone 0800-123-4567, disponível de segunda a sexta, das 9h às 18h.",
      category: "suporte",
      order: 1,
      isActive: true,
    },
  ]);
  
  const [newFaqItem, setNewFaqItem] = useState<Omit<FaqItem, "id" | "order">>({
    question: "",
    answer: "",
    category: "geral",
    isActive: true,
  });
  
  const categories = [
    { id: "all", name: "Todas as Categorias" },
    { id: "geral", name: "Geral" },
    { id: "conta", name: "Conta e Perfil" },
    { id: "pagamentos", name: "Pagamentos" },
    { id: "suporte", name: "Suporte" },
    { id: "produtos", name: "Produtos" },
  ];
  
  const handleAddFaq = () => {
    const newItem: FaqItem = {
      ...newFaqItem,
      id: Math.random().toString(36).substr(2, 9),
      order: faqItems.filter(item => item.category === newFaqItem.category).length + 1,
    };
    
    setFaqItems([...faqItems, newItem]);
    setNewFaqItem({
      question: "",
      answer: "",
      category: "geral",
      isActive: true,
    });
    setIsAdding(false);
    
    toast({
      title: "FAQ adicionada",
      description: "A pergunta foi adicionada com sucesso.",
    });
  };
  
  const handleDeleteFaq = (id: string) => {
    setFaqItems(faqItems.filter(item => item.id !== id));
    toast({
      title: "Pergunta removida",
      description: "A pergunta foi removida com sucesso.",
    });
  };
  
  const handleToggleActive = (id: string) => {
    setFaqItems(faqItems.map(item => {
      if (item.id === id) {
        return { ...item, isActive: !item.isActive };
      }
      return item;
    }));
    
    const item = faqItems.find(item => item.id === id);
    toast({
      title: item?.isActive ? "Pergunta desativada" : "Pergunta ativada",
      description: `A pergunta foi ${item?.isActive ? "desativada" : "ativada"} com sucesso.`,
    });
  };
  
  const moveItemUp = (id: string) => {
    const itemIndex = faqItems.findIndex(item => item.id === id);
    if (itemIndex <= 0) return;
    
    const category = faqItems[itemIndex].category;
    const categoryItems = faqItems.filter(item => item.category === category);
    const categoryItemIndex = categoryItems.findIndex(item => item.id === id);
    if (categoryItemIndex <= 0) return;
    
    const newFaqItems = [...faqItems];
    const prevItem = categoryItems[categoryItemIndex - 1];
    const currentItem = categoryItems[categoryItemIndex];
    
    // Swap orders
    const prevItemIndex = faqItems.findIndex(item => item.id === prevItem.id);
    newFaqItems[prevItemIndex] = { ...prevItem, order: currentItem.order };
    newFaqItems[itemIndex] = { ...currentItem, order: prevItem.order };
    
    setFaqItems(newFaqItems);
  };
  
  const moveItemDown = (id: string) => {
    const itemIndex = faqItems.findIndex(item => item.id === id);
    if (itemIndex < 0 || itemIndex >= faqItems.length - 1) return;
    
    const category = faqItems[itemIndex].category;
    const categoryItems = faqItems.filter(item => item.category === category);
    const categoryItemIndex = categoryItems.findIndex(item => item.id === id);
    if (categoryItemIndex < 0 || categoryItemIndex >= categoryItems.length - 1) return;
    
    const newFaqItems = [...faqItems];
    const nextItem = categoryItems[categoryItemIndex + 1];
    const currentItem = categoryItems[categoryItemIndex];
    
    // Swap orders
    const nextItemIndex = faqItems.findIndex(item => item.id === nextItem.id);
    newFaqItems[nextItemIndex] = { ...nextItem, order: currentItem.order };
    newFaqItems[itemIndex] = { ...currentItem, order: nextItem.order };
    
    setFaqItems(newFaqItems);
  };
  
  const filteredFaqItems = faqItems
    .filter(item => {
      if (selectedCategory !== "all" && item.category !== selectedCategory) return false;
      if (searchQuery && !item.question.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => {
      if (a.category !== b.category) return a.category.localeCompare(b.category);
      return a.order - b.order;
    });

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Gerenciar Perguntas Frequentes</h1>
          <Button onClick={() => setIsAdding(true)}>
            <Plus size={16} className="mr-2" /> Adicionar Pergunta
          </Button>
        </div>
        
        {isAdding ? (
          <Card>
            <CardHeader>
              <CardTitle>Adicionar Nova Pergunta</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={(e) => {
                e.preventDefault();
                handleAddFaq();
              }} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Categoria</Label>
                  <select
                    id="category"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={newFaqItem.category}
                    onChange={(e) => setNewFaqItem({ ...newFaqItem, category: e.target.value })}
                  >
                    {categories.filter(c => c.id !== "all").map(category => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="question">Pergunta</Label>
                  <Input
                    id="question"
                    placeholder="Digite a pergunta frequente"
                    value={newFaqItem.question}
                    onChange={(e) => setNewFaqItem({ ...newFaqItem, question: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="answer">Resposta</Label>
                  <textarea
                    id="answer"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Digite a resposta detalhada"
                    value={newFaqItem.answer}
                    onChange={(e) => setNewFaqItem({ ...newFaqItem, answer: e.target.value })}
                    required
                  />
                </div>
                
                <div className="pt-4 flex justify-end space-x-2">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setIsAdding(false)}
                  >
                    Cancelar
                  </Button>
                  <Button type="submit">Salvar Pergunta</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <CardTitle className="flex items-center gap-2">
                  <FileQuestion size={22} className="text-primary" />
                  <span>Perguntas Frequentes</span>
                </CardTitle>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <select
                    className="h-10 rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                  </select>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Pesquisar perguntas..."
                      className="pl-8 w-[250px]"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead style={{ width: "5%" }}>Ordem</TableHead>
                      <TableHead style={{ width: "10%" }}>Categoria</TableHead>
                      <TableHead style={{ width: "30%" }}>Pergunta</TableHead>
                      <TableHead style={{ width: "40%" }}>Resposta</TableHead>
                      <TableHead style={{ width: "5%" }}>Status</TableHead>
                      <TableHead style={{ width: "10%" }} className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredFaqItems.length > 0 ? (
                      filteredFaqItems.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>
                            <div className="flex flex-col items-center">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 w-6 p-0"
                                onClick={() => moveItemUp(item.id)}
                              >
                                <Move size={14} className="rotate-90" />
                              </Button>
                              <span className="text-xs">{item.order}</span>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 w-6 p-0"
                                onClick={() => moveItemDown(item.id)}
                              >
                                <Move size={14} className="-rotate-90" />
                              </Button>
                            </div>
                          </TableCell>
                          <TableCell className="capitalize">
                            {categories.find(c => c.id === item.category)?.name || item.category}
                          </TableCell>
                          <TableCell className="font-medium">{item.question}</TableCell>
                          <TableCell className="text-sm">
                            <div className="max-h-20 overflow-y-auto">
                              {item.answer}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div 
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                                item.isActive 
                                  ? "bg-green-100 text-green-700" 
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {item.isActive ? "Ativo" : "Inativo"}
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end space-x-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleToggleActive(item.id)}
                              >
                                {item.isActive ? "Desativar" : "Ativar"}
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleDeleteFaq(item.id)}
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
                          Nenhuma pergunta encontrada
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminFaqContent;
