// Inject CSS
const style = `
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #fdf6e3;
    color: #333;
  }

  header {
    text-align: center;
    padding: 60px 20px;
    opacity: 0;
    animation: fadeIn 2s ease-in forwards;
  }

  header h1 {
    font-size: 2.5rem;
    margin: 0;
  }

  header h1 span {
    display: block;
    font-size: 1.2rem;
    font-weight: normal;
    margin-top: 4px;
    color: #555;
  }

  .hero-img {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    display: block;
  }

  .welcome, .story {
    padding: 40px 20px;
    max-width: 800px;
    margin: auto;
    text-align: center;
    line-height: 1.6;
  }

  .story {
    background-color: #fff3dc;
    margin-top: 40px;
  }

  .story-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    text-align: left;
  }

  .story-content > div {
    flex: 1 1 300px;
    margin: 0;
  }

  .story-img {
    max-width: 350px;
    width: 100%;
    height: auto;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  }

  footer {
    text-align: center;
    padding: 30px 20px;
    background-color: #e0d8c3;
    margin-top: 60px;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;
const styleEl = document.createElement('style');
styleEl.textContent = style;
document.head.appendChild(styleEl);

// Inject HTML
const app = document.getElementById('app');
app.innerHTML = `
  <header>
    <h1>
      Arizona Sunshine
      <span>Exterior Estate Management</span>
    </h1>
  </header>

  <img class="hero-img" src="house.jpeg" alt="House exterior" />

  <section class="welcome">
    <h2>Welcome to Arizona Sunshine: Exterior Estate Management!</h2>
    <p>
      We specialize in precision exterior cleaning services that enhance the beauty and longevity of your property.
      From sparkling windows to immaculate driveways and walkways, we take care of every detail — including fences,
      fixtures, and trash cans. Let's keep your home's exterior looking its best all year round!
    </p>
  </section>

  <section class="story">
    <h2>Our Story</h2>
    <div class="story-content">
      <div>
        <p>
          At Arizona Sunshine, we pride ourselves on Christian-owned values, providing top-quality cleaning services.
          Our mission is to lead with excellence and deliver unforgettable experiences.
        </p>
        <p>
          With a focus on capturing leads through exceptional service, we ensure your estate shines.
          Every project reflects our commitment to perfection and customer satisfaction.
        </p>
      </div>
      <img class="story-img" src="house2.jpeg" alt="House 2 exterior" />
    </div>
  </section>

  <footer>
    <strong>Arizona Sunshine: Exterior Estate Management</strong><br />
    (520) 261-3756
  </footer>
`;
