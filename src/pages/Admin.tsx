
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Users, Settings, Shield, BarChart, FileText, Lock } from "lucide-react";

const Admin = () => {
  const [userName, setUserName] = useState<string>("Admin");
  const [searchQuery, setSearchQuery] = useState<string>("");
  
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
            
            <Tabs defaultValue="users">
              <TabsList className="mb-6">
                <TabsTrigger value="users">Usuários</TabsTrigger>
                <TabsTrigger value="courses">Cursos</TabsTrigger>
                <TabsTrigger value="settings">Configurações</TabsTrigger>
                <TabsTrigger value="reports">Relatórios</TabsTrigger>
                <TabsTrigger value="permissions">Permissões</TabsTrigger>
              </TabsList>
              
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
              
              <TabsContent value="courses">
                <Card>
                  <CardHeader>
                    <CardTitle>Gerenciar Cursos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">Interface para gerenciar todos os cursos da plataforma.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Configurações da Plataforma</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">Configurações gerais da plataforma.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reports">
                <Card>
                  <CardHeader>
                    <CardTitle>Relatórios e Análises</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">Visualizar estatísticas e relatórios da plataforma.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="permissions">
                <Card>
                  <CardHeader>
                    <CardTitle>Gerenciar Permissões</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">Configurar permissões de usuários e funções.</p>
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
