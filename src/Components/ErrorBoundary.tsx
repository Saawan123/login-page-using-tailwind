import { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode; // Define the type for children props
}

interface ErrorBoundaryState {
  hasError: boolean; // Define the type for state
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    // Update the state so the next render will show the fallback UI.
    return { hasError: true };
  }

  refreshPage = (): void => {
    window.location.reload();
  };

  loginPage = (): void => {
    localStorage.clear();
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="w-100 vh-100 text-center d-flex flex-column justify-content-center align-items-center">
          <h2>Something went wrong.</h2>
          <p>Please refresh the page to try again.</p>
          <div className="px-1">
            <button onClick={this.refreshPage} className="btn my-1">
              Refresh
            </button>
            <button onClick={this.loginPage} className="btn">
              Go back to login Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
