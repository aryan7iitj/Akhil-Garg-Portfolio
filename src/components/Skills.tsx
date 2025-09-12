'use client'

import { FaBatteryFull, FaFlask, FaMicrochip, FaGraduationCap, FaBook, FaEdit, FaUsers, FaTrophy, FaGlobe, FaUniversity, FaBrain, FaCogs, FaChartLine, FaRocket } from 'react-icons/fa'
import { SiPython, SiTensorflow, SiPytorch, SiPandas, SiScikitlearn, SiNumpy, SiCplusplus, SiC, SiDocker, SiJenkins } from 'react-icons/si'

export default function Skills() {
  return (
    <>
      <section id="skills" style={{ padding: '6rem 1rem', position: 'relative' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'white', marginBottom: '1rem' }}>Research Expertise</h2>
            <div style={{
              width: '8rem',
              height: '0.5rem',
              background: 'linear-gradient(to right, #60a5fa, #3b82f6, #1e40af)',
              margin: '0 auto',
              borderRadius: '9999px'
            }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Research Areas */}
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <FaBatteryFull style={{ fontSize: '2rem', color: '#1e40af' }} />
                <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700 }}>Research Areas</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <FaMicrochip style={{ fontSize: '1.875rem', color: '#1e40af' }} />
                  <span style={{ fontWeight: 600 }}>Thermal Management</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <FaCogs style={{ fontSize: '1.875rem', color: '#3b82f6' }} />
                  <span style={{ fontWeight: 600 }}>Multiphysics Modelling</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <FaRocket style={{ fontSize: '1.875rem', color: '#06b6d4' }} />
                  <span style={{ fontWeight: 600 }}>Topology Optimization</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <FaBrain style={{ fontSize: '1.875rem', color: '#3b82f6' }} />
                  <span style={{ fontWeight: 600 }}>Digital Twins</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <FaBatteryFull style={{ fontSize: '1.875rem', color: '#06b6d4' }} />
                  <span style={{ fontWeight: 600 }}>Fast Charging</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <FaFlask style={{ fontSize: '1.875rem', color: '#1e40af' }} />
                  <span style={{ fontWeight: 600 }}>Machine Learning</span>
                </div>
              </div>
            </div>

            {/* Technical Expertise */}
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <FaMicrochip style={{ fontSize: '2rem', color: '#3b82f6' }} />
                <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700 }}>Technical Expertise</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <SiPython style={{ fontSize: '1.875rem', color: '#3b82f6' }} />
                  <span style={{ fontWeight: 600 }}>Python</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <SiC style={{ fontSize: '1.875rem', color: '#06b6d4' }} />
                  <span style={{ fontWeight: 600 }}>C/C++</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <SiTensorflow style={{ fontSize: '1.875rem', color: '#f97316' }} />
                  <span style={{ fontWeight: 600 }}>TensorFlow</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <SiPytorch style={{ fontSize: '1.875rem', color: '#dc2626' }} />
                  <span style={{ fontWeight: 600 }}>PyTorch</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <SiPandas style={{ fontSize: '1.875rem', color: '#059669' }} />
                  <span style={{ fontWeight: 600 }}>Pandas</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <SiNumpy style={{ fontSize: '1.875rem', color: '#3b82f6' }} />
                  <span style={{ fontWeight: 600 }}>NumPy</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <SiScikitlearn style={{ fontSize: '1.875rem', color: '#f59e0b' }} />
                  <span style={{ fontWeight: 600 }}>Scikit-learn</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <FaChartLine style={{ fontSize: '1.875rem', color: '#06b6d4' }} />
                  <span style={{ fontWeight: 600 }}>MATLAB</span>
                </div>
              </div>
            </div>

            {/* Academic Leadership */}
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <FaUsers style={{ fontSize: '2rem', color: '#06b6d4' }} />
                <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700 }}>Academic Leadership</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <FaUniversity style={{ fontSize: '1.875rem', color: '#06b6d4' }} />
                  <span style={{ fontWeight: 600 }}>Lab Director</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <FaEdit style={{ fontSize: '1.875rem', color: '#3b82f6' }} />
                  <span style={{ fontWeight: 600 }}>Editorial Board</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <FaGraduationCap style={{ fontSize: '1.875rem', color: '#1e40af' }} />
                  <span style={{ fontWeight: 600 }}>Course Teaching</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <FaBook style={{ fontSize: '1.875rem', color: '#3b82f6' }} />
                  <span style={{ fontWeight: 600 }}>Research Projects</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <FaGlobe style={{ fontSize: '1.875rem', color: '#06b6d4' }} />
                  <span style={{ fontWeight: 600 }}>International Collaboration</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <FaTrophy style={{ fontSize: '1.875rem', color: '#1e40af' }} />
                  <span style={{ fontWeight: 600 }}>Research Excellence</span>
                </div>
              </div>
            </div>

            {/* Research Tools & Software */}
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <FaCogs style={{ fontSize: '2rem', color: '#1e40af' }} />
                <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700 }}>Research Tools & Software</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <FaChartLine style={{ fontSize: '1.875rem', color: '#3b82f6' }} />
                  <span style={{ fontWeight: 600 }}>ANSYS</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <FaMicrochip style={{ fontSize: '1.875rem', color: '#06b6d4' }} />
                  <span style={{ fontWeight: 600 }}>COMSOL</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <FaFlask style={{ fontSize: '1.875rem', color: '#1e40af' }} />
                  <span style={{ fontWeight: 600 }}>LabVIEW</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <FaBatteryFull style={{ fontSize: '1.875rem', color: '#3b82f6' }} />
                  <span style={{ fontWeight: 600 }}>Battery Testing</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <FaRocket style={{ fontSize: '1.875rem', color: '#06b6d4' }} />
                  <span style={{ fontWeight: 600 }}>Genetic Programming</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <FaBrain style={{ fontSize: '1.875rem', color: '#1e40af' }} />
                  <span style={{ fontWeight: 600 }}>AI Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}