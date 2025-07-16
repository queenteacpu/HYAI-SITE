import React from "react";

const AbstractBackground = ({ children, variant = "default" }) => {
  const backgroundStyles = {
    default: {
      background: `
        radial-gradient(circle at 20% 30%, rgba(0, 124, 145, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(255, 122, 0, 0.05) 0%, transparent 50%),
        linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)
      `,
    },
    teal: {
      background: `
        radial-gradient(circle at 30% 40%, rgba(255, 122, 0, 0.1) 0%, transparent 40%),
        linear-gradient(135deg, #007C91 0%, #005f73 100%)
      `,
    },
    grey: {
      background: `
        radial-gradient(circle at 60% 20%, rgba(0, 124, 145, 0.08) 0%, transparent 50%),
        linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)
      `,
    }
  };

  return (
    <div style={backgroundStyles[variant]}>
      {children}
    </div>
  );
};

const FloatingDots = ({ count = 6 }) => {
  return (
    <div style={{ 
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      pointerEvents: 'none'
    }}>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            backgroundColor: i % 2 === 0 ? '#007C91' : '#FF7A00',
            borderRadius: '50%',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            opacity: Math.random() * 0.3 + 0.1,
            animation: `float ${Math.random() * 20 + 10}s ease-in-out infinite`
          }}
        />
      ))}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            33% { transform: translateY(-20px) translateX(10px); }
            66% { transform: translateY(10px) translateX(-5px); }
          }
        `}
      </style>
    </div>
  );
};

const DataLines = () => {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      pointerEvents: 'none'
    }}>
      <svg width="100%" height="100%" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#007C91" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#007C91" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path
          d="M0,100 Q200,50 400,80 T800,70 L1000,60"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          opacity="0.4"
        />
        <path
          d="M0,200 Q300,150 600,180 T1200,170"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />
      </svg>
    </div>
  );
};

const HeroSection = () => {
  return (
    <AbstractBackground variant="default">
      <div style={{
        position: 'relative',
        padding: '8rem 2rem',
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <FloatingDots />
        <DataLines />
        
        <div style={{ 
          maxWidth: '900px', 
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          {/* Abstract Hero Shape */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '200px',
            height: '200px',
            background: 'linear-gradient(135deg, rgba(0, 124, 145, 0.1) 0%, rgba(255, 122, 0, 0.05) 100%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            zIndex: -1
          }} />
          
          <h1 style={{ 
            fontSize: '4rem', 
            fontWeight: '300',
            marginBottom: '1.5rem',
            lineHeight: '1.1',
            color: '#1E1E1E',
            letterSpacing: '-0.02em'
          }}>
            HyAI: <span style={{ color: '#007C91', fontWeight: '600' }}>Build</span>
          </h1>
          
          <p style={{ 
            fontSize: '1.4rem', 
            marginBottom: '2rem',
            color: '#6c757d',
            maxWidth: '700px',
            margin: '0 auto 2rem',
            fontWeight: '400',
            lineHeight: '1.6'
          }}>
            The Intelligence Core Behind Harmony's Clinical Automation
          </p>
          
          <p style={{ 
            fontSize: '1.1rem', 
            marginBottom: '3rem',
            color: '#6c757d',
            maxWidth: '600px',
            margin: '0 auto 3rem',
            lineHeight: '1.7'
          }}>
            Ethical, modular automation across clinical workflows. Designed for compliance-first environments, 
            empowering clinicians with trust, transparency, and total control.
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            marginTop: '3rem'
          }}>
            <button style={{
              background: '#FF7A00',
              color: 'white',
              border: 'none',
              padding: '1rem 2.5rem',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(255, 122, 0, 0.3)'
            }}>
              Request Access
            </button>
            <button style={{
              background: 'transparent',
              color: '#007C91',
              border: '2px solid #007C91',
              padding: '1rem 2.5rem',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </AbstractBackground>
  );
};

const AboutSection = () => {
  return (
    <AbstractBackground variant="grey">
      <div style={{ 
        padding: '8rem 2rem',
        textAlign: 'center',
        position: 'relative'
      }}>
        <FloatingDots count={4} />
        
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          {/* Abstract shape */}
          <div style={{
            position: 'absolute',
            top: '-30px',
            right: '10%',
            width: '150px',
            height: '150px',
            background: 'linear-gradient(45deg, rgba(0, 124, 145, 0.1) 0%, rgba(0, 124, 145, 0.05) 100%)',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            filter: 'blur(20px)',
            zIndex: -1
          }} />
          
          <h2 style={{ 
            fontSize: '2.8rem', 
            color: '#1E1E1E',
            marginBottom: '3rem',
            fontWeight: '300',
            letterSpacing: '-0.02em'
          }}>
            About <span style={{ color: '#007C91', fontWeight: '600' }}>HyAI</span>
          </h2>
          
          <p style={{ 
            fontSize: '1.3rem', 
            color: '#495057',
            maxWidth: '800px',
            margin: '0 auto 2.5rem',
            lineHeight: '1.8',
            fontWeight: '400'
          }}>
            HyAI is Harmony's core AI framework. It blends structured logic, natural language processing, 
            and real-time data handling to support mental health and capacity assessments.
          </p>
          
          <div style={{
            display: 'inline-block',
            background: 'rgba(0, 124, 145, 0.1)',
            padding: '1.5rem 2rem',
            borderRadius: '16px',
            border: '1px solid rgba(0, 124, 145, 0.1)'
          }}>
            <p style={{ 
              fontSize: '1rem', 
              color: '#007C91',
              fontWeight: '500',
              margin: 0,
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Built in collaboration with doctors, assessors, QA leads, and data scientists
            </p>
          </div>
        </div>
      </div>
    </AbstractBackground>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      title: "Intelligent Form Support",
      description: "Context-aware suggestions while completing Form 3, 4, 5 and related documentation.",
      icon: "🔮"
    },
    {
      title: "Smart Allocation",
      description: "AI-powered matching based on geography, urgency, and clinical fit.",
      icon: "🎯"
    },
    {
      title: "Forecasting & Renewal",
      description: "Live dashboards for expiry risk, backlog modelling, and assessor workloads.",
      icon: "📊"
    },
    {
      title: "Ethics & Governance",
      description: "Built-in bias detection, role-based access control, and version auditing.",
      icon: "🛡️"
    }
  ];

  return (
    <div style={{ 
      padding: '8rem 2rem',
      backgroundColor: '#ffffff',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: '2.8rem', 
          color: '#1E1E1E',
          marginBottom: '4rem',
          textAlign: 'center',
          fontWeight: '300',
          letterSpacing: '-0.02em'
        }}>
          Core <span style={{ color: '#007C91', fontWeight: '600' }}>Capabilities</span>
        </h2>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2.5rem'
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
              padding: '2.5rem',
              borderRadius: '20px',
              boxShadow: '0 10px 40px rgba(0, 124, 145, 0.08)',
              border: '1px solid rgba(0, 124, 145, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Abstract accent shape */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, rgba(255, 122, 0, 0.1) 0%, rgba(255, 122, 0, 0.05) 100%)',
                borderRadius: '50%',
                filter: 'blur(20px)'
              }} />
              
              <div style={{
                fontSize: '2rem',
                marginBottom: '1.5rem',
                filter: 'grayscale(100%)',
                opacity: '0.7'
              }}>
                {feature.icon}
              </div>
              
              <h3 style={{ 
                fontSize: '1.3rem', 
                color: '#007C91',
                marginBottom: '1rem',
                fontWeight: '600'
              }}>
                {feature.title}
              </h3>
              
              <p style={{ 
                color: '#495057',
                lineHeight: '1.7',
                margin: 0,
                fontSize: '1rem'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ScaleSection = () => {
  const capabilities = [
    "Real-time triage, form assistance, and workflow automation",
    "Modular architecture: logic engine + NLP + audit layer",
    "Fully explainable outputs with optional blockchain audit trails",
    "Zero patient data used for training — privacy-first by design",
    "Secure integration with systems like Mosaic, Liquid Logic, Eclipse"
  ];

  return (
    <AbstractBackground variant="teal">
      <div style={{ 
        padding: '8rem 2rem',
        color: 'white',
        position: 'relative'
      }}>
        <FloatingDots count={8} />
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h2 style={{ 
            fontSize: '2.8rem', 
            marginBottom: '4rem',
            textAlign: 'center',
            fontWeight: '300',
            letterSpacing: '-0.02em'
          }}>
            Designed for <span style={{ fontWeight: '600' }}>Healthcare at Scale</span>
          </h2>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '2.5rem'
          }}>
            {capabilities.map((capability, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.5rem',
                padding: '1.5rem',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{
                  background: '#FF7A00',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  marginTop: '0.5rem',
                  flexShrink: 0,
                  boxShadow: '0 0 20px rgba(255, 122, 0, 0.5)'
                }}></div>
                <p style={{ 
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  margin: 0,
                  opacity: '0.95'
                }}>
                  {capability}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AbstractBackground>
  );
};

const StatsSection = () => {
  const stats = [
    { number: "300,000+", label: "DoLS applications annually", color: "#007C91" },
    { number: "19%", label: "Completed within statutory timeframes", color: "#FF7A00" },
    { number: "30%", label: "Assessor time lost to avoidable admin", color: "#007C91" }
  ];

  return (
    <AbstractBackground variant="grey">
      <div style={{ 
        padding: '8rem 2rem',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.8rem', 
            color: '#1E1E1E',
            marginBottom: '4rem',
            fontWeight: '300',
            letterSpacing: '-0.02em'
          }}>
            Why <span style={{ color: '#007C91', fontWeight: '600' }}>Now</span>
          </h2>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem'
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{
                background: '#ffffff',
                padding: '3rem 2rem',
                borderRadius: '20px',
                boxShadow: '0 10px 40px rgba(0, 124, 145, 0.08)',
                border: '1px solid rgba(0, 124, 145, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Abstract background shape */}
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '100px',
                  height: '100px',
                  background: `linear-gradient(135deg, ${stat.color}20 0%, ${stat.color}10 100%)`,
                  borderRadius: '50%',
                  filter: 'blur(30px)'
                }} />
                
                <div style={{ 
                  fontSize: '3.5rem', 
                  color: stat.color,
                  fontWeight: '300',
                  marginBottom: '1rem',
                  lineHeight: '1'
                }}>
                  {stat.number}
                </div>
                
                <p style={{ 
                  color: '#495057',
                  fontSize: '1.1rem',
                  margin: 0,
                  lineHeight: '1.5'
                }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AbstractBackground>
  );
};

const CTASection = () => {
  return (
    <AbstractBackground variant="teal">
      <div style={{
        padding: '8rem 2rem',
        textAlign: 'center',
        color: 'white',
        position: 'relative'
      }}>
        <FloatingDots count={6} />
        
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h2 style={{ 
            fontSize: '2.8rem', 
            marginBottom: '2rem',
            fontWeight: '300',
            letterSpacing: '-0.02em'
          }}>
            Pilot & <span style={{ fontWeight: '600' }}>Access</span>
          </h2>
          
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '3rem',
            opacity: '0.9',
            lineHeight: '1.8',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}>
            HyAI: Build is currently being piloted with a closed group of NHS and LA partners.
            <br />
            <br />
            Interested in testing the SDK or integrating a lightweight module?
          </p>
          
          <button style={{
            background: '#FF7A00',
            color: 'white',
            border: 'none',
            padding: '1.2rem 3rem',
            borderRadius: '16px',
            fontSize: '1.1rem',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 30px rgba(255, 122, 0, 0.4)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Request Access
          </button>
        </div>
      </div>
    </AbstractBackground>
  );
};

const Footer = () => {
  return (
    <div style={{ 
      backgroundColor: '#1E1E1E',
      color: 'white',
      padding: '4rem 2rem',
      textAlign: 'center',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ 
          fontSize: '1rem',
          opacity: '0.7',
          margin: 0,
          letterSpacing: '0.5px'
        }}>
          Built by Harmony Nexus. Powered by trust, shaped by care.
        </p>
      </div>
    </div>
  );
};

function App() {
  return (
    <div style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Inter", Roboto, "Helvetica Neue", Arial, sans-serif',
      margin: 0,
      padding: 0,
      lineHeight: '1.6',
      color: '#1E1E1E'
    }}>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ScaleSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
