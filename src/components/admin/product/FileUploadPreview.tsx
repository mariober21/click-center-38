
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface FilePreviewProps {
  url: string;
  index: number;
  onRemove: (index: number) => void;
  type: "image" | "video" | "file";
  fileName?: string;
  fileSize?: number;
}

const FileUploadPreview = ({ 
  url, 
  index, 
  onRemove, 
  type,
  fileName,
  fileSize
}: FilePreviewProps) => {
  if (type === "image") {
    return (
      <div className="relative group border rounded-md overflow-hidden h-32">
        <img 
          src={url} 
          alt={`Preview ${index}`} 
          className="w-full h-full object-cover"
        />
        <Button 
          variant="destructive" 
          size="icon" 
          className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => onRemove(index)}
          type="button"
        >
          <X size={16} />
        </Button>
      </div>
    );
  }
  
  if (type === "video") {
    return (
      <div className="relative group border rounded-md overflow-hidden h-40">
        <video 
          src={url} 
          controls
          className="w-full h-full object-cover"
        />
        <Button 
          variant="destructive" 
          size="icon" 
          className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => onRemove(index)}
          type="button"
        >
          <X size={16} />
        </Button>
      </div>
    );
  }
  
  return null;
};

export default FileUploadPreview;
