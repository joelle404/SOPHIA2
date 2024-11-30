import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './home.css';
import logo from '../IMAGES/logo.png';
import comb1 from '../IMAGES/comb1.jpg';
import comb2 from '../IMAGES/comb2.jpg';
import honey1 from '../IMAGES/honey1.jpg';
import honey2 from '../IMAGES/honey2.jpg';
import honey3 from '../IMAGES/honey3.jpg';

import combnew1 from '../IMAGES/combnew1.jpg';
const Home = () => {
  const redirectTo = (url) => {
    window.location.href = url;
  };

  return (
    <>
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
              <a className="nav-item nav-link" href="/cart">My Cart</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="topback">
        <img className="logo" src={logo} alt="Logo" />
      </div>

      <div className="container mt-5 mb-5">
        <div className="row c1 gx-2 custom-gap">
          {/* First Carousel */}
          <div className="col-md-6 grid">
            <div id="demo1" className="carousel slide" data-bs-ride="carousel">
              {/* Indicators */}
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#demo1" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#demo1" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo1" data-bs-slide-to="2"></button>
              </div>

              {/* Slideshow */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="slideimage" src={comb1} alt="Honey Comb" Name="d-block" onClick={() => redirectTo('honeycomb.html')} />
                  <div className="carousel-caption">
                    <h3>Honey Comb</h3>
                    <p>100₪/kg</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="slideimage" src={comb2} alt="Honey Comb" Name="d-block" onClick={() => redirectTo('honeycomb.html')} />
                  <div className="carousel-caption">
                    <h3>Honey Comb</h3>
                    <p>100₪/kg</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="slideimage" src={combnew1} alt="Honey Comb" Name="d-block" onClick={() => redirectTo('honeycomb.html')} />
                  <div className="carousel-caption">
                    <h3>Honey Comb</h3>
                    <p>100₪/kg</p>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <button className="carousel-control-prev" type="button" data-bs-target="#demo1" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#demo1" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>

            <div className="linkk">
              <a className="icon-link icon-link-hover" style={{ color: 'black', display: 'inline-block' }} href="honeycomb.html">
                <span style={{ display: 'inline-block' }}>more info</span>
                <svg width="24" height="24" color="black" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle' }}>
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Second Carousel */}
          <div className="col-md-6 grid">
            <div id="demo2" className="carousel slide" data-bs-ride="carousel">
              {/* Indicators */}
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#demo2" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#demo2" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo2" data-bs-slide-to="2"></button>
              </div>

              {/* Slideshow */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="slideimage" src={honey1} alt="Honey" Name="d-block" onClick={() => redirectTo('honey.html')} />
                  <div className="carousel-caption">
                    <h3>Honey</h3>
                    <p>120₪/kg</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="slideimage" src={honey2} alt="Honey" Name="d-block" onClick={() => redirectTo('honey.html')} />
                  <div className="carousel-caption">
                    <h3>Honey</h3>
                    <p>120₪/kg</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="slideimage" src={honey3} alt="Honey" Name="d-block" onClick={() => redirectTo('honey.html')} />
                  <div className="carousel-caption">
                    <h3>Honey</h3>
                    <p>120₪/kg</p>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <button className="carousel-control-prev" type="button" data-bs-target="#demo2" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#demo2" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>

            <div className="linkk">
              <a className="icon-link icon-link-hover" style={{ color: 'black', display: 'inline-block' }} href="honey.html">
                <span style={{ display: 'inline-block' }}>more info</span>
                <svg width="24" height="24" color="black" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle' }}>
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-3">
        <a href="cart.html" className="btn custom-button">
          <span>View More Products in Cart</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3 ml-2" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zm3.14 7.905l9.259-.466.865-4.33H3.89l-.75 4.796zM5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm7 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </a>
      </div>
    </>
  );
};

export default Home;
