import { useState } from 'react';
import './ResendVerificationPage.css';

function ResendVerificationPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch(`api/resend-verification`, {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' }
      });

      const res = await response.json();

      if (response.ok) {
        setMessage(res.message || 'Verification email sent! Please check your inbox.');
        setIsSuccess(true);
        setEmail('');
      } else {
        setMessage(res.message || res.error || 'Failed to send verification email. Please try again.');
        setIsSuccess(false);
      }
    } catch (error) {
      console.error('Resend verification error:', error);
      setMessage('Failed to send verification email. Please check your connection and try again.');
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="resend-verification-page">
      <div className="resend-verification-container">
        <div className="icon-header">📧</div>
        <h1>Resend Verification Email</h1>
        <p className="subtitle">
          Enter your email address and we'll send you a new verification link.
        </p>
        
        <form className="resend-verification-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
          
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Verification Email'}
          </button>
        </form>

        {message && (
          <div className={`message ${isSuccess ? 'success' : 'error'}`}>
            {message}
          </div>
        )}

        {isSuccess && (
          <div className="success-info">
            <p>✓ Check your email inbox (and spam folder)</p>
            <p>✓ Click the verification link in the email</p>
            <p>✓ You'll be redirected to login after verification</p>
          </div>
        )}

        <div className="back-to-login">
          <a href="/">← Back to Login</a>
        </div>
      </div>
    </div>
  );
}

export default ResendVerificationPage;