import React from 'react';

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
            📘 Preview & Buy on Amazon
          </a>
        </div>

        <div className="book-intro">
  <p className="intro-highlight">
    If you found yourself here, there's a reason.
  </p>
  <p className="book-description new-font">
    Being held at knifepoint by a family member was the breaking point.<br /><br />
    I packed one suitcase, had zero dollars to my name, and jumped headfirst into a toxic relationship with a girl 1,500 miles away from everything I knew.<br /><br />
    This is the story of what happens next.<br />
    Of chasing healing while still bleeding.<br />
    Of learning to navigate life without a map, family, or foundation.<br /><br />
    Who do you call when you have no one at all?<br />
    <em>Keep Going: Raised in Shadows, Chasing the Light</em> is a memoir for anyone who's ever felt alone in the dark—and needed a reason to keep moving forward.
  </p>
</div>
        <hr className="divider" />
      </main>

            <section className="social-section">
        <a href="https://instagram.com/storikobane" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://x.com/storikobane" target="_blank" rel="noopener noreferrer">X</a>
        <a href="https://youtube.com/@storikobane" target="_blank" rel="noopener noreferrer">YouTube</a>
        <a href="https://facebook.com/storikobane" target="_blank" rel="noopener noreferrer">Facebook</a>
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
