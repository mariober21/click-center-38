
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AdminSettings = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Configurações</h1>
        
        <Tabs defaultValue="profile">
          <TabsList className="mb-6">
            <TabsTrigger value="profile">Perfil</TabsTrigger>
            <TabsTrigger value="account">Conta</TabsTrigger>
            <TabsTrigger value="notifications">Notificações</TabsTrigger>
            <TabsTrigger value="billing">Pagamentos</TabsTrigger>
            <TabsTrigger value="api">API</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Informações do Perfil</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-1">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" defaultValue="Admin User" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" defaultValue="admin@exemplo.com" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="bio">Biografia</Label>
                  <textarea 
                    id="bio"
                    className="w-full min-h-[100px] p-3 border rounded-md"
                    defaultValue="Especialista em marketing digital e criação de conteúdo."
                  />
                </div>
                <Button>Salvar Alterações</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Segurança da Conta</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-1">
                  <Label htmlFor="current-password">Senha Atual</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new-password">Nova Senha</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <Button>Atualizar Senha</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Preferências de Notificações</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Emails de Marketing</p>
                      <p className="text-sm text-muted-foreground">Receba atualizações sobre novos recursos</p>
                    </div>
                    <Switch id="marketing" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Notificações de Vendas</p>
                      <p className="text-sm text-muted-foreground">Seja notificado quando receber uma nova venda</p>
                    </div>
                    <Switch id="sales" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Notificações de Comentários</p>
                      <p className="text-sm text-muted-foreground">Seja notificado quando alguém comentar nos seus produtos</p>
                    </div>
                    <Switch id="comments" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Alertas de Segurança</p>
                      <p className="text-sm text-muted-foreground">Receba alertas sobre atividades suspeitas</p>
                    </div>
                    <Switch id="security" defaultChecked />
                  </div>
                  <Button>Salvar Preferências</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="billing">
            <Card>
              <CardHeader>
                <CardTitle>Informações de Pagamento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 bg-gray-50 rounded-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Cartão de Crédito</p>
                      <p className="text-sm text-muted-foreground">**** **** **** 4242</p>
                      <p className="text-sm text-muted-foreground">Expira 12/2025</p>
                    </div>
                    <Button variant="outline" size="sm">Editar</Button>
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="billing-email">Email de Cobrança</Label>
                  <Input id="billing-email" defaultValue="financeiro@exemplo.com" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="tax-id">CPF/CNPJ</Label>
                  <Input id="tax-id" defaultValue="123.456.789-00" />
                </div>
                <Button>Salvar Alterações</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="api">
            <Card>
              <CardHeader>
                <CardTitle>Chaves de API</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-md">
                  <div className="space-y-2">
                    <p className="font-medium">Chave Pública</p>
                    <div className="flex items-center gap-2">
                      <Input readOnly value="pk_test_51NKgW3FUAZk7A8FZnTkWnjpHGRgoutu5Kbi7nXABC" />
                      <Button variant="outline">Copiar</Button>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-md">
                  <div className="space-y-2">
                    <p className="font-medium">Chave Secreta</p>
                    <div className="flex items-center gap-2">
                      <Input readOnly value="sk_test_51NKgW3FUAZk7A8FZnTkWnjpHGRgoutu5Kbi7nXYZ" type="password" />
                      <Button variant="outline">Mostrar</Button>
                    </div>
                  </div>
                </div>
                <Button>Gerar Novas Chaves</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
