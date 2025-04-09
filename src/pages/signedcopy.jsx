import React, { useState } from 'react';
import '../styles/signedcopy.css';

export default function SignedCopy() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    await fetch("https://formspree.io/f/xaneawjg", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setSubmitted(true);
  };

  return (
    <div className="app">
      <h1 className="animated-header tight-header">
        <span>Order Signed Copy</span>
      </h1>

     <main className="main-content">
  {!submitted ? (
    <>
      <p className="shipping-notice">
        Please note: Once your order is received, I’ll purchase the book, have it shipped to me, sign it, and mail it out to you. Delivery can take 4–10 days.
      </p>
      <form className="signed-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email Address" required />
        <textarea name="address" placeholder="Shipping Address" required></textarea>
        <input type="text" name="signTo" placeholder="Who should I sign it to? (Optional)" />
        <textarea name="message" placeholder="Optional message or notes"></textarea>
        <button type="submit" className="amazon-button">Continue</button>
      </form>
    </>

        ) : (
          <div className="confirmation">
            <p>Thank you! To complete your order, please pay using the button below.</p>
            <a
              href="https://buy.stripe.com/28oaHXe1ccTtdck7ss" // Replace with your Stripe payment link
              target="_blank"
              rel="noopener noreferrer"
              className="amazon-button"
            >
              Pay with Stripe
            </a>
            <a
  href="https://www.paypal.com/ncp/payment/84JS48THRZX9J"
  target="_blank"
  rel="noopener noreferrer"
  className="amazon-button"
>
  Pay with PayPal
</a>
          </div>
        )}
      </main>
    </div>
  );
}
