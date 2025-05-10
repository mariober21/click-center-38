
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdminLogin = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Hardcoded admin credentials for demo purposes
  // In a real app, this would be authenticated against a secure backend
  const validAdmins = [
    { email: "mario@exemplo.com", password: "admin123", name: "Mário Bernardo" },
    { email: "rosa@exemplo.com", password: "admin123", name: "Rosa Bernardo" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API request with timeout
    setTimeout(() => {
      const adminUser = validAdmins.find(admin => admin.email === email && admin.password === password);
      
      if (adminUser) {
        // Store admin info in localStorage
        localStorage.setItem("userName", adminUser.name);
        localStorage.setItem("userRole", "admin"); // Set role as admin
        localStorage.setItem("isAdmin", "true");
        
        toast({
          title: "Login de administrador bem-sucedido",
          description: `Bem-vindo(a), ${adminUser.name}!`,
        });
        
        navigate("/admin");
      } else {
        toast({
          title: "Erro de autenticação",
          description: "Credenciais de administrador inválidas.",
          variant: "destructive",
        });
      }
      
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-primary text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <button onClick={() => navigate("/")} className="hover:bg-primary-dark p-2 rounded-full">
              <ArrowLeft size={20} />
            </button>
            <span className="text-xl font-bold">ClickCenter</span>
            <span className="bg-white text-primary text-xs font-bold px-2 py-1 rounded">ADMIN</span>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1 flex flex-col items-center text-center">
            <Lock className="h-12 w-12 text-primary mb-2" />
            <CardTitle className="text-2xl font-bold">Acesso Administrativo</CardTitle>
            <p className="text-sm text-gray-500">
              Entre com suas credenciais de administrador para acessar o painel de controle
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Autenticando..." : "Entrar como Administrador"}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Esta é uma área restrita apenas para administradores.
                <br />
                <Button variant="link" onClick={() => navigate("/login")} className="p-0 h-auto">
                  Voltar para o login de usuário
                </Button>
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminLogin;
