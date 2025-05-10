
import { BarChart, Mail, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface MarketingNavigationProps {
  activePath: string;
}

const MarketingNavigation = ({ activePath }: MarketingNavigationProps) => {
  // Function to check if a path is active
  const isActive = (path: string) => activePath === path;

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Link to="/admin/marketing">
        <Button 
          variant={isActive("/admin/marketing") ? "default" : "outline"}
          className="gap-2"
        >
          <TrendingUp size={16} />
          <span>Visão Geral</span>
        </Button>
      </Link>
      <Link to="/admin/marketing/campaigns">
        <Button 
          variant={isActive("/admin/marketing/campaigns") ? "default" : "outline"}
          className="gap-2"
        >
          <BarChart size={16} />
          <span>Campanhas</span>
        </Button>
      </Link>
      <Link to="/admin/marketing/email">
        <Button 
          variant={isActive("/admin/marketing/email") ? "default" : "outline"}
          className="gap-2"
        >
          <Mail size={16} />
          <span>Email Marketing</span>
        </Button>
      </Link>
      <Link to="/admin/marketing/analytics">
        <Button 
          variant={isActive("/admin/marketing/analytics") ? "default" : "outline"}
          className="gap-2"
        >
          <TrendingUp size={16} />
          <span>Analytics</span>
        </Button>
      </Link>
    </div>
  );
};

export default MarketingNavigation;
