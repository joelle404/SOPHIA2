import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './home.css';

const Home = () => {
  const redirectTo = (url) => {
    window.location.href = url;
  };

  useEffect(() => {
    const bee = document.getElementById('bee');

    if (bee) {
      const randomPosition = () => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        return { x, y };
      };

      const moveBee = () => {
        const { x, y } = randomPosition();
        bee.style.transition = 'transform 2s ease-in-out';
        bee.style.transform = `translate(${x}px, ${y}px)`;
      };

      const interval = setInterval(moveBee, 2000);

      // Cleanup interval on component unmount
      return () => clearInterval(interval);
    }
  }, []); // Runs only once when the component mounts

  return (
    <>
      <div id="bee"></div>
      <div id="bee2"></div>
      <div id="bee3"></div>


      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
          <a className="navbar-brand" href="/">Sophia</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
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
<div className='sophia'></div>
  
    </>
  );
};

export default Home;
