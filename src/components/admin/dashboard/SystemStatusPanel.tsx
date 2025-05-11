
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, RefreshCw, WrenchIcon } from "lucide-react";
import { adminSystemService, AdminSectionKey } from "@/services/AdminSystemService";

const SystemStatusPanel = () => {
  const [sectionStatus, setSectionStatus] = useState<Record<AdminSectionKey, boolean>>(
    adminSystemService.getAllSectionsStatus()
  );
  const [checking, setChecking] = useState(false);
  const [lastChecked, setLastChecked] = useState<Date | null>(adminSystemService.getLastCheckTime());
  
  const checkAllSystems = () => {
    setChecking(true);
    // Simulate an actual check that takes time
    setTimeout(() => {
      const status = adminSystemService.checkAllSections();
      setSectionStatus(status);
      setLastChecked(adminSystemService.getLastCheckTime());
      setChecking(false);
    }, 1000);
  };
  
  const handleFixSection = (section: AdminSectionKey) => {
    adminSystemService.fixSection(section);
    setSectionStatus(adminSystemService.getAllSectionsStatus());
  };
  
  const handleFixAllSections = () => {
    adminSystemService.fixAllSections();
    setSectionStatus(adminSystemService.getAllSectionsStatus());
  };
  
  // Translations for section names
  const sectionNames: Record<AdminSectionKey, string> = {
    vendas: "Vendas",
    marketing: "Marketing",
    carteira: "Carteira",
    usuarios: "Usuários",
    parcerias: "Parcerias",
    produtos: "Produtos"
  };
  
  // Check if any sections have problems
  const hasProblems = Object.values(sectionStatus).some(status => !status);
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium flex items-center gap-2">
            Status do Sistema Administrativo
          </CardTitle>
          <Button 
            variant="outline" 
            size="sm"
            onClick={checkAllSystems}
            disabled={checking}
            className="flex items-center gap-1"
          >
            <RefreshCw size={16} className={checking ? "animate-spin" : ""} />
            {checking ? "Verificando..." : "Verificar Status"}
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          {lastChecked 
            ? `Última verificação: ${lastChecked.toLocaleString()}` 
            : "Sistema não verificado"}
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {Object.entries(sectionStatus).map(([section, isWorking]) => (
              <div 
                key={section}
                className="flex justify-between items-center p-3 rounded-md border"
              >
                <div className="flex items-center gap-2">
                  {isWorking ? (
                    <CheckCircle size={18} className="text-green-500" />
                  ) : (
                    <AlertTriangle size={18} className="text-amber-500" />
                  )}
                  <span>{sectionNames[section as AdminSectionKey]}</span>
                </div>
                <div>
                  {isWorking ? (
                    <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                      Funcionando
                    </Badge>
                  ) : (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleFixSection(section as AdminSectionKey)}
                      className="text-amber-600 hover:text-amber-700 hover:bg-amber-50"
                    >
                      Corrigir
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {hasProblems && (
            <Button 
              onClick={handleFixAllSections}
              className="w-full mt-4 flex items-center gap-2"
            >
              <WrenchIcon size={16} />
              Corrigir Todos os Problemas
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SystemStatusPanel;
