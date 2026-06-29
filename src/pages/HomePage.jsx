import React, { useState, useEffect } from 'react';
import './HomePage.css';

const recentWeddings = [
  { id: 1, img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800' },
  { id: 2, img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800' },
  { id: 3, img: 'https://images.unsplash.com/photo-1511798616182-93d6c4e7e3e3?w=800' },
  { id: 4, img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800' },
  { id: 5, img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800' },
  { id: 6, img: 'https://images.unsplash.com/photo-1511798616182-93d6c4e7e3e3?w=800' },
];

const testimonials = [
  {
    id: 1,
    name: 'Priya & Arjun',
    text: 'Wedding Stories Hyderabadcaptured every moment of our big day with such artistry. The photos are breathtaking – we relive our wedding every time we look at them!',
    rating: '★★★★★',
  },
  {
    id: 2,
    name: 'Sneha & Vikram',
    text: 'Professional, creative, and so easy to work with. They made us feel comfortable in front of the camera and the results were beyond our expectations.',
    rating: '★★★★★',
  },
  {
    id: 3,
    name: 'Ananya & Karan',
    text: 'From the pre‑wedding shoot to the reception, they were with us every step of the way. The candid shots are our favourites – so natural and full of emotion.',
    rating: '★★★★★',
  },
];

const whyChoose = [
  { icon: '📸', title: '7+ Years Expertise', desc: 'Over 350 weddings captured with precision and heart.' },
  { icon: '🎯', title: 'Candid Storytelling', desc: 'We capture real emotions, not just posed portraits.' },
  { icon: '🎨', title: 'Artistic Vision', desc: 'Every frame is composed with a photographer\'s eye for beauty.' },
  { icon: '❤️', title: 'Personalised Service', desc: 'We treat your wedding as if it were our own.' },
];

function HomePage() {
  const [selectedImage, setSelectedImage] = useState(null); // lightbox state

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-up');
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const openLightbox = (img) => setSelectedImage(img);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="home-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <div className="hero-badge">
            <span>🏆</span> Trusted by 350+ Couples
          </div>
          <h1 className="hero-title">
            Capturing <span>Love</span> Stories<br />
            in Hyderabad
          </h1>
          <p className="hero-desc">
            WWedding Stories Hyderabad – where every smile, tear, and laugh<br />
            becomes a timeless memory. We craft visual poetry for your big day.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => window.location.href = '/contact'}>
              Book Your Date
            </button>
            <button className="btn-secondary" onClick={() => window.location.href = '/gallery'}>
              View Gallery
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat"><span className="stat-number">350+</span><span className="stat-label">Weddings Shot</span></div>
            <div className="stat"><span className="stat-number">4.9</span><span className="stat-label">Google Rating</span></div>
            <div className="stat"><span className="stat-number">7+</span><span className="stat-label">Years Expertise</span></div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="why-choose">
        <div className="container">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">The <span>Wedding Stories Hyderabad</span> Difference</h2>
          <p className="section-subtitle">We don't just take photos – we tell your love story.</p>
          <div className="why-grid">
            {whyChoose.map((item, idx) => (
              <div key={idx} className="why-card animate-on-scroll">
                <div className="why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RECENT WEDDINGS – BIG & CLICKABLE ===== */}
      <section className="home-gallery">
        <div className="container">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Latest <span>Weddings</span></h2>
          <p className="section-subtitle">A glimpse of our most recent love stories.</p>
          <div className="home-gallery-grid">
            {recentWeddings.map((item) => (
              <div
                key={item.id}
                className="home-gallery-item animate-on-scroll"
                onClick={() => openLightbox(item.img)}
              >
                <img src={item.img} alt="Wedding" className="home-gallery-img" />
                <div className="gallery-overlay">
                  <span>View Story</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button className="btn-primary" onClick={() => window.location.href = '/gallery'}>
              Explore Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* ===== YOUTUBE VIDEOS ===== */}
      <section className="youtube-section">
        <div className="container">
          <span className="section-tag">Watch Our Work</span>
          <h2 className="section-title">Cinematic <span>Wedding Films</span></h2>
          <p className="section-subtitle">Experience the emotion and beauty of real weddings through our lens.</p>
          <div className="youtube-grid">
            <div className="youtube-item">
              <iframe
                src="https://www.youtube.com/embed/KJwDhHFMicc"
                title="Wedding Film 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="youtube-item">
              <iframe
                src="https://www.youtube.com/embed/KJwDhHFMicc"
                title="Wedding Film 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="youtube-item">
              <iframe
                src="https://www.youtube.com/embed/KJwDhHFMicc"
                title="Wedding Film 3"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials">
        <div className="container">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">What Our <span>Couples</span> Say</h2>
          <p className="section-subtitle">Real words from real love stories.</p>
          <div className="testimonial-grid">
            {testimonials.map((t) => (
              <div key={t.id} className="testimonial-card animate-on-scroll">
                <div className="testimonial-rating">{t.rating}</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LIGHTBOX ===== */}
      {selectedImage && (
        <div className="home-lightbox" onClick={closeLightbox}>
          <div className="home-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="home-lightbox-close" onClick={closeLightbox}>✕</button>
            <img src={selectedImage} alt="Wedding full view" />
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;