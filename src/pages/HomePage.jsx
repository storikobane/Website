import React from 'react';

export default function Homepage() {
  return (
    <div className="app">
      <h1 className="animated-header">
        <span>Stori Kobane</span>
      </h1>

      <main className="main-content">
        <h2 className="book-title">Keep Going</h2>
        <h3 className="book-subtitle">Raised in Shadows, Chasing the Light</h3>
       <img
            src="https://m.media-amazon.com/images/I/41eD8QivAOL._SY445_SX342_.jpg"
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

        <p className="book-description updated-font">
          If you found yourself here, there's a reason.<br /><br />
          A brutally honest, introspective memoir. From being at knifepoint in his own home to 1 suitcase, $0 and 1500 miles away in the same week. We follow Stori through his journey in a toxic relationship with a girl and no option to go back "home." It shows how mental health issues can be deep rooted but need to be addressed in order to heal.
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
