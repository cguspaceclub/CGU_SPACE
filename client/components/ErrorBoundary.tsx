import React from 'react';
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-10 h-10 text-red-400" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-white/70 mb-6">
                We're sorry, but something unexpected happened. Our team has been notified.
              </p>
            </div>

            <div className="space-y-4">
              <Button
                onClick={() => window.location.reload()}
                className="w-full bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-light-orange hover:to-brand-dark-red text-white"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Reload Page
              </Button>
              
              <Link to="/">
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Go to Home
                </Button>
              </Link>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-white/60 hover:text-white">
                  Error Details (Development)
                </summary>
                <div className="mt-2 p-4 bg-white/5 rounded-lg text-xs font-mono text-white/80 overflow-auto">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.toString()}
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Stack:</strong>
                      <pre className="mt-1 whitespace-pre-wrap">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
