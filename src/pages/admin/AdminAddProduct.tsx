
import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import ProductForm from "@/components/admin/ProductForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Info, 
  ImageIcon, 
  DollarSign, 
  BarChart, 
  Boxes 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AdminAddProduct = () => {
  const [activeTab, setActiveTab] = useState("info");
  
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Adicionar Novo Produto</h1>
        </div>
        
        <Card>
          <Tabs 
            defaultValue="info" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-5 max-w-3xl mx-auto my-4">
              <TabsTrigger value="info" className="flex gap-2 items-center">
                <Info size={16} />
                <span className="hidden sm:inline">Informações</span>
              </TabsTrigger>
              <TabsTrigger value="media" className="flex gap-2 items-center">
                <ImageIcon size={16} />
                <span className="hidden sm:inline">Mídia</span>
              </TabsTrigger>
              <TabsTrigger value="pricing" className="flex gap-2 items-center">
                <DollarSign size={16} />
                <span className="hidden sm:inline">Preços</span>
              </TabsTrigger>
              <TabsTrigger value="inventory" className="flex gap-2 items-center">
                <Boxes size={16} />
                <span className="hidden sm:inline">Estoque</span>
              </TabsTrigger>
              <TabsTrigger value="seo" className="flex gap-2 items-center">
                <BarChart size={16} />
                <span className="hidden sm:inline">SEO</span>
              </TabsTrigger>
            </TabsList>
            <CardContent>
              <ProductForm activeTab={activeTab} />
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminAddProduct;
