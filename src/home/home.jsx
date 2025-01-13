import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './home.css';

const Home = () => {
  const redirectTo = (url) => {
    window.location.href = url;
  };

  useEffect(() => {
    // Testimonials Slider
    const testimonials = document.querySelector('.testimonial-slider');
    let scrollPosition = 0;
    const sliderInterval = setInterval(() => {
      if (testimonials) {
        scrollPosition += 320; // Adjust for the testimonial card width
        if (scrollPosition >= testimonials.scrollWidth) {
          scrollPosition = 0; // Reset to the beginning
        }
        testimonials.scrollTo({
          left: scrollPosition,
          behavior: 'smooth',
        });
      }
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(sliderInterval); // Cleanup interval
  }, []);

  useEffect(() => {
    // Bee Animation
    const bees = ['bee', 'bee2', 'bee3'].map((id) => document.getElementById(id));

    const randomPosition = () => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      return { x, y };
    };

    const moveBee = (bee) => {
      if (bee) {
        const { x, y } = randomPosition();
        bee.style.transition = 'transform 2s ease-in-out';
        bee.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    const beeInterval = setInterval(() => {
      bees.forEach(moveBee);
    }, 2000);

    return () => clearInterval(beeInterval); // Cleanup interval
  }, []);

  return (
    <>
      {/* Bees Animation */}
      <div id="bee" className="bee"></div>
      <div id="bee2" className="bee"></div>
      <div id="bee3" className="bee"></div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
          <a className="navbar-brand" href="/">Sophia</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <a className="nav-item nav-link active" href="/">Home</a>
              <a className="nav-item nav-link" href="/ourstory">Our Story</a>
              <a className="nav-item nav-link" href="/cart">Cart</a>
            </div>
          </div>
        </div>
        <div>
          <button className="lang">ENG</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="sophia"></div>
      <div className="imghon">
        <div className="honeyimg"></div>
        <h5>Pure, Organic, and Sustainably Harvested Honey Delivered Fresh to You!</h5>
      </div>

      {/* Why Choose Us */}
      <div className="why">
        <h3>Why Choose Us?</h3>
        <p>
          We are passionate about delivering honey in its purest form. Our mission is to bring you natural, unprocessed
          honey while supporting sustainable beekeeping practices that benefit the environment and local communities.
        </p>
      </div>



      <section id="products" class="product-section">
  <div class="container">
    <h2>Our Honey Products</h2>
    <div class="product-grid">
      <div class="product-item">
     
        <h3>Wildflower Honey</h3>
        <p>Pure and natural honey harvested from wildflowers.</p>
        <button class="cta-button">Buy Now</button>
      </div>
      <div class="product-item">
        <h3>Honeycomb</h3>
        <p>Fresh and delicious honeycomb, perfect for snacking.</p>
        <button class="cta-button">Buy Now</button>
      </div>
      <div class="product-item">
        <h3>Lavender Honey</h3>
        <p>Infused with lavender for a soothing, floral flavor.</p>
        <button class="cta-button">Buy Now</button>
      </div>
      <div class="product-item">
        <h3>Clover Honey</h3>
        <p>Light and sweet honey made from clover blossoms.</p>
        <button class="cta-button">Buy Now</button>
      </div>
      <div class="product-item">
        <h3>Honey Gift Set</h3>
        <p>A beautiful gift set of our best-selling honeys.</p>
        <button class="cta-button">Buy Now</button>
      </div>
      <div class="product-item">
        <h3>Creamed Honey</h3>
        <p>Smooth and creamy honey for easy spreading.</p>
        <button class="cta-button">Buy Now</button>
      </div>
    </div>
  </div>
</section>


<h1>j</h1>




      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <h2>Hear From Our Happy Customers</h2>
          <div className="testimonial-slider">
            <div className="testimonial">
              <p>“I've never tasted honey this fresh and flavorful before! Knowing it's sustainably sourced makes it even better.”</p>
              <span>- Jane Doe</span>
            </div>
            <div className="testimonial">
              <p>“Their lavender-infused honey is a game changer for my tea rituals!”</p>
              <span>- John Smith</span>
            </div>
            <div className="testimonial">
              <p>“Excellent service and even better honey! Highly recommend.”</p>
              <span>- Emily Johnson</span>
            </div>
         
            <div className="testimonial">
  <p>“The wildflower honey is absolutely divine! It has become a staple in my morning tea routine.”</p>
  <span>- Olivia Brown</span>
</div>
<div className="testimonial">
  <p>“I bought the honey gift set for my friend’s birthday, and she loved it. Such a thoughtful and tasty present!”</p>
  <span>- Liam Johnson</span>
</div>
<div className="testimonial">
  <p>“The customer service is exceptional. They helped me choose the perfect honey for my baking needs.”</p>
  <span>- Emma Wilson</span>
</div>
<div className="testimonial">
  <p>“The lavender-infused honey is a game changer. It's so calming and pairs perfectly with herbal teas.”</p>
  <span>- Noah Davis</span>
</div>
<div className="testimonial">
  <p>“I’m amazed by the quality and freshness of the honey. Knowing it’s sustainably sourced makes it even better!”</p>
  <span>- Ava Martinez</span>
</div>
<div className="testimonial">
  <p>“The website is so easy to navigate, and delivery was faster than I expected. Fantastic experience!”</p>
  <span>- William Garcia</span>
</div>
<div className="testimonial">
  <p>“I appreciate how transparent this brand is about their sustainable practices. It’s honey I can feel good about buying.”</p>
  <span>- Isabella Rodriguez</span>
</div>
          </div>
      
      </div>
      </section>
    </>
  );
};

export default Home;
