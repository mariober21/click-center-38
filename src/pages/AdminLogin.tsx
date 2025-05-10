
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft, Lock, Mail, KeyRound, UserPlus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the validation schema for admin login
const loginSchema = z.object({
  email: z.string().email("Digite um email válido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

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

// Define the validation schema for password reset
const resetSchema = z.object({
  email: z.string().email("Digite um email válido"),
});

const AdminLogin = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  // Define the forms
  const loginForm = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const registerForm = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const resetForm = useForm({
    resolver: zodResolver(resetSchema),
    defaultValues: {
      email: "",
    },
  });

  // Hardcoded admin credentials for demo purposes
  // In a real app, this would be authenticated against a secure backend
  const validAdmins = [
    { email: "mario@exemplo.com", password: "admin123", name: "Mário Bernardo" },
    { email: "rosa@exemplo.com", password: "admin123", name: "Rosa Bernardo" }
  ];

  const handleLogin = (data: z.infer<typeof loginSchema>) => {
    setIsLoading(true);
    
    // Simulate API request with timeout
    setTimeout(() => {
      const adminUser = validAdmins.find(admin => admin.email === data.email && admin.password === data.password);
      
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

  const handleRegister = (data: z.infer<typeof registerSchema>) => {
    setIsLoading(true);
    
    // Simulate API request with timeout
    setTimeout(() => {
      // Check if admin with this email already exists
      const existingAdmin = validAdmins.find(admin => admin.email === data.email);
      
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
        
        // Move to login tab
        setActiveTab("login");
        // Clear form
        registerForm.reset();
      }
      
      setIsLoading(false);
    }, 1000);
  };

  const handleReset = (data: z.infer<typeof resetSchema>) => {
    setIsLoading(true);
    
    // Simulate API request with timeout
    setTimeout(() => {
      // Check if admin with this email exists
      const existingAdmin = validAdmins.find(admin => admin.email === data.email);
      
      if (!existingAdmin) {
        toast({
          title: "Email não encontrado",
          description: "Não existe uma conta de administrador com este email.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Email enviado",
          description: "Instruções para redefinir sua senha foram enviadas para o seu email.",
        });
        
        // Move to login tab
        setActiveTab("login");
        // Clear form
        resetForm.reset();
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
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="login">Entrar</TabsTrigger>
                <TabsTrigger value="register">Criar Conta</TabsTrigger>
                <TabsTrigger value="reset">Esqueci a Senha</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
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
              </TabsContent>
              
              <TabsContent value="register">
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
              </TabsContent>
              
              <TabsContent value="reset">
                <Form {...resetForm}>
                  <form onSubmit={resetForm.handleSubmit(handleReset)} className="space-y-4">
                    <FormField
                      control={resetForm.control}
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
                    
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? "Enviando..." : "Enviar Instruções de Recuperação"}
                    </Button>
                  </form>
                </Form>
                
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500">
                    Enviaremos instruções para redefinir sua senha para o email registrado.
                  </p>
                </div>
              </TabsContent>
              
            </Tabs>
            
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
