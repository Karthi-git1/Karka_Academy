import React from 'react';
import { Link } from 'react-router-dom';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          style={{
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '3rem 1.5rem',
          }}
        >
          <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>⚠️</div>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary-dark)' }}>
            Something went wrong
          </h2>
          <p style={{ color: 'var(--color-muted)', maxWidth: '480px', margin: '0.75rem auto 1.75rem' }}>
            We encountered an unexpected issue while rendering this section. You can refresh the page or return to the home page.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              type="button"
              onClick={this.handleReload}
              className="btn btn-primary"
            >
              Refresh Page ↻
            </button>
            <Link to="/" className="btn btn-secondary">
              Back to Home
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

