import React, { useState } from 'react';
import './GalleryPage.css';

// Use larger images (w=800 or w=1200 for better quality)
const galleryData = [
  {
    id: 1,
    category: "wedding",
    img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800",
    title: "Sacred Wedding Ceremony",
  },
  {
    id: 2,
    category: "prewedding",
    img: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800",
    title: "Romantic Sunset",
  },
  {
    id: 3,
    category: "reception",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800",
    title: "Reception Celebration",
  },
  {
    id: 4,
    category: "mehendi",
    img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800",
    title: "Beautiful Mehendi",
  },
  {
    id: 5,
    category: "candid",
    img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800",
    title: "Natural Smile",
  },
  {
    id: 6,
    category: "wedding",
    img: "https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21d?w=800",
    title: "The Wedding Kiss",
  },
  {
    id: 7,
    category: "prewedding",
    img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800",
    title: "Love Story",
  },
  {
    id: 8,
    category: "reception",
    img: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800",
    title: "First Dance",
  },
  {
    id: 9,
    category: "mehendi",
    img: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800",
    title: "Henna Art",
  },
  {
    id: 10,
    category: "candid",
    img: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800",
    title: "Joyful Moments",
  },
  {
    id: 11,
    category: "wedding",
    img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800",
    title: "Forever Together",
  },
  {
    id: 12,
    category: "prewedding",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
    title: "Golden Hour Romance",
  },
];

function GalleryPage() {
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  const filteredImages = filter === 'all' 
    ? galleryData 
    : galleryData.filter(img => img.category === filter);

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'wedding', label: 'Wedding' },
    { key: 'prewedding', label: 'Pre‑Wedding' },
    { key: 'reception', label: 'Reception' },
    { key: 'mehendi', label: 'Mehendi' },
    { key: 'candid', label: 'Candid' },
  ];

  return (
    <section className="gallery-page">
      {/* Hero Banner */}
      <div className="gallery-hero">
        <div className="gallery-hero-overlay"></div>
        <div className="gallery-hero-content">
          <h1 className="gallery-hero-title">Our <span>Gallery</span></h1>
          <p className="gallery-hero-sub">A visual journey of love, laughter, and timeless moments.</p>
        </div>
      </div>

      <div className="container">
        {/* Filter Buttons */}
        <div className="gallery-filters">
          {categories.map(cat => (
            <button
              key={cat.key}
              className={`filter-btn ${filter === cat.key ? 'active' : ''}`}
              onClick={() => setFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="gallery-masonry">
          {filteredImages.map((img, index) => (
            <div 
              key={img.id} 
              className={`gallery-item polaroid ${index % 2 === 0 ? 'tilt-left' : 'tilt-right'}`}
              onClick={() => setLightbox(img)}
            >
              <img src={img.img} alt={img.title} />
              <div className="polaroid-caption">
                <span>{img.title}</span>
              </div>
              <div className="gallery-item-overlay">
                <span>View</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div className="lightbox" onClick={() => setLightbox(null)}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
              <img src={lightbox.img} alt={lightbox.title} />
              <p className="lightbox-title">{lightbox.title}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default GalleryPage;