
import { Calendar } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex items-center gap-2">
        <Calendar size={16} className="text-muted-foreground" />
        <span className="text-sm text-muted-foreground">
          {new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </span>
      </div>
    </div>
  );
};

export default DashboardHeader;
