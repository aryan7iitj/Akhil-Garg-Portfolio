'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaStar, FaGraduationCap, FaFlask, FaBatteryFull, FaMicrochip } from 'react-icons/fa';

const Hero = () => {
  const [currentIcon, setCurrentIcon] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const heroRef = useRef<HTMLElement>(null);
  
  const icons = [FaBatteryFull, FaFlask, FaMicrochip, FaGraduationCap];


  // Icon rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [icons.length]);

  // Visibility detection
  useEffect(() => {
    // Set visible immediately for hero section
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '-10px' }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);


  const CurrentIcon = icons[currentIcon];

  // Mouse movement tracking for 3D effects
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!heroRef.current) return;
    
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    // Apply 3D transformations based on mouse position
    const elements = heroRef.current.querySelectorAll('[data-3d]');
    elements.forEach((element) => {
      const el = element as HTMLElement;
      const depth = parseFloat(el.dataset.depth || '20');
      const rotateX = y * depth;
      const rotateY = -x * depth;
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${depth}px)`;
    });
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 40;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <section 
        ref={heroRef}
        onMouseMove={handleMouseMove}
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 1rem',
          overflow: 'hidden',
          perspective: '1000px'
        }}
      >

        <div style={{ textAlign: 'center', maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          {/* Professor Image */}
          <div 
            className="hero-3d-image-container"
            data-3d="true"
            data-depth="30"
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '2rem',
              transformStyle: 'preserve-3d',
              transition: 'all 0.3s ease',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              animation: isVisible ? 'fadeInUp 0.8s ease-out' : 'none'
            }}
          >
            <div
              className="hero-3d-image-wrapper"
              style={{
                position: 'relative',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                padding: '4px',
                transformStyle: 'preserve-3d',
                transition: 'all 0.3s ease',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                overflow: 'hidden'
              }}
            >
              <img
                src="/IMG-20250919-WA0000.jpg"
                alt="Dr. Akhil Garg"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  filter: 'brightness(1.1) contrast(1.1)',
                  transition: 'all 0.3s ease'
                }}
              />
              {/* Glow effect overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.1) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(30, 64, 175, 0.1) 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  pointerEvents: 'none'
                }}
                className="image-glow-overlay"
              />
            </div>
          </div>

          {/* Badge */}
          <div 
            className="hero-3d-badge"
            data-3d="true"
            data-depth="15"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '9999px',
              //marginBottom: '0rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transformStyle: 'preserve-3d',
              transition: 'all 0.3s ease',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              animation: isVisible ? 'fadeInUp 0.8s ease-out 0.2s both' : 'none'
            }}
          >
            <FaStar style={{ color: '#fbbf24', fontSize: '0.875rem' }} />
            <span style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.875rem', fontWeight: 500 }}>
              Stanford Top 2% Scientist • H-index 47
            </span>
          </div>

          {/* Main Title */}
          <h1 
            className="hero-3d-title"
            data-3d="true"
            data-depth="25"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
              fontWeight: 900,
              color: 'white',
              marginBottom: '1.5rem',
              lineHeight: 1.1,
              transformStyle: 'preserve-3d',
              transition: 'all 0.3s ease',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              animation: isVisible ? 'fadeInUp 0.8s ease-out 0.4s both' : 'none'
            }}
          >
            Hi, I&apos;m{' '}
            <span 
  className="gradient-text"
              style={{
                background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #1e40af 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '200% 200%'
              }}
            >
              Dr. Akhil Garg
            </span>
          </h1>

          {/* Icon Section */}
          <div 
            className="hero-3d-icon-section"
            data-3d="true"
            data-depth="20"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '2rem',
              transformStyle: 'preserve-3d',
              transition: 'all 0.3s ease',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              animation: isVisible ? 'fadeInUp 0.8s ease-out 0.6s both' : 'none'
            }}
          >
            <div 
              className="hero-3d-icon"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '4rem',
                height: '4rem',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transformStyle: 'preserve-3d',
                transition: 'all 0.3s ease',
                animation: 'pulseGlow 2s ease-in-out infinite'
              }}
            >
              <CurrentIcon style={{ fontSize: '1.5rem', color: '#1e40af' }} />
            </div>
            <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.25rem', fontWeight: 600 }}>
              I advance battery technology
            </span>
          </div>

          
          {/* 3D Buttons */}
          <div 
            style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              marginTop: '3rem',
              flexWrap: 'wrap',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              animation: isVisible ? 'fadeInUp 0.8s ease-out 0.8s both' : 'none'
            }}
          >
            <button
              className="hero-3d-button"
              onClick={() => scrollToSection('about')}
              style={{
                background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
                border: 'none',
                borderRadius: '9999px',
                padding: '1rem 2rem',
                color: 'white',
                fontSize: '1.125rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s',
                boxShadow: '0 10px 25px rgba(30, 64, 175, 0.3)',
                transformStyle: 'preserve-3d',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <span className="button-shine" />
              <FaGraduationCap />
              About Me
            </button>
            <button
              className="hero-3d-button"
              onClick={() => scrollToSection('projects')}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '9999px',
                padding: '1rem 2rem',
                color: 'white',
                fontSize: '1.125rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s',
                backdropFilter: 'blur(10px)',
                transformStyle: 'preserve-3d',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <span className="button-shine" />
              <FaFlask />
              Publications
            </button>
          </div>
        </div>

        <style jsx>{`
          /* Enhanced 3D Interactive Effects */
          .hero-3d-image-container:hover {
            transform: translateZ(35px) !important;
          }

          .hero-3d-image-wrapper:hover {
            transform: translateZ(50px) scale(1.05) !important;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
          }

          .hero-3d-image-wrapper:hover .image-glow-overlay {
            opacity: 1 !important;
          }

          .hero-3d-image-wrapper:hover img {
            filter: brightness(1.2) contrast(1.2) !important;
          }

          .hero-3d-badge:hover {
            transform: translateZ(20px) !important;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3) !important;
          }

          .hero-3d-title:hover {
            transform: translateZ(30px) scale(1.05) !important;
            text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5) !important;
          }

          .hero-3d-icon-section:hover {
            transform: translateZ(25px) !important;
          }

          .hero-3d-icon:hover {
            transform: translateZ(40px) scale(1.2) !important;
            box-shadow: 0 15px 35px rgba(30, 64, 175, 0.4) !important;
          }


          .hero-3d-button:hover {
            transform: translateZ(25px) scale(1.05) !important;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4) !important;
          }


          /* Enhanced Animations */
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes pulseGlow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(30, 64, 175, 0.3);
            }
            50% {
              box-shadow: 0 0 40px rgba(30, 64, 175, 0.6);
            }
          }


          /* Gradient Text - Static */
          .gradient-text {
            /* No animation - static gradient */
          }

          /* Button Shine Effect */
          .button-shine {
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
          }

          .hero-3d-button:hover .button-shine {
            left: 100%;
          }

          /* Mouse movement tracking for dynamic 3D effect */
          .hero-3d-badge,
          .hero-3d-title,
          .hero-3d-icon-section,
          .hero-3d-description,
          .hero-3d-button {
            transition: all 0.3s ease;
          }

          /* Subtle floating animation for non-hover state */
          .hero-3d-title {
            animation: heroTitleFloat 6s ease-in-out infinite;
          }

          .hero-3d-icon-section {
            animation: heroIconFloat 8s ease-in-out infinite;
          }

          @keyframes heroTitleFloat {
            0%, 100% {
              transform: translateZ(0px) rotateX(0deg) rotateY(0deg);
            }
            50% {
              transform: translateZ(10px) rotateX(2deg) rotateY(2deg);
            }
          }

          @keyframes heroIconFloat {
            0%, 100% {
              transform: translateZ(0px) rotateX(0deg) rotateY(0deg);
            }
            50% {
              transform: translateZ(15px) rotateX(3deg) rotateY(3deg);
            }
          }

          /* Responsive adjustments */
          @media (max-width: 768px) {
            .hero-3d-image-wrapper {
              width: 150px !important;
              height: 150px !important;
            }
            
            .hero-3d-button {
              padding: 0.875rem 1.5rem;
              font-size: 1rem;
            }
          }

          @media (max-width: 480px) {
            .hero-3d-image-wrapper {
              width: 120px !important;
              height: 120px !important;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default Hero;