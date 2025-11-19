import React from "react";

const GlobalErrorFallback = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="max-w-xl text-center border rounded-lg p-8 bg-white/95">
        <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
        <p className="text-sm text-muted-foreground mb-4">
          We encountered an unexpected error. Please try reloading the page or
          contact support if the problem persists.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 rounded bg-teal-500 text-white"
          >
            Reload page
          </button>
          <a
            href="mailto:support@example.com"
            className="px-4 py-2 rounded border"
          >
            Report issue
          </a>
        </div>
      </div>
    </div>
  );
};

export default GlobalErrorFallback;
