import React from 'react'
import './Feauter.css'; 
const Feauter = () => {
    const features = [
        { title: 'Contract Templates', description: 'Access a wide range of standardized contract templates.' },
        { title: 'Custom Contracts', description: 'Design and create custom contracts from scratch.' },
        { title: 'Sharing and Collaboration', description: 'Easily share contracts and collaborate with other parties.' },
        { title: 'Secure Signing', description: 'Approve and sign contracts securely, including MitID integration.' },
        { title: 'Secure Storage', description: 'All contracts are securely stored and easily accessible.' },
        { title: 'User-Friendly Interface', description: 'Navigate the app with ease while ensuring top-notch security.' },
      ];
    
  return (
    <div>
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

export default Feauter
