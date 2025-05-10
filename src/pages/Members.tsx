
import { useState } from "react";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Members = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Área de Membros</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Acesso aos Cursos</h2>
            <p className="text-gray-600">Acesse todos os cursos disponíveis para membros da ClickCenter.</p>
          </Card>
          
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Conteúdo Exclusivo</h2>
            <p className="text-gray-600">Material extra, workshops e eventos disponíveis somente para membros.</p>
          </Card>
          
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Comunidade</h2>
            <p className="text-gray-600">Participe da comunidade de membros e conecte-se com outros profissionais.</p>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Members;
