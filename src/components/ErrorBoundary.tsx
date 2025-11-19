import React from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error | null;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
    this.reset = this.reset.bind(this);
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: any) {
    // TODO: Hook into logging service here (Sentry, LogRocket, etc.)
    // console.error('ErrorBoundary caught:', error, info);
  }

  reset() {
    this.setState({ hasError: false, error: null });
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return <>{this.props.fallback}</>;

      return (
        <div className="p-6 bg-red-50 border border-red-200 rounded">
          <h3 className="text-lg font-medium text-red-800 mb-2">
            Something went wrong
          </h3>
          <p className="text-sm text-red-700 mb-4">
            An unexpected error occurred while rendering this section.
          </p>
          <div className="flex gap-2">
            <button
              onClick={this.reset}
              className="px-3 py-1 rounded bg-white border text-sm"
            >
              Try again
            </button>
            <button
              onClick={() => window.location.reload()}
              className="px-3 py-1 rounded bg-red-600 text-white text-sm"
            >
              Reload page
            </button>
          </div>
          {this.state.error && (
            <details className="mt-3 text-xs text-red-600">
              <summary>View error</summary>
              <pre className="whitespace-pre-wrap">
                {String(this.state.error)}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
