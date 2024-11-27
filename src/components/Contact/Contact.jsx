import React from 'react';
import './Contact.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import profilePic from '../../assets/bio.jpg'; // Update with the correct image path

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Biography Section */}
      <div className="bio-section">
        <div className="bio-image">
          <img src={profilePic} alt="Dr. Og'abek Ravshanov Ulug'bekovich" />
        </div>
        <div className="bio-text">
          <h2>Dr. Og'abek Ravshanov Ulug'bekovich</h2>
          <p>
            Dr. Og'abek Ravshanov is a distinguished physician specializing in
            cardiology with over 15 years of experience. His dedication to
            patient care, groundbreaking research, and innovative treatment
            methods have earned him recognition in the medical community.
          </p>
          <a href="#contact-details">Learn More</a>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="social-media-section">
        <h3>Connect with Dr. Og'abek</h3>
        <div className="social-media-cards">
          <a href="https://facebook.com" className="social-card facebook">
            <FaFacebook />
            Facebook
          </a>
          <a href="https://twitter.com" className="social-card twitter">
            <FaTwitter />
            Twitter
          </a>
          <a href="https://linkedin.com" className="social-card linkedin">
            <FaLinkedin />
            LinkedIn
          </a>
          <a href="https://instagram.com" className="social-card instagram">
            <FaInstagram />
            Instagram
          </a>
        </div>
      </div>

      {/* Contact Details */}
      <div className="contact-details" id="contact-details">
        <h3>Contact Details</h3>
        <p>
          <strong>Phone:</strong> +998 90 123 4567
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:ogabek.ravshanov@clinic.com">
            ogabek.ravshanov@clinic.com
          </a>
        </p>
        <p>
          <strong>Address:</strong> 123 Healthcare Lane, Tashkent, Uzbekistan
        </p>
      </div>
    </div>
  );
};

export default Contact;
