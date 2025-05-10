
import AdminLayout from "@/components/admin/AdminLayout";
import ProductForm from "@/components/admin/ProductForm";

const AdminAddProduct = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Adicionar Novo Produto</h1>
        <ProductForm />
      </div>
    </AdminLayout>
  );
};

export default AdminAddProduct;
