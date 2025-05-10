
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { type FilePreview } from "@/hooks/useProductForm";

interface ProductFormSubmitProps {
  onSubmit: (e: React.FormEvent) => void;
  setStatus: (status: string) => void;
  children: React.ReactNode;
}

const ProductFormSubmit = ({ 
  onSubmit, 
  setStatus, 
  children 
}: ProductFormSubmitProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Action handlers
  const handleSaveAsDraft = () => {
    setStatus("draft");
    setTimeout(() => document.forms[0].requestSubmit(), 0);
  };
  
  const handlePublish = () => {
    setStatus("published");
    setTimeout(() => document.forms[0].requestSubmit(), 0);
  };

  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default ProductFormSubmit;
