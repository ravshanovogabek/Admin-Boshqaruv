import React from 'react';
import './Home.css';
// Importing background image
import featureIcon1 from '../../assets/service.png'; // Importing icons for features
import featureIcon2 from '../../assets/tech.png'; 
import featureIcon3 from '../../assets/exp.png'; 
const Home = () => {
  return (
    <div className="home">
      
        <div className="welcome-card">
        <h2>🎉 Og'abek Ravshanov Welcome to Our Tech Dashboard!</h2>
        <p>Your health, our priority. Stay updated with our latest stats.</p>
        <div className="achievement">
          <h3>$48.9k</h3>
          <p>Monthly Revenue</p>
        </div>
      </div>
      

      <section className="features">
        <div className="feature-card">
          <img src={featureIcon1} alt="24/7 Service Icon" className="feature-icon" />
          <h3>24/7 Service</h3>
          <p>Our medical team is available round the clock for emergencies.</p>
        </div>
        <div className="feature-card">
          <img src={featureIcon2} alt="Advanced Technology Icon" className="feature-icon" />
          <h3>Advanced Technology</h3>
          <p>Equipped with state-of-the-art equipment for accurate diagnosis.</p>
        </div>
        <div className="feature-card">
          <img src={featureIcon3} alt="Experienced Doctors Icon" className="feature-icon" />
          <h3>Experienced Doctors</h3>
          <p>Our team comprises highly qualified and experienced professionals.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
