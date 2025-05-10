
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-10 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ClickCenter</h3>
            <p className="text-gray-600 mb-4">
              Crie, gerencie e venda seus cursos com facilidade. Nossa plataforma oferece todas as ferramentas necessárias para seu sucesso como educador online.
            </p>
            <p className="text-gray-600">
              Criado por Mário Bernardo e Rosa Bernardo
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary">Início</Link></li>
              <li><Link to="/courses" className="text-gray-600 hover:text-primary">Cursos</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-primary">Para Professores</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-primary">Sobre Nós</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-600 hover:text-primary">Centro de Ajuda</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-primary">Contato</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-primary">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-600 hover:text-primary">Termos de Uso</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-primary">Política de Privacidade</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-primary">Cookies</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} ClickCenter. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
