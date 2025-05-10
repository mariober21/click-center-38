
import { Book, ArrowRightLeft, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CourseManagementCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="overflow-hidden border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Book size={18} className="text-blue-500" />
            Gestão de Cursos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Gerencie seus cursos, aulas, materiais e progresso dos alunos em um único lugar.
          </p>
          <Link to="/admin/products">
            <Button>
              Acessar Gestão de Cursos
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </CardContent>
      </Card>
      
      <Card className="overflow-hidden border-l-4 border-l-violet-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowRightLeft size={18} className="text-violet-500" />
            Trocar Produto
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Visualize e selecione outros produtos para gerenciar ou promover na plataforma.
          </p>
          <Link to="/admin/products/categories">
            <Button>
              Trocar Produto
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseManagementCards;
