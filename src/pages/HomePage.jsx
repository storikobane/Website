import React from 'react';

export default function Homepage() {
  return (
    <div className="app">
            <h1 className="animated-header">
        <span>Stori Kobane</span>
      </h1>

      <main className="main-content">
        <a
          href="https://www.amazon.com/dp/B0F2MXLR8B"
          target="_blank"
          rel="noopener noreferrer"
          className="amazon-button"
        >
          📘 Preview & Buy on Amazon
        </a>
        <p className="book-description">
          Keep Going: Raised in Shadows, Chasing the Light — A raw and real memoir about finding hope in the darkest places.
        </p>
      </main>

      <hr className="divider" />

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
