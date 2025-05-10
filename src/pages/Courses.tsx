
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Sample courses data
  const courses = [
    {
      id: "1",
      title: "Desenvolvimento Web Completo",
      instructor: "Carlos Silva",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      category: "Programação",
      rating: 4.8,
    },
    {
      id: "2",
      title: "Marketing Digital para Iniciantes",
      instructor: "Ana Paula Costa",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFya2V0aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      category: "Marketing",
      rating: 4.5,
    },
    {
      id: "3",
      title: "Fotografia Profissional",
      instructor: "Roberto Almeida",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      category: "Fotografia",
      rating: 4.7,
    },
    {
      id: "4",
      title: "Excel Avançado para Negócios",
      instructor: "Fernanda Santos",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1607968565043-36af90dde238?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZXhjZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      category: "Negócios",
      rating: 4.6,
    },
    {
      id: "5",
      title: "Design Gráfico com Adobe Creative Suite",
      instructor: "Lucas Mendes",
      price: 349.99,
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      category: "Design",
      rating: 4.9,
    },
    {
      id: "6",
      title: "Curso de Idiomas: Inglês para Negócios",
      instructor: "Patricia Oliveira",
      price: 189.99,
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZW5nbGlzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      category: "Idiomas",
      rating: 4.4,
    },
    {
      id: "7",
      title: "Finanças Pessoais e Investimentos",
      instructor: "Marcelo Costa",
      price: 229.99,
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluYW5jZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      category: "Finanças",
      rating: 4.7,
    },
    {
      id: "8",
      title: "Introdução à Inteligência Artificial",
      instructor: "Rafael Souza",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YWklMjBhcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      category: "Tecnologia",
      rating: 4.8,
    },
  ];

  // Filter courses based on search term
  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Courses Header */}
        <section className="bg-green-50 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">Explore Nossos Cursos</h1>
            <div className="flex gap-4 flex-wrap">
              <div className="flex-1 min-w-[240px]">
                <Input 
                  type="text" 
                  placeholder="Buscar cursos..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <Button>Buscar</Button>
            </div>
          </div>
        </section>
        
        {/* Courses Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} {...course} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold">Nenhum curso encontrado</h3>
                <p className="text-gray-600 mt-2">Tente buscar usando outros termos.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
