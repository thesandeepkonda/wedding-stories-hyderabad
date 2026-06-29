import React, { useState } from 'react';
import './ServicesPage.css';

const services = [
  {
    id: 1,
    category: "Wedding",
    icon: "💍",
    title: "Wedding Photography",
    teaser: "Full-day coverage from preparation to the final dance.",
    img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600",
    details: {
      description: "We document your entire wedding day with a blend of candid moments, traditional portraits, and creative storytelling.",
      includes: [
        "10+ hours of coverage",
        "Two photographers",
        "High-resolution digital images",
        "Online gallery for sharing",
        "Personalized USB drive"
      ],
      duration: "10-12 hours",
      extra: "Optional pre-wedding consultation included."
    }
  },
  {
    id: 2,
    category: "Pre-Wedding",
    icon: "🌅",
    title: "Pre-Wedding Shoot",
    teaser: "A relaxed, fun session at beautiful outdoor locations.",
    img: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600",
    details: {
      description: "Capture your chemistry and create timeless memories before the big day.",
      includes: [
        "3-4 hour session",
        "Up to 3 outfit changes",
        "100+ edited images",
        "Online gallery",
        "Print release"
      ],
      duration: "3-4 hours",
      extra: "Locations can be customised based on your preference."
    }
  },
  {
    id: 3,
    category: "Reception",
    icon: "✨",
    title: "Reception & Events",
    teaser: "Elegant coverage for receptions and celebrations.",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600",
    details: {
      description: "Elegant coverage for receptions, engagement parties and family celebrations.",
      includes: [
        "6-8 hours of coverage",
        "Two photographers",
        "High-resolution images",
        "Online gallery",
        "Social-media ready files"
      ],
      duration: "6-8 hours",
      extra: "Custom albums and prints available."
    }
  },
  {
    id: 4,
    category: "Cinematic",
    icon: "🎥",
    title: "Cinematic Videography",
    teaser: "Your love story beautifully filmed.",
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600",
    details: {
      description: "Beautiful cinematic wedding films with professional editing and storytelling.",
      includes: [
        "5-7 minute highlight film",
        "Full ceremony edit",
        "Drone footage",
        "Color grading",
        "Digital delivery"
      ],
      duration: "Full event coverage + editing",
      extra: "15-second teaser included."
    }
  },
  {
    id: 5,
    category: "Candid",
    icon: "📷",
    title: "Candid Photography",
    teaser: "Real emotions, naturally captured.",
    img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600",
    details: {
      description: "Natural moments captured without posing, preserving genuine emotions.",
      includes: [
        "8+ hours coverage",
        "Dedicated candid photographer",
        "300+ edited images",
        "Online gallery",
        "Print rights"
      ],
      duration: "8-10 hours",
      extra: "Ideal for natural storytelling."
    }
  },
  {
    id: 6,
    category: "Albums",
    icon: "🖼️",
    title: "Albums & Prints",
    teaser: "Premium handcrafted wedding albums.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
    details: {
      description: "Luxury albums and fine-art prints designed to preserve your memories forever.",
      includes: [
        "Custom album design",
        "Premium leather cover",
        "20 spreads",
        "Canvas prints",
        "Matching USB"
      ],
      duration: "2-3 weeks",
      extra: "Available in multiple sizes."
    }
  },
  {
    id: 7,
    category: "Drone",
    icon: "🚁",
    title: "Drone Photography",
    teaser: "Epic aerial views of your wedding.",
    img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600",
    details: {
      description: "Capture breathtaking aerial photographs and cinematic drone videos.",
      includes: [
        "Drone coverage",
        "4K aerial footage",
        "Venue overview",
        "Group portraits",
        "Highlight clips"
      ],
      duration: "2-3 hours",
      extra: "Weather and venue permissions apply."
    }
  },
  {
    id: 8,
    category: "Bridal",
    icon: "👰",
    title: "Bridal Portraits",
    teaser: "Elegant portraits showcasing every bridal detail.",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600",
    details: {
      description: "A dedicated bridal portrait session highlighting your attire, jewellery and beauty.",
      includes: [
        "2-3 hour session",
        "2 outfit changes",
        "80+ edited images",
        "Online gallery",
        "Print release"
      ],
      duration: "2-3 hours",
      extra: "Can be combined with a pre-wedding shoot."
    }
  }
];
function ServicesPage() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="services-page">
      {/* Hero Banner */}
      <div className="services-hero">
        <div className="services-hero-overlay"></div>
        <div className="services-hero-content">
          <h1 className="services-hero-title">Our <span>Services</span></h1>
          <p className="services-hero-sub">Tailored photography experiences for every love story.</p>
        </div>
      </div>

      <div className="container">
        {/* Intro */}
        <div className="services-intro">
          <span className="services-tag">What We Offer</span>
          <h2 className="section-title">The <span>Wedding Stories Hyderabad</span> Experience</h2>
          <p className="section-subtitle">We believe in capturing moments, not just photos. Every service is crafted with care and artistry.</p>
        </div>

        {/* Services Grid - Accordion style */}
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className={`service-card ${expandedId === service.id ? 'expanded' : ''}`}>
              <div className="service-image-wrapper">
                <img src={service.img} alt={service.title} className="service-img" />
                <div className="service-icon-overlay">{service.icon}</div>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-teaser">{service.teaser}</p>
                <button 
                  className="service-toggle"
                  onClick={() => toggleExpand(service.id)}
                >
                  {expandedId === service.id ? 'Read Less −' : 'Learn More +'}
                </button>
                <div className={`service-details ${expandedId === service.id ? 'open' : ''}`}>
                  <p className="service-desc">{service.details.description}</p>
                  <div className="service-includes">
                    <h4>What's Included</h4>
                    <ul>
                      {service.details.includes.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-meta">
                    <span><strong>Duration:</strong> {service.details.duration}</span>
                    <span><strong>Extras:</strong> {service.details.extra}</span>
                  </div>
                  <button 
                    className="service-btn"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Our Process */}
        <div className="services-process">
          <span className="services-tag">How We Work</span>
          <h2 className="section-title">Our <span>Process</span></h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">01</div>
              <h4>Consultation</h4>
              <p>We start with a conversation – understanding your vision, your story, and what matters most to you. We discuss venues, timelines, and customise a package that fits your needs.</p>
            </div>
            <div className="step">
              <div className="step-number">02</div>
              <h4>Planning</h4>
              <p>We create a detailed shot list and timeline for the day. We share our expertise on lighting, locations, and coordination to ensure everything runs smoothly.</p>
            </div>
            <div className="step">
              <div className="step-number">03</div>
              <h4>Shooting</h4>
              <p>On your big day, we work discreetly and professionally – capturing every moment, from the grand to the intimate. We blend into your celebration while documenting its essence.</p>
            </div>
            <div className="step">
              <div className="step-number">04</div>
              <h4>Delivery</h4>
              <p>Within 4‑6 weeks, you receive a curated gallery of high‑resolution images, a cinematic film (if applicable), and your custom album – ready to cherish forever.</p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="services-testimonial">
          <div className="testimonial-quote">
            <span className="quote-icon">“</span>
            <p>Wedding Stories Hyderabad didn't just photograph our wedding – they told our story. Every time we look at our album, we relive the magic. Their attention to detail and warmth made us feel so comfortable.</p>
            <span className="quote-author">— Priya & Arjun</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;