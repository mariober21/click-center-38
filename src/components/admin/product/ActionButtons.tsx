
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye, Save, FileText } from "lucide-react";

interface ActionButtonsProps {
  onBack: () => void;
  onSaveAsDraft: () => void;
  onPublish: () => void;
}

const ActionButtons = ({ onBack, onSaveAsDraft, onPublish }: ActionButtonsProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <Button 
        variant="outline" 
        type="button" 
        onClick={onBack}
      >
        <ArrowLeft size={16} className="mr-2" /> Voltar
      </Button>
      
      <div className="flex items-center gap-2">
        <Button 
          variant="outline" 
          type="button"
          onClick={() => window.open("/product-preview", "_blank")}
        >
          <Eye size={16} className="mr-2" /> Pré-visualizar
        </Button>
        
        <Button 
          type="button" 
          variant="outline" 
          onClick={onSaveAsDraft}
        >
          <FileText size={16} className="mr-2" /> Salvar Rascunho
        </Button>
        
        <Button 
          type="button" 
          onClick={onPublish}
          className="bg-primary text-white hover:bg-primary/90"
        >
          <Save size={16} className="mr-2" /> Publicar
        </Button>
      </div>
    </div>
  );
};

export default ActionButtons;
