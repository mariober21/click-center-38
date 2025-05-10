
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import ActionButtons from "./product/ActionButtons";
import ProductTabs from "./product/ProductTabs";

interface FilePreview {
  file: File;
  url: string;
}

interface ProductFormProps {
  activeTab?: string;
}

const ProductForm = ({ activeTab: initialTab }: ProductFormProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState(initialTab ? mapExternalTabToInternal(initialTab) : "basic");
  
  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState("BRL");
  const [comparePrice, setComparePrice] = useState("");
  const [productType, setProductType] = useState("curso");
  const [status, setStatus] = useState("draft");
  
  // Media state
  const [images, setImages] = useState<FilePreview[]>([]);
  const [videos, setVideos] = useState<FilePreview[]>([]);
  const [files, setFiles] = useState<FilePreview[]>([]);
  
  // SEO state
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [slug, setSlug] = useState("");
  
  // Pricing options
  const [hasSalePrice, setHasSalePrice] = useState(false);
  const [isSubscription, setIsSubscription] = useState(false);
  const [subscriptionInterval, setSubscriptionInterval] = useState("month");
  
  // File upload handlers
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map(file => ({
        file,
        url: URL.createObjectURL(file)
      }));
      setImages(prev => [...prev, ...newFiles]);
    }
  };
  
  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map(file => ({
        file,
        url: URL.createObjectURL(file)
      }));
      setVideos(prev => [...prev, ...newFiles]);
    }
  };
  
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map(file => ({
        file,
        url: URL.createObjectURL(file)
      }));
      setFiles(prev => [...prev, ...newFiles]);
    }
  };
  
  const removeImage = (index: number) => {
    const newImages = [...images];
    URL.revokeObjectURL(newImages[index].url);
    newImages.splice(index, 1);
    setImages(newImages);
  };
  
  const removeVideo = (index: number) => {
    const newVideos = [...videos];
    URL.revokeObjectURL(newVideos[index].url);
    newVideos.splice(index, 1);
    setVideos(newVideos);
  };
  
  const removeFile = (index: number) => {
    const newFiles = [...files];
    URL.revokeObjectURL(newFiles[index].url);
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };
  
  // Map between parent component's tab values and this component's tab values
  function mapExternalTabToInternal(externalTab: string): string {
    switch(externalTab) {
      case "info": return "basic";
      case "media": return "media";
      case "pricing": return "pricing";
      case "seo": return "seo";
      case "inventory": return "basic"; // Default to basic for inventory
      default: return "basic";
    }
  };
  
  // Form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here's where we would send data to a database
    // Currently just shows a toast message
    console.log("Product data to be saved:", {
      title,
      description,
      price,
      currency,
      comparePrice,
      productType,
      status,
      images: images.length,
      videos: videos.length,
      files: files.length,
      metaTitle,
      metaDescription,
      slug,
      isSubscription,
      subscriptionInterval
    });
    
    toast({
      title: "Produto salvo",
      description: status === "published" 
        ? "Seu produto foi publicado com sucesso." 
        : "Seu produto foi salvo como rascunho.",
    });
    
    navigate("/admin/products");
  };
  
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
    <form onSubmit={handleSubmit}>
      <ActionButtons 
        onBack={() => navigate("/admin/products")}
        onSaveAsDraft={handleSaveAsDraft}
        onPublish={handlePublish}
      />
      
      <ProductTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        // Basic info
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        productType={productType}
        setProductType={setProductType}
        // Media
        images={images}
        videos={videos}
        files={files}
        handleImageUpload={handleImageUpload}
        handleVideoUpload={handleVideoUpload}
        handleFileUpload={handleFileUpload}
        removeImage={removeImage}
        removeVideo={removeVideo}
        removeFile={removeFile}
        // Pricing
        price={price}
        setPrice={setPrice}
        currency={currency}
        setCurrency={setCurrency}
        comparePrice={comparePrice}
        setComparePrice={setComparePrice}
        hasSalePrice={hasSalePrice}
        setHasSalePrice={setHasSalePrice}
        isSubscription={isSubscription}
        setIsSubscription={setIsSubscription}
        subscriptionInterval={subscriptionInterval}
        setSubscriptionInterval={setSubscriptionInterval}
        // SEO
        slug={slug}
        setSlug={setSlug}
        metaTitle={metaTitle}
        setMetaTitle={setMetaTitle}
        metaDescription={metaDescription}
        setMetaDescription={setMetaDescription}
      />
    </form>
  );
};

export default ProductForm;
