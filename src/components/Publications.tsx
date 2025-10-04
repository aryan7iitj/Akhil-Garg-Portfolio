'use client'

import { FaExternalLinkAlt, FaCalendarAlt, FaUsers, FaBookOpen, FaQuoteLeft } from 'react-icons/fa'

export default function Publications() {
  const publications = [
    {
      title: "Metallurgical and mechanical methods for recycling of lithium-ion battery pack for electric vehicles",
      authors: "L Yun, D Linh, L Shui, X Peng, A Garg, MLP Le, S Asghari, J Sandoval",
      journal: "Resources, Conservation and Recycling",
      year: "2018",
      citations: 305,
      link: "https://scholar.google.com/scholar?q=Metallurgical+and+mechanical+methods+for+recycling+of+lithium-ion+battery+pack+for+electric+vehicles+A+Garg"
    },
    {
      title: "An improved CNN-LSTM model-based state-of-health estimation approach for lithium-ion batteries",
      authors: "H Xu, L Wu, S Xiong, W Li, A Garg, L Gao",
      journal: "Energy",
      year: "2023",
      citations: 233,
      link: "https://scholar.google.com/scholar?q=An+improved+CNN-LSTM+model-based+state-of-health+estimation+approach+for+lithium-ion+batteries+A+Garg"
    },
    {
      title: "A surrogate thermal modeling and parametric optimization of battery pack with air cooling for EVs",
      authors: "W Li, M Xiao, X Peng, A Garg, L Gao",
      journal: "Applied Thermal Engineering",
      year: "2019",
      citations: 208,
      link: "https://scholar.google.com/scholar?q=A+surrogate+thermal+modeling+and+parametric+optimization+of+battery+pack+with+air+cooling+for+EVs+A+Garg"
    },
    {
      title: "A comprehensive analysis and optimization process for an integrated liquid cooling plate for a prismatic lithium-ion battery module",
      authors: "S Chen, X Peng, N Bao, A Garg",
      journal: "Applied Thermal Engineering",
      year: "2019",
      citations: 201,
      link: "https://scholar.google.com/scholar?q=A+comprehensive+analysis+and+optimization+process+for+an+integrated+liquid+cooling+plate+for+a+prismatic+lithium-ion+battery+module+A+Garg"
    },
    {
      title: "Design optimization of battery pack enclosure for electric vehicle",
      authors: "L Shui, F Chen, A Garg, X Peng, N Bao, J Zhang",
      journal: "Structural and Multidisciplinary Optimization",
      year: "2018",
      citations: 176,
      link: "https://scholar.google.com/scholar?q=Design+optimization+of+battery+pack+enclosure+for+electric+vehicle+A+Garg"
    },
    {
      title: "Enhanced power production in PV arrays using a new skyscraper puzzle based one-time reconfiguration procedure under partial shade conditions (PSCs)",
      authors: "MSS Nihanth, JP Ram, DS Pillai, AMYM Ghias, A Garg, N Rajasekar",
      journal: "Solar Energy",
      year: "2019",
      citations: 166,
      link: "https://scholar.google.com/scholar?q=Enhanced+power+production+in+PV+arrays+using+a+new+skyscraper+puzzle+based+one-time+reconfiguration+procedure+under+partial+shade+conditions+A+Garg"
    },
    {
      title: "Deep learning networks for capacity estimation for monitoring SOH of Li‐ion batteries for electric vehicles",
      authors: "K Kaur, A Garg, X Cui, S Singh, BK Panigrahi",
      journal: "International Journal of Energy Research",
      year: "2021",
      citations: 158,
      link: "https://scholar.google.com/scholar?q=Deep+learning+networks+for+capacity+estimation+for+monitoring+SOH+of+Li-ion+batteries+for+electric+vehicles+A+Garg"
    },
    {
      title: "A review of state of health estimation of energy storage systems: Challenges and possible solutions for futuristic applications of li-ion battery packs in electric vehicles",
      authors: "SB Sarmah, P Kalita, A Garg, X Niu, XW Zhang, X Peng, D Bhattacharjee",
      journal: "Journal of Electrochemical Energy Conversion and Storage",
      year: "2019",
      citations: 133,
      link: "https://scholar.google.com/scholar?q=A+review+of+state+of+health+estimation+of+energy+storage+systems+Challenges+and+possible+solutions+for+futuristic+applications+of+li-ion+battery+packs+in+electric+vehicles+A+Garg"
    },
    {
      title: "A machine learning approach for energy-efficient intelligent transportation scheduling problem in a real-world dynamic circumstances",
      authors: "J Mou, K Gao, P Duan, J Li, A Garg, R Sharma",
      journal: "IEEE Transactions on Intelligent Transportation Systems",
      year: "2022",
      citations: 123,
      link: "https://scholar.google.com/scholar?q=A+machine+learning+approach+for+energy-efficient+intelligent+transportation+scheduling+problem+in+a+real-world+dynamic+circumstances+A+Garg"
    },
    {
      title: "Multi‐objective design optimization for mini‐channel cooling battery thermal management system in an electric vehicle",
      authors: "W Li, X Peng, M Xiao, A Garg, L Gao",
      journal: "International Journal of Energy Research",
      year: "2019",
      citations: 119,
      link: "https://scholar.google.com/scholar?q=Multi-objective+design+optimization+for+mini-channel+cooling+battery+thermal+management+system+in+an+electric+vehicle+A+Garg"
    }
  ]

  return (
    <>
      <section id="publications" style={{ padding: '6rem 1rem', position: 'relative' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'white', marginBottom: '1rem' }}>Research Publications</h2>
            <div style={{
              width: '8rem',
              height: '0.5rem',
              background: 'linear-gradient(to right, #60a5fa, #3b82f6, #1e40af)',
              margin: '0 auto',
              borderRadius: '9999px'
            }}></div>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.7)', 
              fontSize: '1.2rem', 
              marginTop: '1.5rem',
              maxWidth: '600px',
              margin: '1.5rem auto 0'
            }}>
              A comprehensive collection of my research contributions in energy storage, 
              electric vehicles, and machine learning applications
            </p>
          </div>

          {/* Stats Section */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem', 
            marginBottom: '4rem' 
          }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))',
              borderRadius: '1rem',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center',
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
              <FaBookOpen style={{ fontSize: '2.5rem', color: '#60a5fa', marginBottom: '1rem' }} />
              <h3 style={{ color: 'white', fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>100+</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1rem' }}>Publications</p>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(6, 182, 212, 0.2))',
              borderRadius: '1rem',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(16, 185, 129, 0.3)';
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
              <FaQuoteLeft style={{ fontSize: '2.5rem', color: '#10b981', marginBottom: '1rem' }} />
              <h3 style={{ color: 'white', fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>47</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1rem' }}>H-index</p>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(251, 191, 36, 0.2))',
              borderRadius: '1rem',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(245, 158, 11, 0.3)';
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
              <FaExternalLinkAlt style={{ fontSize: '2.5rem', color: '#f59e0b', marginBottom: '1rem' }} />
              <h3 style={{ color: 'white', fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>5000+</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1rem' }}>Citations</p>
            </div>
          </div>

          {/* Publications List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {publications.map((pub, index) => (
              <div
                key={index}
                style={{
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
                
                <h3 style={{ 
                  color: 'white', 
                  fontSize: '1.25rem', 
                  fontWeight: 600, 
                  marginBottom: '1rem',
                  lineHeight: '1.4'
                }}>
                  {pub.title}
                </h3>
                
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '1rem', 
                  marginBottom: '1rem',
                  alignItems: 'center'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FaUsers style={{ color: '#60a5fa', fontSize: '0.9rem' }} />
                    <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>
                      {pub.authors}
                    </span>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FaBookOpen style={{ color: '#10b981', fontSize: '0.9rem' }} />
                    <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>
                      {pub.journal}
                    </span>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FaCalendarAlt style={{ color: '#f59e0b', fontSize: '0.9rem' }} />
                    <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>
                      {pub.year}
                    </span>
                  </div>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}>
                  <div style={{
                    background: 'rgba(59, 130, 246, 0.2)',
                    color: '#60a5fa',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: 500
                  }}>
                    {pub.citations} citations
                  </div>
                  
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#60a5fa',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#93c5fd';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#60a5fa';
                    }}
                  >
                    <FaExternalLinkAlt />
                    View on Google Scholar
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* View All Publications Button */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a 
              href="https://scholar.google.com/citations?user=51TMv_AAAAAJ&hl=en&authuser=1" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'linear-gradient(135deg, #3b82f6, #1e40af)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
              }}
            >
              <FaExternalLinkAlt />
              View All Publications on Google Scholar
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
