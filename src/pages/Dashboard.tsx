
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Dashboard = () => {
  const [userType] = useState<"student" | "instructor">("student");
  
  const enrolledCourses = [
    {
      id: "1",
      title: "Desenvolvimento Web Completo",
      instructor: "Carlos Silva",
      progress: 35,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      lastAccessed: "Ontem"
    },
    {
      id: "2",
      title: "Marketing Digital para Iniciantes",
      instructor: "Ana Paula Costa",
      progress: 68,
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFya2V0aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      lastAccessed: "2 dias atrás"
    },
    {
      id: "3",
      title: "Fotografia Profissional",
      instructor: "Roberto Almeida",
      progress: 12,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      lastAccessed: "1 semana atrás"
    }
  ];
  
  const instructorCourses = [
    {
      id: "101",
      title: "Introdução à Programação",
      students: 128,
      revenue: 12450,
      status: "publicado"
    },
    {
      id: "102",
      title: "Design UX/UI Avançado",
      students: 89,
      revenue: 8900,
      status: "publicado"
    },
    {
      id: "103",
      title: "Gestão de Projetos Ágeis",
      students: 0,
      revenue: 0,
      status: "rascunho"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">EduPro</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <div className="text-right">
                <p className="text-sm text-gray-600">Bem-vindo(a),</p>
                <p className="font-semibold">João Silva</p>
              </div>
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                JS
              </div>
            </div>
            <Button variant="outline" asChild>
              <Link to="/">
                <ArrowLeft size={16} className="mr-2" /> Sair
              </Link>
            </Button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Meu Painel</h1>
          <Link to="/courses">
            <Button>
              Explorar Cursos <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
        
        <Tabs defaultValue={userType}>
          <TabsList className="mb-6">
            <TabsTrigger value="student">Aluno</TabsTrigger>
            <TabsTrigger value="instructor">Instrutor</TabsTrigger>
          </TabsList>
          
          <TabsContent value="student">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Meus Cursos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {enrolledCourses.length > 0 ? (
                      <div className="space-y-6">
                        {enrolledCourses.map((course) => (
                          <Link to={`/courses/${course.id}`} key={course.id}>
                            <div className="flex gap-4 hover:bg-gray-50 p-2 rounded-md transition-colors">
                              <div className="w-24 h-16 rounded overflow-hidden">
                                <img
                                  src={course.image}
                                  alt={course.title}
                                  className="object-cover w-full h-full"
                                />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold">{course.title}</h3>
                                <p className="text-sm text-gray-600">{course.instructor}</p>
                                <div className="mt-2">
                                  <div className="w-full h-2 bg-gray-200 rounded">
                                    <div
                                      className="h-2 bg-primary rounded"
                                      style={{ width: `${course.progress}%` }}
                                    ></div>
                                  </div>
                                  <div className="flex justify-between mt-1 text-xs text-gray-600">
                                    <span>{course.progress}% completo</span>
                                    <span>Último acesso: {course.lastAccessed}</span>
                                  </div>
                                </div>
                              </div>
                              <Button variant="ghost" size="sm">
                                Continuar
                              </Button>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-500 mb-4">Você ainda não está matriculado em nenhum curso.</p>
                        <Link to="/courses">
                          <Button>Explorar Cursos</Button>
                        </Link>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
              
              {/* Right Column */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Estatísticas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-600 text-sm">Cursos em andamento</p>
                        <p className="text-2xl font-bold">{enrolledCourses.length}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Cursos concluídos</p>
                        <p className="text-2xl font-bold">0</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Certificados conquistados</p>
                        <p className="text-2xl font-bold">0</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Cursos Recomendados</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Link to="/courses/4" className="block">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gray-200 rounded"></div>
                          <div>
                            <p className="font-medium">Excel Avançado para Negócios</p>
                            <p className="text-sm text-gray-600">Fernanda Santos</p>
                          </div>
                        </div>
                      </Link>
                      <Link to="/courses/5" className="block">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gray-200 rounded"></div>
                          <div>
                            <p className="font-medium">Design Gráfico com Adobe Creative Suite</p>
                            <p className="text-sm text-gray-600">Lucas Mendes</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="instructor">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Meus Cursos</CardTitle>
                    <Button>Criar Novo Curso</Button>
                  </CardHeader>
                  <CardContent>
                    {instructorCourses.length > 0 ? (
                      <div className="space-y-6">
                        {instructorCourses.map((course) => (
                          <div key={course.id} className="flex gap-4 hover:bg-gray-50 p-2 rounded-md transition-colors">
                            <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center text-xl font-bold">
                              {course.title.charAt(0)}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold">{course.title}</h3>
                              <div className="flex items-center mt-2">
                                <span className={`text-xs px-2 py-1 rounded ${
                                  course.status === "publicado" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                                }`}>
                                  {course.status === "publicado" ? "Publicado" : "Rascunho"}
                                </span>
                                <span className="text-sm text-gray-600 ml-4">
                                  {course.students} alunos
                                </span>
                                <span className="text-sm text-gray-600 ml-4">
                                  R$ {course.revenue.toFixed(2)}
                                </span>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">
                              Editar
                            </Button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-500 mb-4">Você ainda não criou nenhum curso.</p>
                        <Button>Criar Meu Primeiro Curso</Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
              
              {/* Right Column */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Desempenho</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-600 text-sm">Total de alunos</p>
                        <p className="text-2xl font-bold">217</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Receita total</p>
                        <p className="text-2xl font-bold">R$ 21.350,00</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Avaliação média</p>
                        <p className="text-2xl font-bold">4.7</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Links Rápidos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        Programa de Afiliados
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        Ferramentas de Marketing
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        Relatórios Detalhados
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        Suporte ao Instrutor
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
