import React, {
    useState,
    useEffect,
  } from 'react';
  import './AffiliateSection.css'; // Import the CSS file
  
  // 1. Content Extraction (same as before)
  const MAMIntro = {
    title: 'Our Partner: MAM',
    description: "We're proud to partner with MAM, a leading provider of business solutions in The Gambia.",
    services: [
      'General Trading',
      'Branding & Design',
      'Media & Marketing',
      'Printing Services',
      'ICT Solutions',
    ],
    summary: 'MAM is known for its commitment to quality, customer satisfaction, and timely delivery. They offer a range of services to help businesses thrive.',
  };
  
  const MAMDisclosure = "Disclosure: We are an affiliate of MAM and may earn a commission if you make a purchase through our links. This does not affect the price you pay.";
  
  // 2. Expanded Content Component
  function ExpandedMAMContent({ isMobile }) {
    return (
      <div className="expanded-mam-content">
        <h3 className="mam-title" style={{ textAlign: isMobile ? 'center' : 'left' }}>{MAMIntro.title}</h3>
        <p className="mam-description" style={{ textAlign: isMobile ? 'center' : 'left' }}>{MAMIntro.description}</p>
        <ul className="mam-services" style={{ paddingLeft: isMobile ? 0 : '20px' }}>
          {MAMIntro.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
        <p className="mam-summary" style={{ textAlign: isMobile ? 'center' : 'left' }}>{MAMIntro.summary}</p>
        <a
          href="[MAM's website link]" // Replace with MAM's affiliate link
          target="_blank"
          rel="noopener noreferrer"
          className="mam-button"
        >
          Visit MAM's Website
        </a>
        <p className="mam-disclosure" style={{ textAlign: 'center', marginTop: '1rem' }}>
          <em>{MAMDisclosure}</em>
        </p>
      </div>
    );
  }
  
  function MAM() {
    const [expanded, setExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
  
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
  
    const toggleExpanded = () => {
      setExpanded(!expanded);
    };
  
    return (
      <div className="affiliate-section">
        <div
          className={`affiliate-paper ${expanded ? 'expanded' : ''}`} // Add a class for expanded state
          onClick={!expanded ? toggleExpanded : undefined}
        >
          {!expanded ? (
            // Collapsed State: Just the Logo
            <div className="affiliate-logo-container">
              <img
                src="/mam.png"
                alt="MAM Logo"
                width={150}
              />
            </div>
          ) : (
            // Expanded State: Split Layout
            <div className="expanded-layout">
  
              {/* Close Button (Visible only in expanded state) */}
              <button
                className="close-button"
                onClick={toggleExpanded}
              >
                × {/* "X" close icon */}
              </button>
  
              {/* Logo Column (or Top Section on Mobile) */}
              <div className="logo-column">
                <img
                  src="../../public/mam.png"
                  alt="MAM Logo"
                  width={300}
                  height={150}

                />
              </div>
  
              {/* Content Column (or Bottom Section on Mobile) */}
              <ExpandedMAMContent isMobile={isMobile} />
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default MAM;