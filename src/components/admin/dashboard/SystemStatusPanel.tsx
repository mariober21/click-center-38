
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle, XCircle, RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";
import { adminSystemService, AdminSectionKey } from "@/services/AdminSystemService";
import { toast } from "@/hooks/use-toast";

const SystemStatusPanel = () => {
  const [systemStatus, setSystemStatus] = useState<Record<AdminSectionKey, boolean>>({
    vendas: true,
    marketing: false,
    carteira: true,
    usuarios: true,
    parcerias: true,
    produtos: true
  });
  
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  // Get initial system status
  useEffect(() => {
    const status: Record<AdminSectionKey, boolean> = {} as Record<AdminSectionKey, boolean>;
    
    // Initialize with all section statuses from the service
    const allSections = Object.keys(adminSystemService.getAllSectionsStatus()) as AdminSectionKey[];
    allSections.forEach((sectionKey) => {
      status[sectionKey] = adminSystemService.getSectionStatus(sectionKey);
    });
    
    setSystemStatus(status);
  }, []);
  
  const refreshStatus = () => {
    setIsRefreshing(true);
    
    // Simulate API call
    setTimeout(() => {
      const status: Record<AdminSectionKey, boolean> = {} as Record<AdminSectionKey, boolean>;
      
      // Update all section statuses
      const allSections = Object.keys(adminSystemService.getAllSectionsStatus()) as AdminSectionKey[];
      allSections.forEach((sectionKey) => {
        status[sectionKey] = adminSystemService.getSectionStatus(sectionKey);
      });
      
      setSystemStatus(status);
      setIsRefreshing(false);
      
      toast({
        title: "Status atualizado",
        description: "O status do sistema foi atualizado com sucesso."
      });
    }, 1000);
  };
  
  const fixSection = (section: AdminSectionKey) => {
    adminSystemService.fixSection(section);
    
    setSystemStatus(prev => ({
      ...prev,
      [section]: true
    }));
    
    toast({
      title: "Seção reparada",
      description: `A seção ${section} foi reparada com sucesso.`
    });
  };
  
  const getStatusCount = () => {
    const total = Object.keys(systemStatus).length;
    const working = Object.values(systemStatus).filter(status => status).length;
    return { working, total };
  };
  
  const { working, total } = getStatusCount();
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-md font-medium">Status do Sistema</CardTitle>
        <Button 
          variant="outline" 
          size="sm" 
          className="h-8 gap-1"
          onClick={refreshStatus}
          disabled={isRefreshing}
        >
          <RefreshCw size={14} className={isRefreshing ? "animate-spin" : ""} />
          Atualizar
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-muted-foreground">Status geral</p>
            <p className="font-medium">
              {working === total ? (
                <span className="text-green-600 flex items-center gap-1">
                  <CheckCircle size={16} /> Todos os sistemas operacionais
                </span>
              ) : (
                <span className="text-amber-600 flex items-center gap-1">
                  <AlertCircle size={16} /> {working} de {total} sistemas operacionais
                </span>
              )}
            </p>
          </div>
          <div>
            <Badge variant={working === total ? "default" : "outline"} className="bg-green-100 text-green-800 hover:bg-green-100">
              {working}/{total} Online
            </Badge>
          </div>
        </div>
        
        <div className="space-y-2">
          {Object.entries(systemStatus).map(([section, status]) => (
            <div key={section} className="flex items-center justify-between py-1 border-b border-gray-100 last:border-0">
              <div className="flex items-center gap-2">
                {status ? (
                  <CheckCircle size={16} className="text-green-500" />
                ) : (
                  <XCircle size={16} className="text-red-500" />
                )}
                <span className="capitalize">{section}</span>
              </div>
              {!status && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => fixSection(section as AdminSectionKey)}
                  className="h-7 text-xs"
                >
                  Reparar
                </Button>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SystemStatusPanel;
