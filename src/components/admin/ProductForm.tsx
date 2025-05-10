
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import ActionButtons from "./product/ActionButtons";
import ProductTabs from "./product/ProductTabs";
import { useProductForm } from "@/hooks/useProductForm";
import ProductFormSubmit from "./product/ProductFormSubmit";

interface ProductFormProps {
  activeTab?: string;
}

const ProductForm = ({ activeTab: initialTab }: ProductFormProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Use our custom hook for all form state and handlers
  const productForm = useProductForm(initialTab);
  
  // Form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here's where we would send data to a database
    // Currently just shows a toast message
    console.log("Product data to be saved:", {
      title: productForm.title,
      description: productForm.description,
      price: productForm.price,
      currency: productForm.currency,
      comparePrice: productForm.comparePrice,
      productType: productForm.productType,
      status: productForm.status,
      images: productForm.images.length,
      videos: productForm.videos.length,
      files: productForm.files.length,
      metaTitle: productForm.metaTitle,
      metaDescription: productForm.metaDescription,
      slug: productForm.slug,
      isSubscription: productForm.isSubscription,
      subscriptionInterval: productForm.subscriptionInterval
    });
    
    toast({
      title: "Produto salvo",
      description: productForm.status === "published" 
        ? "Seu produto foi publicado com sucesso." 
        : "Seu produto foi salvo como rascunho.",
    });
    
    navigate("/admin/products");
  };
  
  return (
    <ProductFormSubmit onSubmit={handleSubmit} setStatus={productForm.setStatus}>
      <ActionButtons 
        onBack={() => navigate("/admin/products")}
        onSaveAsDraft={() => productForm.setStatus("draft")}
        onPublish={() => productForm.setStatus("published")}
      />
      
      <ProductTabs
        activeTab={productForm.activeTab}
        setActiveTab={productForm.setActiveTab}
        // Basic info
        title={productForm.title}
        setTitle={productForm.setTitle}
        description={productForm.description}
        setDescription={productForm.setDescription}
        productType={productForm.productType}
        setProductType={productForm.setProductType}
        // Media
        images={productForm.images}
        videos={productForm.videos}
        files={productForm.files}
        handleImageUpload={productForm.handleImageUpload}
        handleVideoUpload={productForm.handleVideoUpload}
        handleFileUpload={productForm.handleFileUpload}
        removeImage={productForm.removeImage}
        removeVideo={productForm.removeVideo}
        removeFile={productForm.removeFile}
        // Pricing
        price={productForm.price}
        setPrice={productForm.setPrice}
        currency={productForm.currency}
        setCurrency={productForm.setCurrency}
        comparePrice={productForm.comparePrice}
        setComparePrice={productForm.setComparePrice}
        hasSalePrice={productForm.hasSalePrice}
        setHasSalePrice={productForm.setHasSalePrice}
        isSubscription={productForm.isSubscription}
        setIsSubscription={productForm.setIsSubscription}
        subscriptionInterval={productForm.subscriptionInterval}
        setSubscriptionInterval={productForm.setSubscriptionInterval}
        // SEO
        slug={productForm.slug}
        setSlug={productForm.setSlug}
        metaTitle={productForm.metaTitle}
        setMetaTitle={productForm.setMetaTitle}
        metaDescription={productForm.metaDescription}
        setMetaDescription={productForm.setMetaDescription}
      />
    </ProductFormSubmit>
  );
};

export default ProductForm;
