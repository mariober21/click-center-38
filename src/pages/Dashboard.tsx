
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  Award, 
  BarChart, 
  MessageSquare, 
  Settings,
  User,
  Heart,
  Bookmark,
  HelpCircle,
  FileText,
  Clock
} from "lucide-react";

const Dashboard = () => {
  const [userType] = useState<"student" | "instructor">("student");
  const [userName, setUserName] = useState<string>("Usuário");
  const [activeSection, setActiveSection] = useState<string>("dashboard");
  
  // Get user name from localStorage
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);
  
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
  
  // Certificates
  const certificates = [
    {
      id: "cert1",
      title: "Introdução ao Marketing Digital",
      issueDate: "2024-03-15",
      instructor: "Ana Paula Costa"
    },
    {
      id: "cert2",
      title: "HTML e CSS Básicos",
      issueDate: "2024-01-10",
      instructor: "Carlos Silva"
    }
  ];

  // Progress History
  const progressHistory = [
    { 
      date: "2024-05-08", 
      course: "Desenvolvimento Web Completo", 
      activity: "Completou 2 lições", 
      timeSpent: "45 min" 
    },
    { 
      date: "2024-05-07", 
      course: "Marketing Digital para Iniciantes", 
      activity: "Completou quiz", 
      timeSpent: "20 min" 
    },
    { 
      date: "2024-05-05", 
      course: "Fotografia Profissional", 
      activity: "Iniciou novo módulo", 
      timeSpent: "15 min" 
    }
  ];

  // Comments
  const comments = [
    {
      id: "comm1",
      course: "Desenvolvimento Web Completo",
      text: "Muito bom o conteúdo sobre JavaScript!",
      date: "2024-05-04",
      likes: 3
    },
    {
      id: "comm2",
      course: "Marketing Digital para Iniciantes",
      text: "Gostaria de mais exemplos práticos sobre SEO",
      date: "2024-05-01",
      likes: 1
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

  const handleLogout = () => {
    // Clear the user data from localStorage
    localStorage.removeItem("userName");
    // Redirect to home page
    window.location.href = "/";
  };

  // Sidebar items with icons
  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: <BarChart size={20} /> },
    { id: "mycourses", label: "Meus Cursos", icon: <BookOpen size={20} /> },
    { id: "certificates", label: "Certificados", icon: <Award size={20} /> },
    { id: "progress", label: "Meu Progresso", icon: <Clock size={20} /> },
    { id: "comments", label: "Comentários", icon: <MessageSquare size={20} /> },
    { id: "profile", label: "Perfil", icon: <User size={20} /> },
    { id: "favorites", label: "Favoritos", icon: <Heart size={20} /> },
    { id: "saved", label: "Salvos", icon: <Bookmark size={20} /> },
    { id: "settings", label: "Configurações", icon: <Settings size={20} /> },
    { id: "help", label: "Ajuda", icon: <HelpCircle size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">ClickCenter</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <div className="text-right">
                <p className="text-sm text-gray-200">Bem-vindo(a),</p>
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
          <nav className="space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                className={`w-full flex items-center gap-2 p-2 rounded-md transition-colors ${
                  activeSection === item.id
                    ? "bg-accent text-primary font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setActiveSection(item.id)}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeSection === "dashboard" && (
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold">Meu Painel</h1>
                <Link to="/courses">
                  <Button>
                    Explorar Cursos <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <BookOpen size={18} className="text-primary" />
                      Cursos em Andamento
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{enrolledCourses.length}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Award size={18} className="text-primary" />
                      Certificados
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{certificates.length}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Clock size={18} className="text-primary" />
                      Tempo de Estudo (semana)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">3h 45min</p>
                  </CardContent>
                </Card>
              </div>
              
              <Tabs defaultValue={userType} className="mb-8">
                <TabsList className="mb-6">
                  <TabsTrigger value="student">Aluno</TabsTrigger>
                  <TabsTrigger value="instructor">Instrutor</TabsTrigger>
                </TabsList>
                
                <TabsContent value="student">
                  <Card>
                    <CardHeader>
                      <CardTitle>Continuar Aprendendo</CardTitle>
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
                </TabsContent>
                
                <TabsContent value="instructor">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle>Meus Cursos</CardTitle>
                      <Button>Criar Novo Curso</Button>
                    </CardHeader>
                    <CardContent>
                      {/* Instructor courses content */}
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
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}

          {activeSection === "mycourses" && (
            <div className="max-w-5xl mx-auto">
              <h1 className="text-2xl font-bold mb-6">Meus Cursos</h1>
              
              <Card>
                <CardContent className="pt-6">
                  {enrolledCourses.length > 0 ? (
                    <div className="space-y-6">
                      {enrolledCourses.map((course) => (
                        <Link to={`/courses/${course.id}`} key={course.id}>
                          <div className="flex gap-4 hover:bg-gray-50 p-3 rounded-md transition-colors">
                            <div className="w-32 h-20 rounded overflow-hidden">
                              <img
                                src={course.image}
                                alt={course.title}
                                className="object-cover w-full h-full"
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg">{course.title}</h3>
                              <p className="text-gray-600">{course.instructor}</p>
                              <div className="mt-3">
                                <div className="w-full h-2 bg-gray-200 rounded">
                                  <div
                                    className="h-2 bg-primary rounded"
                                    style={{ width: `${course.progress}%` }}
                                  ></div>
                                </div>
                                <div className="flex justify-between mt-1 text-sm text-gray-600">
                                  <span>{course.progress}% completo</span>
                                  <span>Último acesso: {course.lastAccessed}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2">
                              <Button>
                                Continuar
                              </Button>
                              <Button variant="outline">
                                Detalhes
                              </Button>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-500 mb-4">Você ainda não está matriculado em nenhum curso.</p>
                      <Link to="/courses">
                        <Button>Explorar Cursos</Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
          
          {activeSection === "certificates" && (
            <div className="max-w-5xl mx-auto">
              <h1 className="text-2xl font-bold mb-6">Meus Certificados</h1>
              
              <Card>
                <CardContent className="pt-6">
                  {certificates.length > 0 ? (
                    <div className="space-y-4">
                      {certificates.map((cert) => (
                        <div key={cert.id} className="border border-gray-200 p-4 rounded-lg hover:bg-gray-50">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium text-lg">{cert.title}</h3>
                              <p className="text-gray-600">Instrutor: {cert.instructor}</p>
                              <p className="text-gray-600 text-sm mt-1">
                                Emitido em: {new Date(cert.issueDate).toLocaleDateString('pt-BR')}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <FileText size={16} className="mr-1" /> Ver
                              </Button>
                              <Button size="sm">
                                <ArrowRight size={16} className="mr-1" /> Download
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-500">Você ainda não possui certificados.</p>
                      <p className="text-gray-500 mt-2">Complete cursos para ganhar certificados.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
          
          {activeSection === "progress" && (
            <div className="max-w-5xl mx-auto">
              <h1 className="text-2xl font-bold mb-6">Meu Progresso</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Tempo Total de Estudo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">24h 30min</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Cursos Completados</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">2</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Lições Completadas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">37</p>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Histórico de Atividades</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {progressHistory.map((item, index) => (
                      <div key={index} className="border-l-2 border-primary pl-4 py-2">
                        <p className="text-sm text-gray-500">{item.date}</p>
                        <p className="font-medium">{item.course}</p>
                        <div className="flex justify-between text-sm mt-1">
                          <span>{item.activity}</span>
                          <span>{item.timeSpent}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          {activeSection === "comments" && (
            <div className="max-w-5xl mx-auto">
              <h1 className="text-2xl font-bold mb-6">Meus Comentários</h1>
              
              <Card>
                <CardContent className="pt-6">
                  {comments.length > 0 ? (
                    <div className="space-y-4">
                      {comments.map((comment) => (
                        <div key={comment.id} className="border border-gray-200 p-4 rounded-lg">
                          <p className="font-medium">{comment.course}</p>
                          <p className="my-2">{comment.text}</p>
                          <div className="flex justify-between text-sm text-gray-500">
                            <span>{comment.date}</span>
                            <span className="flex items-center">
                              <Heart size={14} className="mr-1" /> {comment.likes} curtidas
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-500">Você ainda não fez nenhum comentário.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
          
          {/* Add other sections as needed */}
          {activeSection === "profile" && (
            <div className="max-w-5xl mx-auto">
              <h1 className="text-2xl font-bold mb-6">Perfil</h1>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-gray-500">Área de configurações do perfil.</p>
                </CardContent>
              </Card>
            </div>
          )}
          
          {activeSection === "settings" && (
            <div className="max-w-5xl mx-auto">
              <h1 className="text-2xl font-bold mb-6">Configurações</h1>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-gray-500">Área de configurações da conta.</p>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
        
        {/* Mobile bottom navigation */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2">
          {sidebarItems.slice(0, 5).map((item) => (
            <button
              key={item.id}
              className={`flex flex-col items-center p-2 ${
                activeSection === item.id ? "text-primary" : "text-gray-500"
              }`}
              onClick={() => setActiveSection(item.id)}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
