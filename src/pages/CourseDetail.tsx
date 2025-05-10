
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Sample course data based on ID
  // In a real application, you would fetch this data from an API
  const courses = [
    {
      id: "1",
      title: "Desenvolvimento Web Completo",
      instructor: "Carlos Silva",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      category: "Programação",
      rating: 4.8,
      description: "Aprenda a criar sites e aplicativos web completos, do zero ao profissional. Neste curso, você aprenderá HTML, CSS, JavaScript, React, Node.js e muito mais.",
      modules: [
        { name: "Introdução ao Desenvolvimento Web", lessons: 5 },
        { name: "HTML5 e Semântica", lessons: 10 },
        { name: "CSS3 e Estilização", lessons: 12 },
        { name: "JavaScript Básico", lessons: 15 },
        { name: "JavaScript Avançado", lessons: 10 },
        { name: "Frameworks Frontend", lessons: 18 },
        { name: "Backend com Node.js", lessons: 14 },
        { name: "Banco de Dados", lessons: 8 },
        { name: "Projeto Final", lessons: 5 }
      ],
      totalLessons: 97,
      duration: "32 horas",
      level: "Iniciante ao Avançado",
      prerequisites: "Conhecimentos básicos de computação",
      lastUpdated: "Maio 2025"
    },
    {
      id: "2",
      title: "Marketing Digital para Iniciantes",
      instructor: "Ana Paula Costa",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFya2V0aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      category: "Marketing",
      rating: 4.5,
      description: "Domine as principais estratégias de marketing digital e aumente sua presença online. Aprenda sobre SEO, redes sociais, email marketing e muito mais.",
      modules: [
        { name: "Fundamentos do Marketing Digital", lessons: 8 },
        { name: "Estratégias de Conteúdo", lessons: 10 },
        { name: "SEO Básico", lessons: 12 },
        { name: "Redes Sociais", lessons: 15 },
        { name: "Email Marketing", lessons: 7 },
        { name: "Google Ads", lessons: 10 },
        { name: "Análise de Dados", lessons: 8 }
      ],
      totalLessons: 70,
      duration: "25 horas",
      level: "Iniciante",
      prerequisites: "Nenhum",
      lastUpdated: "Abril 2025"
    }
    // Add more courses as needed
  ];
  
  const course = courses.find(c => c.id === id);
  
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold">Curso não encontrado</h2>
          <Link to="/courses" className="text-primary hover:underline mt-4 inline-block">
            Voltar para lista de cursos
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Course Header */}
        <section className="bg-green-50 py-8">
          <div className="container mx-auto px-4">
            <Link to="/courses" className="inline-flex items-center text-primary hover:underline mb-6">
              <ArrowLeft size={16} className="mr-1" /> Voltar para cursos
            </Link>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 md:pr-8">
                <h1 className="text-3xl font-bold mb-3">{course.title}</h1>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center mb-2">
                  <p className="font-semibold mr-2">Criado por:</p>
                  <p className="text-primary">{course.instructor}</p>
                </div>
                <div className="flex items-center mb-2">
                  <p className="font-semibold mr-2">Última atualização:</p>
                  <p>{course.lastUpdated}</p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-1">
                    {"★".repeat(Math.floor(course.rating))}
                    {"☆".repeat(5 - Math.floor(course.rating))}
                  </div>
                  <span className="text-gray-600">({course.rating})</span>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 mb-6">
                  <h3 className="font-semibold mb-2">Este curso inclui:</h3>
                  <ul className="space-y-2">
                    <li>• {course.duration} de conteúdo em vídeo</li>
                    <li>• {course.totalLessons} aulas</li>
                    <li>• Acesso vitalício</li>
                    <li>• Certificado de conclusão</li>
                    <li>• Suporte ao aluno</li>
                  </ul>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="aspect-video rounded-md overflow-hidden mb-6">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="text-3xl font-bold mb-6">R${course.price.toFixed(2)}</div>
                  <Button className="w-full mb-4">Comprar agora</Button>
                  <Button variant="outline" className="w-full">
                    Adicionar ao carrinho
                  </Button>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    30 dias de garantia de devolução do dinheiro
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Course Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="content" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="content">Conteúdo do Curso</TabsTrigger>
                <TabsTrigger value="requirements">Requisitos</TabsTrigger>
                <TabsTrigger value="instructor">Professor</TabsTrigger>
              </TabsList>
              <TabsContent value="content" className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6">O que você aprenderá</h2>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Conteúdo do Curso</h3>
                  <div className="space-y-4">
                    {course.modules.map((module, index) => (
                      <div key={index} className="border border-gray-200 rounded-md">
                        <div className="flex justify-between items-center p-4">
                          <div>
                            <h4 className="font-semibold">{module.name}</h4>
                            <p className="text-sm text-gray-500">{module.lessons} aulas</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            Prévia
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="requirements" className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6">Pré-requisitos</h2>
                <p>{course.prerequisites}</p>
                
                <h3 className="text-xl font-semibold mt-8 mb-3">Nível</h3>
                <p>{course.level}</p>
              </TabsContent>
              
              <TabsContent value="instructor" className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6">Sobre o Instrutor</h2>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    {course.instructor.split(' ').map(name => name[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{course.instructor}</h3>
                    <p className="text-sm text-gray-600">Professor de {course.category}</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Especialista em {course.category} com vários anos de experiência no mercado e no ensino online.
                  Focado em trazer conteúdos práticos e atualizados para seus alunos.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CourseDetail;
