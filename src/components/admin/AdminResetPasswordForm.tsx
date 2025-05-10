
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Mail } from "lucide-react";
import { validAdminsData } from "@/lib/admin-data";

// Define the validation schema for password reset
const resetSchema = z.object({
  email: z.string().email("Digite um email válido"),
});

type ResetPasswordFormProps = {
  onSuccess?: () => void;
};

const AdminResetPasswordForm = ({ onSuccess }: ResetPasswordFormProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const resetForm = useForm({
    resolver: zodResolver(resetSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleReset = (data: z.infer<typeof resetSchema>) => {
    setIsLoading(true);
    
    // Simulate API request with timeout
    setTimeout(() => {
      // Check if admin with this email exists
      const existingAdmin = validAdminsData.find(admin => admin.email === data.email);
      
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
        
        // Clear form
        resetForm.reset();
        
        // Call success callback if provided
        if (onSuccess) onSuccess();
      }
      
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
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
    </>
  );
};

export default AdminResetPasswordForm;
