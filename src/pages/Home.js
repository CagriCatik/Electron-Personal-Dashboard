// src/pages/Home.js
import React from "react";
import "../Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Our Site!</h1>
        <p>
          Discover the best tools and resources to empower your projects and
          boost your productivity.
        </p>
        <button className="hero-button">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Intuitive Design</h3>
            <p>
              Our user-friendly interface makes it simple to navigate and
              manage your projects.
            </p>
          </div>
          <div className="feature-card">
            <h3>Responsive Layout</h3>
            <p>
              Enjoy a seamless experience on any device—mobile, tablet, or
              desktop.
            </p>
          </div>
          <div className="feature-card">
            <h3>Robust Performance</h3>
            <p>
              Built to handle even the most demanding tasks with speed and
              reliability.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          We are dedicated to providing high-quality solutions that make your
          work easier. Our team is passionate about technology and committed
          to excellence. Join us and be part of our community!
        </p>
      </section>
    </div>
  );
}

export default Home;
