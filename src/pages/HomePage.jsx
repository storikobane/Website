import React from 'react';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div className="app">
      <h1 className="animated-header tight-header">
        <span>Stori Kobane</span>
      </h1>

      <main className="main-content">
        <h2 className="book-title">Keep Going</h2>
        <h3 className="book-subtitle subtitle-glow">Raised in Shadows, Chasing the Light</h3>
        <div className="book-stack">
          <img
            src="https://m.media-amazon.com/images/I/71JjlrDJ0bL._SY522_.jpg"
            alt="Keep Going Book Cover"
            className="book-cover"
          />
          <a
            href="https://www.amazon.com/dp/B0F2MXLR8B"
            target="_blank"
            rel="noopener noreferrer"
            className="amazon-button"
          >
            Buy on Amazon
          </a>
          <p className="intro-highlight">
            If you found yourself here, there's a reason.
          </p>

          <div className="signed-copy-section">
            <h3>Want a Signed Copy?</h3>
            <p>Fill out the form and pay securely to order a signed version of the book.</p>
            <Link to="/signedcopy" className="amazon-button glow-button">
               Order Signed Copy
            </Link>

          </div>
        </div>

        <hr className="divider" />
      </main>

      <section className="social-section">
        <a href="https://instagram.com/storikobane" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://x.com/storikobane" target="_blank" rel="noopener noreferrer">X</a>
        <a href="https://youtube.com/@storikobane" target="_blank" rel="noopener noreferrer">YouTube</a>
        <a href="https://facebook.com/storikobane" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://discord.gg/3bkKGkTtWx" target="_blank" rel="noopener noreferrer">Discord</a>
      </section>

      <hr className="divider" />

      <div className="donation-message">
        <p>If you'd like to support me as an artist and author, even the smallest donation can help me continue to create.</p>
      </div>

      <section className="support-section">
        <a href="https://www.buymeacoffee.com/storikobane" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" className="bmc-badge" />
        </a>
        <form action="https://www.paypal.com/donate?business=anthonykennedy517@gmail.com" method="post" target="_blank">
          <button type="submit" className="paypal-button">Donate with PayPal</button>
        </form>
      </section>

      <div className="contact-section">
        <a href="mailto:contact@storikobane.com" className="contact-button">Contact</a>
      </div>
    </div>
  );
}
