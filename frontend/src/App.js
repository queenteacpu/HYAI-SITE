import React from "react";

const HeroSection = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #007C91 0%, #005f73 100%)',
      color: 'white',
      padding: '6rem 2rem',
      textAlign: 'center',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          fontWeight: '700',
          marginBottom: '1.5rem',
          lineHeight: '1.2'
        }}>
          HyAI: Build
        </h1>
        <p style={{ 
          fontSize: '1.5rem', 
          marginBottom: '2rem',
          opacity: '0.9',
          maxWidth: '800px',
          margin: '0 auto 2rem'
        }}>
          The Intelligence Core Behind Harmony's Clinical Automation
        </p>
        <p style={{ 
          fontSize: '1.2rem', 
          marginBottom: '3rem',
          opacity: '0.8',
          maxWidth: '600px',
          margin: '0 auto 3rem'
        }}>
          HyAI: Build enables ethical, modular automation across clinical workflows. 
          Designed for compliance-first environments, it empowers clinicians to move faster—with trust, transparency, and total control.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button style={{
            background: '#FF7A00',
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>
            Request Access
          </button>
          <button style={{
            background: 'transparent',
            color: 'white',
            border: '2px solid white',
            padding: '1rem 2rem',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div style={{ 
      padding: '6rem 2rem',
      backgroundColor: '#E8F0F1',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          color: '#1E1E1E',
          marginBottom: '2rem'
        }}>
          About HyAI
        </h2>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#1E1E1E',
          maxWidth: '800px',
          margin: '0 auto 2rem',
          lineHeight: '1.6'
        }}>
          HyAI is Harmony's core AI framework. It blends structured logic, natural language processing, 
          and real-time data handling to support mental health and capacity assessments, including DoLS, 
          Care Act, and S49 processes.
        </p>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#007C91',
          fontStyle: 'italic',
          fontWeight: '600'
        }}>
          Built in collaboration with doctors, assessors, QA leads, and data scientists.
        </p>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      title: "Intelligent Form Support",
      description: "Context-aware suggestions while completing Form 3, 4, 5 and related documentation."
    },
    {
      title: "Smart Allocation",
      description: "AI-powered matching based on geography, urgency, and clinical fit."
    },
    {
      title: "Forecasting & Renewal Tracking",
      description: "Live dashboards for expiry risk, backlog modelling, and assessor workloads."
    },
    {
      title: "Ethics & Governance",
      description: "Built-in bias detection, role-based access control, and version auditing."
    }
  ];

  return (
    <div style={{ 
      padding: '6rem 2rem',
      backgroundColor: '#FFFFFF'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          color: '#1E1E1E',
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
          Core Capabilities
        </h2>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              background: '#E8F0F1',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 124, 145, 0.1)',
              border: '1px solid rgba(0, 124, 145, 0.1)'
            }}>
              <h3 style={{ 
                fontSize: '1.3rem', 
                color: '#007C91',
                marginBottom: '1rem',
                fontWeight: '600'
              }}>
                {feature.title}
              </h3>
              <p style={{ 
                color: '#1E1E1E',
                lineHeight: '1.6'
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
    <div style={{ 
      padding: '6rem 2rem',
      backgroundColor: '#007C91',
      color: 'white'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
          Designed for Healthcare at Scale
        </h2>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {capabilities.map((capability, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem'
            }}>
              <div style={{
                background: '#FF7A00',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                marginTop: '0.5rem',
                flexShrink: 0
              }}></div>
              <p style={{ 
                fontSize: '1.1rem',
                lineHeight: '1.6',
                margin: 0
              }}>
                {capability}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { number: "300,000+", label: "DoLS applications annually" },
    { number: "19%", label: "Completed within statutory timeframes" },
    { number: "30%", label: "Assessor time lost to avoidable admin" }
  ];

  return (
    <div style={{ 
      padding: '6rem 2rem',
      backgroundColor: '#E8F0F1',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          color: '#1E1E1E',
          marginBottom: '3rem'
        }}>
          Why Now
        </h2>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {stats.map((stat, index) => (
            <div key={index} style={{
              background: '#FFFFFF',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 124, 145, 0.1)',
              border: '1px solid rgba(0, 124, 145, 0.1)'
            }}>
              <div style={{ 
                fontSize: '3rem', 
                color: '#FF7A00',
                fontWeight: '700',
                marginBottom: '0.5rem'
              }}>
                {stat.number}
              </div>
              <p style={{ 
                color: '#1E1E1E',
                fontSize: '1.1rem',
                margin: 0
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CTASection = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #007C91 0%, #005f73 100%)',
      color: 'white',
      padding: '6rem 2rem',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '2rem'
        }}>
          Pilot & Access
        </h2>
        <p style={{ 
          fontSize: '1.2rem', 
          marginBottom: '3rem',
          opacity: '0.9',
          lineHeight: '1.6'
        }}>
          HyAI: Build is currently being piloted with a closed group of NHS and LA partners.
          <br />
          Interested in testing the SDK or integrating a lightweight module?
        </p>
        <button style={{
          background: '#FF7A00',
          color: 'white',
          border: 'none',
          padding: '1.2rem 2.5rem',
          borderRadius: '8px',
          fontSize: '1.2rem',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}>
          Request Access
        </button>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div style={{ 
      backgroundColor: '#1E1E1E',
      color: 'white',
      padding: '3rem 2rem',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ 
          fontSize: '1.1rem',
          opacity: '0.8',
          margin: 0
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
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      margin: 0,
      padding: 0,
      lineHeight: '1.6'
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
