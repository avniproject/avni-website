import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

const LaunchpadRibbon = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showPulse, setShowPulse] = useState(true);
  const [hasSlideDown, setHasSlideDown] = useState(false);

  useEffect(() => {
    // Trigger slide down animation after 2 seconds
    const slideTimer = setTimeout(() => {
      setHasSlideDown(true);
    }, 2000);

    // Stop pulse animation after 5 seconds
    const pulseTimer = setTimeout(() => {
      setShowPulse(false);
    }, 5000);
    
    return () => {
      clearTimeout(slideTimer);
      clearTimeout(pulseTimer);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/* CSS Animations */}
      <style>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
          }
          70% {
            transform: scale(1.05);
            box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
          }
        }
        
        @keyframes slideDown {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .pulse-animation {
          animation: pulse 1.5s infinite;
        }
        
        .slide-down {
          animation: slideDown 0.6s ease-out;
        }
        
        .ribbon-hidden {
          transform: translateY(-100%);
          opacity: 0;
        }
        
        @media (max-width: 768px) {
          .mobile-ribbon {
            height: 100px !important;
            padding: 0.75rem 1rem !important;
          }
          .ribbon-text {
            font-size: 0.85rem !important;
            margin-right: 2.5rem !important;
            line-height: 1.3 !important;
            margin-bottom: 0.5rem !important;
          }
          .ribbon-button {
            font-size: 0.75rem !important;
            padding: 0.4rem 0.8rem !important;
            border-radius: 20px !important;
          }
          .ribbon-content {
            flex-direction: column !important;
            gap: 0.25rem !important;
            padding-right: 2.5rem !important;
            align-items: center !important;
          }
          .ribbon-close-button {
            top: 1rem !important;
            right: 0.5rem !important;
            width: 24px !important;
            height: 24px !important;
            font-size: 14px !important;
          }
          .mobile-spacer {
            height: 100px !important;
          }
        }
      `}</style>

      {/* Floating Ribbon */}
      <div
        className={`mobile-ribbon ${!hasSlideDown ? 'ribbon-hidden' : 'slide-down'}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '80px',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 1rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          borderBottom: '3px solid #ffd700',
          transition: 'transform 0.6s ease-out, opacity 0.6s ease-out'
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="ribbon-close-button"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            transform: 'none',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'white',
            fontSize: '18px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.3)';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
            e.target.style.transform = 'scale(1)';
          }}
          aria-label="Close ribbon"
        >
          ×
        </button>

        {/* Content Container */}
        <div
          className="ribbon-content"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            maxWidth: '1200px',
            width: '100%'
          }}
        >
          {/* Text Content */}
          <div
            className="ribbon-text"
            style={{
              color: 'white',
              fontSize: '1.1rem',
              fontWeight: '600',
              textAlign: 'center',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
              flex: '1',
              maxWidth: '600px'
            }}
          >
            🚀 Ready to launch your field app? Avni Launchpad starts now!
          </div>

          {/* CTA Button */}
          <Link
            to="/blog/2026-01-08-avni-launchpad-cohort-2-announcement/"
            className={`ribbon-button ${showPulse ? 'pulse-animation' : ''}`}
            style={{
              backgroundColor: '#ffd700',
              color: '#1a1a2e',
              border: 'none',
              borderRadius: '25px',
              fontWeight: '700',
              fontSize: '1rem',
              padding: '0.75rem 1.5rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(255, 215, 0, 0.4)',
              whiteSpace: 'nowrap'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#ffed4e';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(255, 215, 0, 0.6)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#ffd700';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(255, 215, 0, 0.4)';
            }}
          >
            Learn more
            <span style={{ fontSize: '1.1rem' }}>→</span>
          </Link>
        </div>
      </div>

      {/* Body Padding Spacer - only show after ribbon slides down */}
      {hasSlideDown && <div className="mobile-spacer" style={{ height: '80px' }} />}
    </>
  );
};

export default LaunchpadRibbon;
