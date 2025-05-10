
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import the refactored components
import AdminHeader from "@/components/admin/AdminHeader";
import AdminLoginForm from "@/components/admin/AdminLoginForm";
import AdminRegisterForm from "@/components/admin/AdminRegisterForm";
import AdminResetPasswordForm from "@/components/admin/AdminResetPasswordForm";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <AdminHeader />

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
                <AdminLoginForm />
              </TabsContent>
              
              <TabsContent value="register">
                <AdminRegisterForm onSuccess={() => setActiveTab("login")} />
              </TabsContent>
              
              <TabsContent value="reset">
                <AdminResetPasswordForm onSuccess={() => setActiveTab("login")} />
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
