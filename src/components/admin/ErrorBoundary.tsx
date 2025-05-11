
import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/card";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      return (
        <div className="p-6 border rounded-lg bg-red-50 text-red-800">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle size={24} />
            <h2 className="text-lg font-bold">Algo deu errado</h2>
          </div>
          
          <p className="mb-4">
            Ocorreu um erro ao carregar este componente. Por favor, tente recarregar a página.
          </p>
          
          {this.state.error && (
            <pre className="p-3 bg-white bg-opacity-50 rounded text-sm overflow-auto max-h-32 mb-4">
              {this.state.error.toString()}
            </pre>
          )}
          
          <Button 
            onClick={() => {
              this.setState({ hasError: false, error: null });
              window.location.reload();
            }}
            className="flex items-center gap-2"
          >
            <RefreshCw size={16} />
            Recarregar Página
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
