document.addEventListener('DOMContentLoaded', function() {
      const app = document.getElementById('app');

      const header = document.createElement('header');
      header.innerHTML = `
        <h1>Arizona Sunshine: Exterior Estate Management</h1>
        <p>Window Cleaning, Pressure Washing & More!</p>
      `;
      app.appendChild(header);

      const servicesSection = document.createElement('section');
      servicesSection.id = 'services';
      servicesSection.innerHTML = `
        <h2>Our Services</h2>
        <ul>
          <li>Exterior Windows</li>
          <li>Driveways</li>
          <li>Concrete</li>
          <li>Exterior Walls</li>
          <li>Fences, Fixtures & Trash Cans</li>
        </ul>
      `;
      app.appendChild(servicesSection);

      const contactInfo = document.createElement('div');
      contactInfo.id = 'contact-info';
      contactInfo.style.textAlign = 'center'; // Center align the text
      contactInfo.innerHTML = `
        <p>Call us at: <a href="tel:5202613756">520-261-3756</a></p>
      `;
      app.appendChild(contactInfo);

      const footer = document.createElement('footer');
      footer.innerHTML = '<p>&copy; 2023 Arizona Sunshine. All rights reserved.</p>';
      app.appendChild(footer);
    });
