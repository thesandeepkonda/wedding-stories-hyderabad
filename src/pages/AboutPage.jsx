import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <section className="about-page">
      {/* Hero Banner */}
      <div className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1 className="about-hero-title">About <span>Us</span></h1>
          <p className="about-hero-sub">The storytellers behind the lens</p>
        </div>
      </div>

      <div className="container">
        {/* Our Story */}
        <div className="about-story">
          <span className="about-tag">Our Story</span>
          <h2 className="section-title">Capturing <span>Love</span> Since 2016</h2>
          <div className="story-grid">
            <div className="story-text">
              <p>
                Wedding Stories Hyderabad was born from a simple belief – every love story deserves to be told with honesty, artistry, and heart. What started as a passion for capturing candid moments has grown into one of Hyderabad's most trusted wedding photography studios.
              </p>
              <p>
                Over the past 7+ years, we've had the privilege of documenting over 350 weddings – from intimate gatherings to grand celebrations. Our team blends traditional elegance with a modern, photojournalistic approach, ensuring each frame reflects the unique personality of every couple.
              </p>
              <p>
                We don't just take photos – we create visual poetry that you'll cherish for a lifetime. Every click is guided by emotion, every composition by creativity, and every edit by a commitment to excellence.
              </p>
            </div>
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600" 
                alt="Wedding Stories Hyderabad Team"
                className="story-img"
              />
              <div className="story-badge">
                <span>7+ Years</span>
                <span>350+ Weddings</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="about-mission">
          <div className="mission-card">
            <div className="mission-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To preserve the essence of your love story through authentic, artistic photography that transcends time. We strive to make every couple feel seen, heard, and celebrated.
            </p>
          </div>
          <div className="mission-card">
            <div className="mission-icon">🌟</div>
            <h3>Our Vision</h3>
            <p>
              To be the most cherished wedding photography brand in Hyderabad – known for our warmth, creativity, and unwavering commitment to quality. We envision a world where every couple's love story is told with beauty and truth.
            </p>
          </div>
          <div className="mission-card">
            <div className="mission-icon">❤️</div>
            <h3>Our Values</h3>
            <ul>
              <li><strong>Authenticity</strong> – We capture real moments, not staged poses.</li>
              <li><strong>Artistry</strong> – Every frame is composed with a photographer's eye.</li>
              <li><strong>Empathy</strong> – We treat your wedding as if it were our own.</li>
              <li><strong>Excellence</strong> – We never compromise on quality or care.</li>
            </ul>
          </div>
        </div>

        {/* Team / Behind the Lens */}
        <div className="about-team">
          <span className="about-tag">Behind the Lens</span>
          <h2 className="section-title">The <span>People</span> Behind the Magic</h2>
          <p className="section-subtitle">A team of passionate storytellers dedicated to your special day.</p>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-img-placeholder">📸</div>
              <h4>Arjun & Priya</h4>
              <p>Founders & Lead Photographers</p>
              <span className="team-bio">With over a decade of combined experience, they bring a unique blend of candid storytelling and fine-art aesthetics.</span>
            </div>
            <div className="team-card">
              <div className="team-img-placeholder">🎥</div>
              <h4>Vikram</h4>
              <p>Cinematographer</p>
              <span className="team-bio">Our cinematic maestro – he turns moments into movies that make you laugh, cry, and relive every emotion.</span>
            </div>
            <div className="team-card">
              <div className="team-img-placeholder">✨</div>
              <h4>Meera</h4>
              <p>Creative Director</p>
              <span className="team-bio">The visionary behind our signature style – she ensures every album, every frame, tells a cohesive and beautiful story.</span>
            </div>
          </div>
        </div>

        {/* Timeline / Milestones */}
        <div className="about-timeline">
          <span className="about-tag">Our Journey</span>
          <h2 className="section-title">Milestones <span>&</span> Memories</h2>
          <div className="timeline-grid">
            <div className="timeline-item">
              <div className="timeline-year">2016</div>
              <div className="timeline-content">
                <h4>Founded</h4>
                <p>Started with a camera and a dream – capturing our first wedding.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2018</div>
              <div className="timeline-content">
                <h4>Expanded Team</h4>
                <p>Welcomed our first associate photographer and videographer.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h4>100 Weddings</h4>
                <p>Celebrated our 100th wedding – a milestone that fuelled our passion.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h4>350+ Weddings</h4>
                <p>Trusted by over 350 couples across Hyderabad and beyond.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="about-cta">
          <h3>Ready to tell your story?</h3>
          <button 
            className="btn-primary"
            onClick={() => window.location.href = '/contact'}
          >
            Let's Create Magic
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;