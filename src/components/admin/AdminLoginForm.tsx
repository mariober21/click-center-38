
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Mail, KeyRound } from "lucide-react";
import { validAdminsData } from "@/lib/admin-data";

// Define the validation schema for admin login
const loginSchema = z.object({
  email: z.string().email("Digite um email válido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type LoginFormProps = {
  onSuccess?: () => void;
};

const AdminLoginForm = ({ onSuccess }: LoginFormProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const loginForm = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = (data: z.infer<typeof loginSchema>) => {
    setIsLoading(true);
    
    // Simulate API request with timeout
    setTimeout(() => {
      const adminUser = validAdminsData.find(admin => admin.email === data.email && admin.password === data.password);
      
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
        if (onSuccess) onSuccess();
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
    <Form {...loginForm}>
      <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-4">
        <FormField
          control={loginForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <div className="relative">
                  <Mail className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                  <Input 
                    placeholder="admin@exemplo.com" 
                    className="pl-8" 
                    {...field} 
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={loginForm.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <div className="relative">
                  <KeyRound className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                  <Input 
                    type="password" 
                    placeholder="••••••••" 
                    className="pl-8" 
                    {...field} 
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Autenticando..." : "Entrar como Administrador"}
        </Button>
      </form>
    </Form>
  );
};

export default AdminLoginForm;
