import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ errorInfo });
        // In a real app, you would log this to a service like Sentry
    }

    handleRetry = () => {
        this.setState({ hasError: false, error: null, errorInfo: null });
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                    <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
                        <div className="mb-6 flex justify-center">
                            <div className="h-24 w-24 bg-red-100 rounded-full flex items-center justify-center">
                                <AlertTriangle className="h-12 w-12 text-red-500" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            Something went wrong
                        </h2>
                        <p className="text-gray-600 mb-6">
                            We encountered an unexpected error. Please try again or contact support if the problem persists.
                        </p>

                        {/* Optional: Show error details in dev */}
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <div className="bg-gray-100 p-4 rounded text-left mb-6 overflow-auto text-xs font-mono max-h-32">
                                {this.state.error.toString()}
                            </div>
                        )}

                        <button
                            onClick={this.handleRetry}
                            className="w-full flex items-center justify-center px-4 py-3 bg-primary text-white rounded-md font-semibold hover:bg-opacity-90 transition-colors"
                        >
                            <RefreshCw className="mr-2 h-5 w-5" />
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
