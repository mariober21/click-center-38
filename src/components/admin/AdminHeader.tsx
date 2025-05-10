
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AdminHeader = () => {
  const navigate = useNavigate();
  
  return (
    <header className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate("/")} className="hover:bg-primary-dark p-2 rounded-full">
            <ArrowLeft size={20} />
          </button>
          <span className="text-xl font-bold">ClickCenter</span>
          <span className="bg-white text-primary text-xs font-bold px-2 py-1 rounded">ADMIN</span>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
