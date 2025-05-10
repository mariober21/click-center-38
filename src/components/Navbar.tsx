
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if the user is logged in by retrieving their name from localStorage
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
      
      // Check if user is admin (Mário or Rosa Bernardo)
      if (storedUserName === "Mário Bernardo" || storedUserName === "Rosa Bernardo") {
        setIsAdmin(true);
      }
    }
  }, []);

  return (
    <nav className="bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">ClickCenter</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/members" className="text-gray-600 hover:text-primary transition-colors">
            Área de membros
          </Link>
          <Link to="/whats-included" className="text-gray-600 hover:text-primary transition-colors">
            O que está incluído?
          </Link>
          <Link to="/academy" className="text-gray-600 hover:text-primary transition-colors">
            Academia
          </Link>
          <Link to="/resources" className="text-gray-600 hover:text-primary transition-colors">
            Recursos
          </Link>
          <Link to="/marketplace" className="text-gray-600 hover:text-primary transition-colors">
            Marketplace
          </Link>
          <Link to="/help-center" className="text-gray-600 hover:text-primary transition-colors">
            Central de Ajuda
          </Link>
          
          {userName ? (
            <div className="flex items-center gap-2">
              {isAdmin && (
                <Link to="/admin">
                  <Button variant="outline" className="mr-2 flex items-center gap-1">
                    <Shield size={16} />
                    Admin
                  </Button>
                </Link>
              )}
              <Link to="/dashboard">
                <Button variant="outline" className="mr-2">
                  Dashboard
                </Button>
              </Link>
              <div className="text-primary font-medium">
                Olá, {userName}
              </div>
            </div>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" className="mr-2">
                  Entrar
                </Button>
              </Link>
              <Link to="/login">
                <Button className="flex items-center gap-1">
                  Cadastrar <ArrowRight size={16} />
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 shadow-lg">
          <div className="flex flex-col space-y-3">
            <Link to="/members" className="text-gray-600 hover:text-primary transition-colors py-2">
              Área de membros
            </Link>
            <Link to="/whats-included" className="text-gray-600 hover:text-primary transition-colors py-2">
              O que está incluído?
            </Link>
            <Link to="/academy" className="text-gray-600 hover:text-primary transition-colors py-2">
              Academia
            </Link>
            <Link to="/resources" className="text-gray-600 hover:text-primary transition-colors py-2">
              Recursos
            </Link>
            <Link to="/marketplace" className="text-gray-600 hover:text-primary transition-colors py-2">
              Marketplace
            </Link>
            <Link to="/help-center" className="text-gray-600 hover:text-primary transition-colors py-2">
              Central de Ajuda
            </Link>
            
            {userName ? (
              <>
                <div className="text-primary font-medium py-2">
                  Olá, {userName}
                </div>
                {isAdmin && (
                  <Link to="/admin">
                    <Button className="w-full flex items-center justify-center gap-1 mb-2">
                      <Shield size={16} />
                      Área Admin
                    </Button>
                  </Link>
                )}
                <Link to="/dashboard">
                  <Button className="w-full">
                    Dashboard
                  </Button>
                </Link>
              </>
            ) : (
              <div className="flex flex-col space-y-2 pt-3">
                <Link to="/login">
                  <Button variant="outline" className="w-full">
                    Entrar
                  </Button>
                </Link>
                <Link to="/login">
                  <Button className="w-full flex items-center justify-center gap-1">
                    Cadastrar <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
