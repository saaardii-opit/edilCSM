'use client';

import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null 
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    
    // Report error to analytics in production
    if (process.env.NODE_ENV === 'production' && navigator.onLine) {
      const errorDetails = {
        type: 'react-error-boundary',
        error: {
          message: error.message,
          stack: error.stack,
          name: error.name
        },
        errorInfo: {
          componentStack: errorInfo.componentStack
        },
        url: window.location.href,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
      };

      const blob = new Blob([JSON.stringify(errorDetails)], { type: 'application/json' });
      navigator.sendBeacon('/api/errors', blob);
    }
  }

  handleRetry = () => {
    this.setState({ 
      hasError: false, 
      error: null, 
      errorInfo: null 
    });
  };

  handleReportIssue = () => {
    const issueBody = `
Error: ${this.state.error?.message}
URL: ${window.location.href}
User Agent: ${navigator.userAgent}
Time: ${new Date().toISOString()}

Stack Trace:
${this.state.error?.stack}

Component Stack:
${this.state.errorInfo?.componentStack}
    `.trim();

    const encodedBody = encodeURIComponent(issueBody);
    window.open(`mailto:support@edilcsm.com?subject=Error Report&body=${encodedBody}`);
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <div className="error-content">
            <h2>Something went wrong</h2>
            <p>We apologize for the inconvenience. Please try one of the following:</p>
            
            <div className="error-actions">
              <button 
                onClick={this.handleRetry}
                className="btn primary"
              >
                Try Again
              </button>
              <button 
                onClick={this.handleReportIssue}
                className="btn secondary"
              >
                Report Issue
              </button>
              <a 
                href="/"
                className="btn outline"
              >
                Go to Homepage
              </a>
            </div>

            {process.env.NODE_ENV === 'development' && (
              <details className="error-details">
                <summary>Error Details</summary>
                <pre>{this.state.error?.toString()}</pre>
                <pre>{this.state.errorInfo?.componentStack}</pre>
              </details>
            )}
          </div>

          <style jsx>{`
            .error-container {
              min-height: 60vh;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 2rem;
              text-align: center;
            }

            .error-content {
              max-width: 600px;
              margin: 0 auto;
            }

            .error-content h2 {
              color: var(--secondary-color);
              margin-bottom: 1rem;
            }

            .error-actions {
              display: flex;
              gap: 1rem;
              justify-content: center;
              margin: 2rem 0;
              flex-wrap: wrap;
            }

            .error-details {
              text-align: left;
              margin-top: 2rem;
              padding: 1rem;
              background: var(--background-alt);
              border-radius: var(--border-radius);
            }

            .error-details summary {
              cursor: pointer;
              user-select: none;
              margin-bottom: 1rem;
            }

            .error-details pre {
              white-space: pre-wrap;
              word-break: break-word;
              font-size: 0.875rem;
              line-height: 1.5;
              padding: 1rem;
              background: var(--background-code);
              border-radius: var(--border-radius);
              overflow-x: auto;
            }

            @media (max-width: 768px) {
              .error-actions {
                flex-direction: column;
              }
              
              .error-actions button,
              .error-actions a {
                width: 100%;
              }
            }
          `}</style>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;