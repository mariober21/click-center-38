
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ArrowLeft, 
  Users, 
  Settings, 
  Shield, 
  BarChart, 
  FileText, 
  Lock,
  Home,
  ShoppingBag,
  Undo,
  UserRound,
  Cog,
  ShoppingCart
} from "lucide-react";

const Admin = () => {
  const [userName, setUserName] = useState<string>("Admin");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  
  // Get user name from localStorage
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  // Mock users data
  const users = [
    { id: "1", name: "João Silva", email: "joao@exemplo.com", role: "aluno", courses: 2, lastLogin: "2023-05-10" },
    { id: "2", name: "Maria Oliveira", email: "maria@exemplo.com", role: "aluno", courses: 3, lastLogin: "2023-05-09" },
    { id: "3", name: "Carlos Santos", email: "carlos@exemplo.com", role: "instrutor", courses: 0, lastLogin: "2023-05-08" },
    { id: "4", name: "Ana Pereira", email: "ana@exemplo.com", role: "instrutor", courses: 2, lastLogin: "2023-05-07" },
    { id: "5", name: "Mário Bernardo", email: "mario@exemplo.com", role: "admin", courses: 0, lastLogin: "2023-05-06" },
    { id: "6", name: "Rosa Bernardo", email: "rosa@exemplo.com", role: "admin", courses: 0, lastLogin: "2023-05-06" }
  ];

  // Filter users based on search query
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLogout = () => {
    localStorage.removeItem("userName");
    window.location.href = "/";
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">ClickCenter</span>
            <span className="bg-white text-primary px-2 py-1 rounded text-xs font-bold">ADMIN</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <div className="text-right">
                <p className="text-sm text-gray-200">Administrador</p>
                <p className="font-semibold">{userName}</p>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary">
                {userName.substring(0, 2).toUpperCase()}
              </div>
            </div>
            <Button variant="outline" onClick={handleLogout} className="border-white text-white hover:bg-white/20">
              <ArrowLeft size={16} className="mr-2" /> Sair
            </Button>
          </div>
        </div>
      </header>
      
      <div className="flex min-h-[calc(100vh-72px)]">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 p-4 hidden md:block">
          <nav className="space-y-2">
            <Link to="/admin" className="flex items-center gap-2 p-2 bg-accent rounded-md text-primary font-medium">
              <Shield size={20} />
              <span>Painel de Controle</span>
            </Link>
            
            <Link to="/admin" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
              <Home size={20} />
              <span>Início</span>
            </Link>
            
            <Link to="/admin" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
              <ShoppingBag size={20} />
              <span>Minhas Compras</span>
            </Link>
            
            <Link to="/admin" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
              <Undo size={20} />
              <span>Canceladas/Reembolso</span>
            </Link>
            
            <Link to="/admin" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
              <UserRound size={20} />
              <span>Minha Conta</span>
            </Link>
            
            <Link to="/admin" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
              <Cog size={20} />
              <span>Gerenciar Meu Negócio</span>
            </Link>
            
            <Link to="/admin" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
              <ShoppingCart size={20} />
              <span>Comprar Um Produto</span>
            </Link>
            
            <hr className="my-4 border-gray-200" />
            
            <Link to="/admin" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
              <Users size={20} />
              <span>Usuários</span>
            </Link>
            
            <Link to="/admin" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
              <FileText size={20} />
              <span>Cursos</span>
            </Link>
            
            <Link to="/admin" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
              <BarChart size={20} />
              <span>Relatórios</span>
            </Link>
            
            <Link to="/admin" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
              <Settings size={20} />
              <span>Configurações</span>
            </Link>
            
            <Link to="/admin" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
              <Lock size={20} />
              <span>Permissões</span>
            </Link>
          </nav>
        </aside>
        
        <main className="flex-1 p-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-bold">Painel do Administrador</h1>
              <Button>
                <Users size={16} className="mr-2" /> Novo Usuário
              </Button>
            </div>
            
            <Tabs value={activeTab} onValueChange={handleTabChange}>
              <TabsList className="mb-6">
                <TabsTrigger value="dashboard">Painel Inicial</TabsTrigger>
                <TabsTrigger value="users">Usuários</TabsTrigger>
                <TabsTrigger value="purchases">Compras</TabsTrigger>
                <TabsTrigger value="refunds">Reembolsos</TabsTrigger>
                <TabsTrigger value="account">Minha Conta</TabsTrigger>
                <TabsTrigger value="business">Meu Negócio</TabsTrigger>
                <TabsTrigger value="shop">Loja</TabsTrigger>
              </TabsList>
              
              <TabsContent value="dashboard">
                <Card>
                  <CardHeader>
                    <CardTitle>Painel de Controle</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Bem-vindo ao painel de administração da ClickCenter. Aqui você pode gerenciar usuários, cursos, vendas e configurações da plataforma.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Total de Usuários</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-3xl font-bold">{users.length}</p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Cursos Ativos</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-3xl font-bold">12</p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Vendas Hoje</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-3xl font-bold">8</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="users">
                <Card>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <CardTitle>Gerenciar Usuários</CardTitle>
                      <div className="w-full md:w-64">
                        <Input 
                          placeholder="Buscar usuários..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="py-2 text-left">Nome</th>
                            <th className="py-2 text-left">Email</th>
                            <th className="py-2 text-left">Função</th>
                            <th className="py-2 text-left">Cursos</th>
                            <th className="py-2 text-left">Último Login</th>
                            <th className="py-2 text-left">Ações</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredUsers.map((user) => (
                            <tr key={user.id} className="border-b hover:bg-gray-50">
                              <td className="py-3">{user.name}</td>
                              <td className="py-3">{user.email}</td>
                              <td className="py-3">
                                <span className={`px-2 py-1 rounded text-xs font-medium ${
                                  user.role === "admin" ? "bg-primary/20 text-primary" :
                                  user.role === "instrutor" ? "bg-blue-100 text-blue-800" :
                                  "bg-gray-100 text-gray-800"
                                }`}>
                                  {user.role}
                                </span>
                              </td>
                              <td className="py-3">{user.courses}</td>
                              <td className="py-3">{user.lastLogin}</td>
                              <td className="py-3">
                                <div className="flex space-x-2">
                                  <Button variant="ghost" size="sm">Editar</Button>
                                  <Button variant="ghost" size="sm" className="text-destructive">Remover</Button>
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
              
              <TabsContent value="purchases">
                <Card>
                  <CardHeader>
                    <CardTitle>Minhas Compras</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Gerencie suas compras e encontre outros produtos para se afiliar.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Curso Marketing Digital</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <p>Programa completo de marketing online</p>
                          <p className="text-sm text-gray-500">Comprado em: 12/04/2023</p>
                          <div className="flex justify-between">
                            <Button size="sm" variant="outline">Acessar</Button>
                            <Button size="sm" variant="outline">Ser afiliado</Button>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Ebook Vendas Online</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <p>Estratégias avançadas de vendas</p>
                          <p className="text-sm text-gray-500">Comprado em: 05/03/2023</p>
                          <div className="flex justify-between">
                            <Button size="sm" variant="outline">Acessar</Button>
                            <Button size="sm" variant="outline">Ser afiliado</Button>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Afilie-se</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <p>Encontre novos produtos para promover e ganhe comissões</p>
                          <Button className="w-full">Ver Produtos Disponíveis</Button>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="refunds">
                <Card>
                  <CardHeader>
                    <CardTitle>Cancelamentos e Reembolsos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Gerencie seus pedidos de cancelamento e solicitações de reembolso.</p>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="py-2 text-left">Produto</th>
                            <th className="py-2 text-left">Data da Compra</th>
                            <th className="py-2 text-left">Valor</th>
                            <th className="py-2 text-left">Status</th>
                            <th className="py-2 text-left">Ações</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-3">Curso de Copywriting</td>
                            <td className="py-3">10/04/2023</td>
                            <td className="py-3">R$ 297,00</td>
                            <td className="py-3">
                              <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                                Reembolso Pendente
                              </span>
                            </td>
                            <td className="py-3">
                              <Button variant="ghost" size="sm">Detalhes</Button>
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3">Webinar Premium</td>
                            <td className="py-3">22/03/2023</td>
                            <td className="py-3">R$ 97,00</td>
                            <td className="py-3">
                              <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                                Reembolso Aprovado
                              </span>
                            </td>
                            <td className="py-3">
                              <Button variant="ghost" size="sm">Detalhes</Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="account">
                <Card>
                  <CardHeader>
                    <CardTitle>Minha Conta</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium mb-2">Informações Pessoais</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm text-gray-500">Nome</label>
                            <Input defaultValue={userName} />
                          </div>
                          <div>
                            <label className="text-sm text-gray-500">Email</label>
                            <Input defaultValue="admin@clickcenter.com" />
                          </div>
                          <div>
                            <label className="text-sm text-gray-500">Telefone</label>
                            <Input defaultValue="(11) 99999-9999" />
                          </div>
                          <div>
                            <label className="text-sm text-gray-500">CPF/CNPJ</label>
                            <Input defaultValue="123.456.789-00" />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-2">Segurança</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm text-gray-500">Senha Atual</label>
                            <Input type="password" />
                          </div>
                          <div>
                            <label className="text-sm text-gray-500">Nova Senha</label>
                            <Input type="password" />
                          </div>
                        </div>
                      </div>
                      
                      <Button>Salvar Alterações</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="business">
                <Card>
                  <CardHeader>
                    <CardTitle>Gerenciar Meu Negócio</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Links para Divulgação</h3>
                        <div className="space-y-3">
                          <div className="flex flex-col md:flex-row md:items-center gap-2">
                            <div className="flex-1">
                              <Input value="https://clickcenter.com/af/curso-marketing?ref=admin" readOnly />
                            </div>
                            <Button variant="outline">Copiar Link</Button>
                          </div>
                          <div className="flex flex-col md:flex-row md:items-center gap-2">
                            <div className="flex-1">
                              <Input value="https://clickcenter.com/af/ebook-vendas?ref=admin" readOnly />
                            </div>
                            <Button variant="outline">Copiar Link</Button>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-4">Seus Produtos</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base">Ebook: Estratégias de Tráfego</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                              <p className="text-sm">15 vendas este mês</p>
                              <div className="flex justify-between">
                                <Button size="sm" variant="outline">Editar</Button>
                                <Button size="sm" variant="outline">Estatísticas</Button>
                              </div>
                            </CardContent>
                          </Card>
                          
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base">Curso: Produtividade Total</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                              <p className="text-sm">8 vendas este mês</p>
                              <div className="flex justify-between">
                                <Button size="sm" variant="outline">Editar</Button>
                                <Button size="sm" variant="outline">Estatísticas</Button>
                              </div>
                            </CardContent>
                          </Card>
                          
                          <Card className="border-dashed border-2">
                            <CardContent className="flex flex-col items-center justify-center h-full py-6">
                              <p className="mb-2 text-center">Adicionar Novo Produto</p>
                              <Button variant="outline">+ Criar Produto</Button>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-4">Gerenciar Alunos</h3>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="border-b">
                                <th className="py-2 text-left">Aluno</th>
                                <th className="py-2 text-left">Curso</th>
                                <th className="py-2 text-left">Progresso</th>
                                <th className="py-2 text-left">Data de Inscrição</th>
                                <th className="py-2 text-left">Ações</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="py-3">Pedro Costa</td>
                                <td className="py-3">Produtividade Total</td>
                                <td className="py-3">75%</td>
                                <td className="py-3">15/04/2023</td>
                                <td className="py-3">
                                  <Button variant="ghost" size="sm">Detalhes</Button>
                                </td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-3">Mariana Souza</td>
                                <td className="py-3">Produtividade Total</td>
                                <td className="py-3">35%</td>
                                <td className="py-3">20/04/2023</td>
                                <td className="py-3">
                                  <Button variant="ghost" size="sm">Detalhes</Button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="shop">
                <Card>
                  <CardHeader>
                    <CardTitle>Comprar Um Produto</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">Descubra novos produtos para adquirir e complementar seu negócio.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Curso Avançado de SEO</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <p className="text-sm">Domine as técnicas mais avançadas de SEO e posicionamento nos buscadores.</p>
                          <p className="font-bold text-lg">R$ 397,00</p>
                          <Button className="w-full">Saiba Mais</Button>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Membership Pro</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <p className="text-sm">Crie seu próprio site de membros e monetize seu conhecimento.</p>
                          <p className="font-bold text-lg">R$ 997,00</p>
                          <Button className="w-full">Saiba Mais</Button>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Pacote Templates</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <p className="text-sm">50+ templates profissionais para suas apresentações e propostas.</p>
                          <p className="font-bold text-lg">R$ 197,00</p>
                          <Button className="w-full">Saiba Mais</Button>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;
