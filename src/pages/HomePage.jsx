import React from 'react';

export default function Homepage() {
  return (
    <div className="app">
      <h1 className="animated-header tight-header">
        <span>Stori Kobane</span>
      </h1>

      <main className="main-content">
        <h2 className="book-title">Keep Going</h2>
        <h3 className="book-subtitle">Raised in Shadows, Chasing the Light</h3>
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
            📘 Preview & Buy on Amazon
          </a>
        </div>

        <p className="book-description updated-font">
          If you found yourself here, it's not by accident.<br /><br />
          "Keep Going" is a raw, honest look at trauma, escape, and rebuilding. From a violent home to nowhere to return, Stori shares what it means to survive, reflect, and grow. It's about facing the darkness—and choosing to heal anyway.
        </p>
      </main>

            <section className="social-section">
        <a href="https://instagram.com/storikobane" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://x.com/storikobane" target="_blank" rel="noopener noreferrer">X</a>
        <a href="https://youtube.com/@storikobane" target="_blank" rel="noopener noreferrer">YouTube</a>
        <a href="https://facebook.com/storikobane" target="_blank" rel="noopener noreferrer">Facebook</a>
      </section>

      <hr className="divider" />

      <section className="support-section">
        <a href="https://www.buymeacoffee.com/storikobane" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" className="bmc-badge" />
        </a>
        <form action="https://www.paypal.com/donate?business=anthonykennedy517@gmail.com" method="post" target="_blank">
          <button type="submit" className="paypal-button">Donate with PayPal</button>
        </form>
      </section>
    </div>
  );
}
