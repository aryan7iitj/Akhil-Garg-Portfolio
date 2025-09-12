'use client'

import React, { useState } from 'react';
import { FaGraduationCap, FaTrophy, FaBook, FaGlobe, FaBriefcase, FaAward, FaUniversity, FaBrain, FaBatteryFull, FaFlask, FaMicrochip, FaEdit, FaChalkboardTeacher } from 'react-icons/fa';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  const tabs = [
    { id: 'story', label: 'About Me', icon: FaBook },
    { id: 'experience', label: 'Academic Experience', icon: FaBriefcase },
    { id: 'research', label: 'Research Areas', icon: FaFlask },
    { id: 'teaching', label: 'Teaching', icon: FaChalkboardTeacher },
    { id: 'achievements', label: 'Achievements', icon: FaTrophy },
    { id: 'education', label: 'Education', icon: FaUniversity }
  ];

  const tabContent: Record<string, { title: string; content: React.ReactElement }> = {
    story: {
      title: "Academic Journey",
      content: (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', alignItems: 'center' }}>
          <div style={{
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(255, 255, 255, 0.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.6,
              marginBottom: '1rem'
            }}>
              I am Dr. Akhil Garg, an Associate Professor specializing in battery technology and thermal management. My research journey began at Nanyang Technological University, Singapore, where I completed my PhD in Mechanical Engineering.
            </p>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.6,
              marginBottom: '1rem'
            }}>
              Currently, I lead the Battery Design & Analysis Lab (BDAL) and focus on AI-driven optimization, multiphysics modeling, and digital twins for electric vehicle batteries. My work bridges the gap between theoretical research and practical applications in sustainable energy.
            </p>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.6
            }}>
              I am passionate about advancing battery technology through innovative research, mentoring the next generation of researchers, and contributing to the global transition towards sustainable energy solutions.
            </p>
          </div>
                                           <div style={{
              background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.2), rgba(59, 130, 246, 0.2))',
              borderRadius: '1rem',
              padding: '1.5rem',
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
              <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.75rem', marginTop: '0rem'}}>Quick Facts</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaGraduationCap style={{ color: '#1e40af' }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>PhD in Mechanical Engineering from NTU Singapore</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaTrophy style={{ color: '#1e40af' }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>Stanford Top 2% Scientist (2022-2023)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaBook style={{ color: '#1e40af' }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>100+ Peer-reviewed Publications</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaBatteryFull style={{ color: '#1e40af' }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>H-index: 47 (Scopus)</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    experience: {
      title: "Academic Experience",
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.2), rgba(59, 130, 246, 0.2))',
            borderRadius: '1rem',
            padding: '1.5rem',
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <FaBriefcase style={{ fontSize: '1.5rem', color: '#1e40af' }} />
              <div>
                <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.25rem' }}>Associate Professor</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>Xi&apos;an Jiaotong-Liverpool University • Suzhou, China • June 2025 - Present (4 months)</p>
              </div>
            </div>
            <ul style={{ color: 'rgba(255, 255, 255, 0.8)', paddingLeft: '1.25rem', lineHeight: 1.5, fontSize: '0.9rem' }}>
              <li>Leading research in battery technology and thermal management systems</li>
              <li>Teaching courses on Electric Vehicles, Battery Management Systems, and Energy Storage</li>
              <li>Managing international collaborations and research projects</li>
            </ul>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))',
            borderRadius: '1rem',
            padding: '1.5rem',
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <FaBatteryFull style={{ fontSize: '1.5rem', color: '#3b82f6' }} />
              <div>
                <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.25rem' }}>Director, Battery Design & Analysis Lab</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>Huazhong University of Science and Technology • Wuhan, China • June 2023 - Present (2 years 4 months)</p>
              </div>
            </div>
            <ul style={{ color: 'rgba(255, 255, 255, 0.8)', paddingLeft: '1.25rem', lineHeight: 1.5, fontSize: '0.9rem' }}>
              <li>Leading a team of 20+ international students in battery research and development</li>
              <li>Managing AI-driven thermal management systems for electric vehicle batteries</li>
              <li>Overseeing topology optimization projects for battery cooling plates</li>
            </ul>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))',
            borderRadius: '1rem',
            padding: '1.5rem',
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <FaUniversity style={{ fontSize: '1.5rem', color: '#06b6d4' }} />
              <div>
                <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.25rem' }}>Assistant Professor</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>Indian Institute of Technology Delhi • New Delhi, India • May 2020 - March 2023 (2 years 11 months)</p>
              </div>
            </div>
            <ul style={{ color: 'rgba(255, 255, 255, 0.8)', paddingLeft: '1.25rem', lineHeight: 1.5, fontSize: '0.9rem' }}>
              <li>Conducted research in battery technology and thermal management systems</li>
              <li>Taught undergraduate and graduate courses in mechanical engineering</li>
              <li>Supervised PhD and Master&apos;s students in their research projects</li>
            </ul>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.2), rgba(59, 130, 246, 0.2))',
            borderRadius: '1rem',
            padding: '1.5rem',
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <FaUniversity style={{ fontSize: '1.5rem', color: '#1e40af' }} />
              <div>
                <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.25rem' }}>Associate Professor</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>Shantou University • Shantou, China • March 2016 - July 2019 (3 years 5 months)</p>
              </div>
            </div>
            <ul style={{ color: 'rgba(255, 255, 255, 0.8)', paddingLeft: '1.25rem', lineHeight: 1.5, fontSize: '0.9rem' }}>
              <li>Conducted research in battery technology and energy systems</li>
              <li>Taught courses in mechanical engineering and energy technologies</li>
              <li>Supervised graduate students in battery research projects</li>
            </ul>
          </div>
        </div>
      )
    },
    research: {
      title: 'Research Areas & Expertise',
      content: (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.2), rgba(59, 130, 246, 0.2))',
            borderRadius: '1rem',
            padding: '1.5rem',
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <FaBatteryFull style={{ fontSize: '1.5rem', color: '#1e40af' }} />
              <h3 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 700 }}>Battery Technology</h3>
            </div>
            <ul style={{ color: 'rgba(255, 255, 255, 0.8)', paddingLeft: '1.25rem', lineHeight: 1.6, fontSize: '0.9rem' }}>
              <li>Thermal management of battery packs in Electric Vehicles</li>
              <li>AI-driven hardware monitoring systems using reinforcement learning</li>
              <li>Topology optimization of battery cooling plates</li>
              <li>Adaptive fast charging technologies for improved battery life</li>
            </ul>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))',
            borderRadius: '1rem',
            padding: '1.5rem',
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <FaMicrochip style={{ fontSize: '1.5rem', color: '#3b82f6' }} />
              <h3 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 700 }}>AI & Machine Learning</h3>
            </div>
            <ul style={{ color: 'rgba(255, 255, 255, 0.8)', paddingLeft: '1.25rem', lineHeight: 1.6, fontSize: '0.9rem' }}>
              <li>Machine learning for battery synthesis and optimization</li>
              <li>Genetic programming and AI-driven topology optimization</li>
              <li>Digital twins for EV battery state estimation</li>
              <li>Multiphysics modeling and simulation</li>
            </ul>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))',
            borderRadius: '1rem',
            padding: '1.5rem',
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <FaFlask style={{ fontSize: '1.5rem', color: '#06b6d4' }} />
              <h3 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 700 }}>Sustainable Energy</h3>
          </div>
            <ul style={{ color: 'rgba(255, 255, 255, 0.8)', paddingLeft: '1.25rem', lineHeight: 1.6, fontSize: '0.9rem' }}>
              <li>Cleaner energy technologies and optimization</li>
              <li>Renewable energy integration and storage systems</li>
              <li>Battery recycling and reusability research</li>
              <li>Robotics-based AI for battery cell identification</li>
            </ul>
          </div>
        </div>
      )
    },
    teaching: {
      title: 'Teaching Experience',
      content: (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.2), rgba(59, 130, 246, 0.2))',
            borderRadius: '1rem',
            padding: '1.5rem',
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <FaChalkboardTeacher style={{ fontSize: '1.5rem', color: '#1e40af' }} />
              <h3 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 700 }}>Core Courses</h3>
            </div>
            <ul style={{ color: 'rgba(255, 255, 255, 0.8)', paddingLeft: '1.25rem', lineHeight: 1.6, fontSize: '0.9rem' }}>
              <li>Engineering of Electric Vehicles (EVs)</li>
              <li>Batteries for EVs: Multidisciplinary Perspective</li>
              <li>Renewable Energy and New Energy Technologies</li>
              <li>Energy Storage Systems</li>
            </ul>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))',
            borderRadius: '1rem',
            padding: '1.5rem',
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <FaBrain style={{ fontSize: '1.5rem', color: '#3b82f6' }} />
              <h3 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 700 }}>Advanced Courses</h3>
            </div>
            <ul style={{ color: 'rgba(255, 255, 255, 0.8)', paddingLeft: '1.25rem', lineHeight: 1.6, fontSize: '0.9rem' }}>
              <li>Battery Management Systems</li>
              <li>Intelligent Energy Systems</li>
              <li>Heat Transfer</li>
              <li>Battery Failures (China-EU Institute)</li>
            </ul>
          </div>
        </div>
      )
    },
    achievements: {
      title: "Academic Achievements & Recognition",
      content: (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                                                                                                       <div style={{
            background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.2), rgba(59, 130, 246, 0.2))',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            border: '1px solid rgba(30, 64, 175, 0.3)',
            textAlign: 'center',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
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
            <FaTrophy style={{ fontSize: '2rem', color: '#1e40af', marginBottom: '0.75rem' }} />
            <h4 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Stanford Top 2% Scientist</h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', lineHeight: 1.4 }}>
              Listed in Stanford Elsevier World&apos;s Top 2% Scientists List for 2022-2023
              </p>
            </div>
          
                                                                                                       <div style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))',
            borderRadius: '0.75rem',
            padding: '1.5rem',
                border: '1px solid rgba(59, 130, 246, 0.3)',
            textAlign: 'center',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
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
            <FaEdit style={{ fontSize: '2rem', color: '#3b82f6', marginBottom: '0.75rem' }} />
            <h4 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Editorial Positions</h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', lineHeight: 1.4 }}>
              Associate Editor of ASME Journal of Electrochemical Energy Conversion and Storage
              </p>
            </div>
          
                                                                                                       <div style={{
            background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.2), rgba(59, 130, 246, 0.2))',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            border: '1px solid rgba(30, 64, 175, 0.3)',
            textAlign: 'center',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
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
            <FaBatteryFull style={{ fontSize: '2rem', color: '#1e40af', marginBottom: '0.75rem' }} />
            <h4 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Research Impact</h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', lineHeight: 1.4 }}>
              H-index of 47 with 100+ peer-reviewed publications in battery technology
              </p>
            </div>
          
                                                   <div style={{
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            textAlign: 'center',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
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
            <FaGlobe style={{ fontSize: '2rem', color: '#06b6d4', marginBottom: '0.75rem' }} />
            <h4 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.1rem' }}>International Collaborations</h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', lineHeight: 1.4 }}>
              External advisory board member of EU-funded BatCAT Project
              </p>
            </div>
          
                                                           <div style={{ 
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))', 
            borderRadius: '0.75rem',
            padding: '1.5rem',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
            textAlign: 'center',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
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
            <FaAward style={{ fontSize: '2rem', color: '#3b82f6', marginBottom: '0.75rem' }} />
            <h4 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Industry Collaboration</h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', lineHeight: 1.4 }}>
              Collaborated with Rolls-Royce (UK) during PhD on AI and Robust Design Optimization
            </p>
          </div>
        </div>
      )
    },
    education: {
      title: "Academic Journey",
      content: (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.2), rgba(59, 130, 246, 0.2))',
            borderRadius: '1rem',
            padding: '1.5rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
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
            <FaGraduationCap style={{ fontSize: '2.5rem', color: '#1e40af', marginBottom: '0.75rem' }} />
            <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.25rem' }}>PhD in Mechanical Engineering</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem', marginBottom: '0.75rem' }}>Nanyang Technological University, Singapore</p>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              marginBottom: '0.75rem'
            }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#1e40af', marginBottom: '0.25rem' }}>2010-2015</div>
              <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.8rem' }}>Duration</div>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.8rem' }}>Collaborated with Rolls-Royce (UK)</p>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))',
            borderRadius: '1rem',
            padding: '1.5rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
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
            <FaUniversity style={{ fontSize: '2.5rem', color: '#3b82f6', marginBottom: '0.75rem' }} />
            <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.25rem' }}>Postdoctoral Research</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem', marginBottom: '0.75rem' }}>Nanyang Technological University, Singapore</p>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              marginBottom: '0.75rem'
            }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#3b82f6', marginBottom: '0.25rem' }}>2015-2016</div>
              <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.8rem' }}>Duration</div>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.8rem' }}>Advanced battery research</p>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))',
            borderRadius: '1rem',
            padding: '1.5rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
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
            <FaGraduationCap style={{ fontSize: '2.5rem', color: '#06b6d4', marginBottom: '0.75rem' }} />
            <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.25rem' }}>Bachelor&apos;s Degree</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem', marginBottom: '0.75rem' }}>Mechanical Engineering</p>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              marginBottom: '0.75rem'
            }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#06b6d4', marginBottom: '0.25rem' }}>2006-2010</div>
              <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.8rem' }}>Duration</div>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.8rem' }}>Foundation for research career</p>
          </div>
        </div>
      )
    }
  };

  return (
    <>
      <section id="about" style={{ padding: '3rem 1rem', position: 'relative' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '2rem'
          }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'white', marginBottom: '1rem' }}>About Me</h2>
            <div style={{
              width: '6rem',
              height: '0.4rem',
              background: 'linear-gradient(to right, #60a5fa, #3b82f6, #1e40af)',
              margin: '0 auto',
              borderRadius: '9999px'
            }}></div>
          </div>

          {/* Tab Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem',
            flexWrap: 'wrap'
          }}>
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    background: activeTab === tab.id 
                      ? 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)' 
                      : 'rgba(255, 255, 255, 0.1)',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '0.75rem 1.5rem',
                    color: 'white',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'background 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <TabIcon />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: '1.5rem',
            padding: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.01)';
            e.currentTarget.style.boxShadow = '0 30px 60px -15px rgba(0, 0, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
          }}
          >
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: 900,
              color: 'white',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>
              {tabContent[activeTab].title}
            </h3>
            {tabContent[activeTab].content}
          </div>

          {/* Statistics */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem'
          }}>
            {[
              { number: '100+', label: 'Publications', gradient: 'linear-gradient(to right, #60a5fa, #3b82f6)' },
              { number: '47', label: 'H-index', gradient: 'linear-gradient(to right, #3b82f6, #1e40af)' },
              { number: '20+', label: 'Lab Members', gradient: 'linear-gradient(to right, #1e40af, #06b6d4)' },
              { number: '7', label: 'Courses Taught', gradient: 'linear-gradient(to right, #06b6d4, #3b82f6)' }
            ].map((stat, index) => (
              <div key={index} style={{ 
                textAlign: 'center',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 900,
                  background: stat.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '0.5rem'
                }}>{stat.number}</div>
                <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600, fontSize: '0.9rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
