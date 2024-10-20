import React, { useEffect, useState } from 'react'
import './Hero.css'; 
import { NavLink } from 'react-router-dom';
import axios from 'axios';
const Hero = () => {
    const [features, setFeatures] = useState([]);
    useEffect(() => {
        const fetchData = async () => {

          try {
            const res = await axios.get('http://localhost:4000/feature');
            setFeatures(res.data);
          } catch (err) {
            console.error('Failed to fetch data', err);
            alert('Failed to load offers. Please try again.');
          }
        };
        fetchData();
      }, []);
    
  return (
    <div>
    <section className="hero">
    <div className="container">
      <div className="hero-content">
        <h1>Simplify Your Contracts with DinAftale</h1>
        <p>Create, share, and sign contracts securely and easily.</p>
        <a href="/signup" className="btn">Get Started</a>
         
      </div>
      <div className="hero-image">
        <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Contract signing" />
      </div>
    </div>
  </section>
  <section id="features" className="features">
      <div className="container">
        <h2>Key Features</h2>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
  )
}

export default Hero