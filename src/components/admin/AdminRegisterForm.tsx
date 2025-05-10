
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { UserPlus, Mail, KeyRound } from "lucide-react";
import { validAdminsData } from "@/lib/admin-data";

// Define the validation schema for admin registration
const registerSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Digite um email válido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
  confirmPassword: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não conferem",
  path: ["confirmPassword"],
});

type RegisterFormProps = {
  onSuccess?: () => void;
};

const AdminRegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const registerForm = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleRegister = (data: z.infer<typeof registerSchema>) => {
    setIsLoading(true);
    
    // Simulate API request with timeout
    setTimeout(() => {
      // Check if admin with this email already exists
      const existingAdmin = validAdminsData.find(admin => admin.email === data.email);
      
      if (existingAdmin) {
        toast({
          title: "Erro no cadastro",
          description: "Um administrador com este email já existe.",
          variant: "destructive",
        });
      } else {
        // In a real app, this would add the admin to a database
        // For demo, we'll just show a success message
        toast({
          title: "Cadastro realizado com sucesso",
          description: "Sua conta de administrador foi criada. Você já pode fazer login.",
        });
        
        // Clear form
        registerForm.reset();
        
        // Call success callback if provided
        if (onSuccess) onSuccess();
      }
      
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Form {...registerForm}>
      <form onSubmit={registerForm.handleSubmit(handleRegister)} className="space-y-4">
        <FormField
          control={registerForm.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome Completo</FormLabel>
              <FormControl>
                <div className="relative">
                  <UserPlus className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                  <Input 
                    placeholder="Seu Nome" 
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
          control={registerForm.control}
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
          control={registerForm.control}
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
        
        <FormField
          control={registerForm.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmar Senha</FormLabel>
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
          {isLoading ? "Cadastrando..." : "Criar Conta de Administrador"}
        </Button>
      </form>
    </Form>
  );
};

export default AdminRegisterForm;
