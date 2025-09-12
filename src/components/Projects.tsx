'use client'

import { FaExternalLinkAlt, FaBook, FaFlask, FaBatteryFull, FaMicrochip, FaGraduationCap, FaUsers, FaTrophy, FaGlobe, FaUniversity } from 'react-icons/fa'

export default function Projects() {
  return (
    <>
      <section id="projects" style={{ padding: '6rem 1rem', position: 'relative' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'white', marginBottom: '1rem' }}>Research Projects</h2>
            <div style={{
              width: '8rem',
              height: '0.5rem',
              background: 'linear-gradient(to right, #60a5fa, #3b82f6, #1e40af)',
              margin: '0 auto',
              borderRadius: '9999px'
            }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {/* Project 1 - Real-time Thermal Management */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.2), rgba(59, 130, 246, 0.2))',
              borderRadius: '1rem',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(30, 64, 175, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                transform: 'rotate(45deg)',
                animation: 'shimmer 3s infinite',
                pointerEvents: 'none'
              }} />
              <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                Real-time Thermal Management of Battery Packs
              </h3>
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem', lineHeight: 1.6 }}>
                  • AI-driven hardware monitoring system using reinforcement learning
                </p>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
                  • Real-time optimization of flow rate parameters to maintain temperature
                </p>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
                  • Controller design for efficient battery pack thermal management
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <span style={{
                  background: 'rgba(30, 64, 175, 0.2)',
                  color: '#60a5fa',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>Reinforcement Learning</span>
                <span style={{
                  background: 'rgba(59, 130, 246, 0.2)',
                  color: '#93c5fd',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>Thermal Management</span>
                <span style={{
                  background: 'rgba(6, 182, 212, 0.2)',
                  color: '#22d3ee',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>Controller Design</span>
                <span style={{
                  background: 'rgba(30, 64, 175, 0.2)',
                  color: '#60a5fa',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>Real-time Optimization</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>
                  <FaBook />
                  View Research
                </a>
                <a href="#" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>
                  <FaExternalLinkAlt />
                  Lab Details
                </a>
              </div>
            </div>

            {/* Project 2 - Topology Optimization */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))',
              borderRadius: '1rem',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                transform: 'rotate(45deg)',
                animation: 'shimmer 3s infinite',
                pointerEvents: 'none'
              }} />
              <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                Topology Optimization of Battery Cooling Plates
              </h3>
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem', lineHeight: 1.6 }}>
                  • Structural design of battery pack cooling plates beyond traditional rectangular plates
                </p>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
                  • Maximize heat transfer rate and reduce pressure drop
                </p>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
                  • Weight reduction through optimized topology design
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <span style={{
                  background: 'rgba(6, 182, 212, 0.2)',
                  color: '#22d3ee',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>Topology Optimization</span>
                <span style={{
                  background: 'rgba(59, 130, 246, 0.2)',
                  color: '#93c5fd',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>Heat Transfer</span>
                <span style={{
                  background: 'rgba(30, 64, 175, 0.2)',
                  color: '#60a5fa',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>Structural Design</span>
                <span style={{
                  background: 'rgba(6, 182, 212, 0.2)',
                  color: '#22d3ee',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>Pressure Drop</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>
                  <FaBook />
                  View Research
                </a>
                <a href="#" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>
                  <FaExternalLinkAlt />
                  Lab Details
                </a>
              </div>
            </div>

            {/* Project 3 - Fast Charging Technologies */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))',
              borderRadius: '1rem',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(6, 182, 212, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                transform: 'rotate(45deg)',
                animation: 'shimmer 3s infinite',
                pointerEvents: 'none'
              }} />
              <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                Health-aware Battery Fast Charging Technologies
              </h3>
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem', lineHeight: 1.6 }}>
                  • Novel health-aware battery fast charging method considering battery aging
                </p>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
                  • Real-time optimization of charging protocols (CC-CV switch over point)
                </p>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
                  • Improved battery life through adaptive charging strategies
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <span style={{
                  background: 'rgba(6, 182, 212, 0.2)',
                  color: '#22d3ee',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>Fast Charging</span>
                <span style={{
                  background: 'rgba(59, 130, 246, 0.2)',
                  color: '#93c5fd',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>Health Monitoring</span>
                <span style={{
                  background: 'rgba(30, 64, 175, 0.2)',
                  color: '#60a5fa',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>CC-CV Protocols</span>
                <span style={{
                  background: 'rgba(6, 182, 212, 0.2)',
                  color: '#22d3ee',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>Battery Aging</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>
                  <FaBook />
                  View Research
                </a>
                <a href="#" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>
                  <FaExternalLinkAlt />
                  Lab Details
                </a>
              </div>
            </div>

            {/* Project 4 - Battery Reusability */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.2), rgba(59, 130, 246, 0.2))',
              borderRadius: '1rem',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(30, 64, 175, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                transform: 'rotate(45deg)',
                animation: 'shimmer 3s infinite',
                pointerEvents: 'none'
              }} />
              <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                Intelligent Battery Reusability and Sorting
              </h3>
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem', lineHeight: 1.6 }}>
                  • Robotics-based AI approach for intelligent identification and sorting of cells
                </p>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
                  • Non-destructive physics-based measurements for cell assessment
                </p>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
                  • Estimation of remaining useful life in spent battery packs
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <span style={{
                  background: 'rgba(30, 64, 175, 0.2)',
                  color: '#60a5fa',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>Robotics AI</span>
                <span style={{
                  background: 'rgba(59, 130, 246, 0.2)',
                  color: '#93c5fd',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>Cell Sorting</span>
                <span style={{
                  background: 'rgba(6, 182, 212, 0.2)',
                  color: '#22d3ee',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>Non-destructive Testing</span>
                <span style={{
                  background: 'rgba(30, 64, 175, 0.2)',
                  color: '#60a5fa',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>Life Estimation</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>
                  <FaBook />
                  View Research
                </a>
                <a href="#" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>
                  <FaExternalLinkAlt />
                  Lab Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}