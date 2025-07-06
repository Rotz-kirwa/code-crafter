import React from 'react';
import { Code, Smartphone, Globe, Zap, GraduationCap, Building2, ShoppingCart, Users } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: GraduationCap,
      title: 'School Websites',
      description: 'Complete educational platforms with student portals, course management, and interactive learning tools'
    },
    {
      icon: Building2,
      title: 'Business Websites',
      description: 'Professional corporate sites with CMS, analytics, and lead generation features'
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Full online stores with payment integration, inventory management, and customer accounts'
    },
    {
      icon: Users,
      title: 'Interactive Web Apps',
      description: 'Dynamic applications with real-time features, user authentication, and custom functionality'
    },
    {
      icon: Globe,
      title: 'Portfolio Websites',
      description: 'Stunning showcase sites for creatives, professionals, and agencies'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Responsive designs that work perfectly on all devices and screen sizes'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Bespoke web solutions tailored to your unique business requirements'
    },
    {
      icon: Zap,
      title: 'Performance & SEO',
      description: 'Lightning-fast, search-optimized websites that rank higher and convert better'
    }
  ];

  const heroStyle = {
    background: `
      linear-gradient(135deg, rgba(37, 99, 235, 0.8) 0%, rgba(59, 130, 246, 0.6) 50%, rgba(147, 197, 253, 0.4) 100%),
      url('https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aHVtYW58ZW58MHx8MHx8fDA%3D')
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    padding: '120px 20px 100px 20px',
    minHeight: '85vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden'
  };

  const heroContentStyle = {
    textAlign: 'center',
    maxWidth: '900px',
    margin: '0 auto',
    width: '100%',
    position: 'relative',
    zIndex: 2,
    animation: 'fadeInUp 1s ease-out'
  };

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
    fontWeight: '800',
    marginBottom: '32px',
    lineHeight: '1.1',
    display: 'block',
    overflow: 'visible',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    letterSpacing: '-0.02em'
  };

  const buttonGroupStyle = {
    display: 'flex',
    gap: '24px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '48px'
  };

  const decorativeStyle = {
    position: 'absolute',
    top: '20%',
    right: '10%',
    width: '200px',
    height: '200px',
    background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
    borderRadius: '50%',
    filter: 'blur(1px)',
    animation: 'float 6s ease-in-out infinite'
  };

  const decorativeStyle2 = {
    position: 'absolute',
    bottom: '15%',
    left: '5%',
    width: '150px',
    height: '150px',
    background: 'linear-gradient(45deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
    borderRadius: '50%',
    filter: 'blur(1px)',
    animation: 'float 8s ease-in-out infinite reverse'
  };

  const serviceCardStyle = {
    textAlign: 'center',
    padding: '24px',
    borderRadius: '12px',
    transition: 'box-shadow 0.3s'
  };

  const ctaStyle = {
    background: '#2563eb',
    color: 'white',
    padding: '80px 0',
    textAlign: 'center'
  };

  const ctaButtonStyle = {
    background: 'white',
    color: '#2563eb',
    padding: '16px 32px',
    borderRadius: '8px',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'background 0.2s'
  };

  return (
    <div>
      <section style={heroStyle}>
        <div style={decorativeStyle}></div>
        <div style={decorativeStyle2}></div>
        <div className="container">
          <div style={heroContentStyle}>
            <h1 style={{...titleStyle, color: '#ffffff'}}>
              Crafting Digital <span style={{color: '#fbbf24', textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>Excellence</span>
            </h1>
            <p style={{
              fontSize: 'clamp(18px, 3vw, 24px)', 
              color: '#f8fafc', 
              lineHeight: '1.8', 
              fontWeight: '400', 
              maxWidth: '750px', 
              margin: '0 auto 40px auto',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              opacity: '0.95'
            }}>
              Professional web development services that transform your ideas into 
              powerful, scalable digital solutions. From concept to deployment.
            </p>
            <div style={buttonGroupStyle}>
              <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' }); }}>
                View My Work
              </a>
              <a href="#contact" className="btn-secondary" onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }); }}>
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{
        background: `
          linear-gradient(135deg, rgba(139, 69, 19, 0.8) 0%, rgba(34, 197, 94, 0.6) 50%, rgba(168, 85, 247, 0.4) 100%),
          url('https://images.unsplash.com/photo-1507187632231-5beb21a654a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8NGslMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '15%',
          width: '220px',
          height: '220px',
          background: 'linear-gradient(45deg, rgba(255,255,255,0.15), rgba(255,255,255,0.08))',
          borderRadius: '50%',
          filter: 'blur(2px)',
          animation: 'float 7s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '12%',
          width: '160px',
          height: '160px',
          background: 'linear-gradient(45deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))',
          borderRadius: '50%',
          filter: 'blur(2px)',
          animation: 'float 9s ease-in-out infinite reverse'
        }}></div>
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <div className="text-center mb-16" style={{animation: 'fadeInUp 1s ease-out'}}>
            <h2 style={{
              fontSize: '3rem', 
              fontWeight: 'bold', 
              color: '#ffffff', 
              marginBottom: '20px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              letterSpacing: '-0.02em'
            }}>
              What I <span style={{color: '#a855f7', textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>Do</span>
            </h2>
            <p style={{
              fontSize: '22px', 
              color: '#f8fafc', 
              maxWidth: '700px', 
              margin: '0 auto',
              lineHeight: '1.7',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              opacity: '0.95'
            }}>
              From school websites to e-commerce platforms - any interactive website you envision, I can build
            </p>
          </div>
          
          <div className="grid grid-4" style={{gap: '32px'}}>
            {services.map((service, index) => (
              <div 
                key={index} 
                style={{
                  textAlign: 'center', 
                  padding: '40px',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9))',
                  borderRadius: '20px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.25)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                }}
              >
                <div style={{
                  background: 'linear-gradient(135deg, #a855f7, #7c3aed)', 
                  width: '90px', 
                  height: '90px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 24px auto',
                  boxShadow: '0 8px 20px rgba(168, 85, 247, 0.4)',
                  transition: 'all 0.3s ease'
                }}>
                  <service.icon size={45} color="white" />
                </div>
                <h3 style={{
                  fontSize: '26px', 
                  fontWeight: 'bold', 
                  color: '#7c2d12', 
                  marginBottom: '16px',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.05)'
                }}>
                  {service.title}
                </h3>
                <p style={{
                  color: '#a16207', 
                  lineHeight: '1.6',
                  fontWeight: '500',
                  fontSize: '16px'
                }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={ctaStyle}>
        <div className="container">
          <h2 style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '16px'}}>
            Ready to Start Your Project?
          </h2>
          <p style={{fontSize: '20px', marginBottom: '32px', opacity: 0.9}}>
            Let's discuss how I can help bring your vision to life
          </p>
          <a href="#contact" style={ctaButtonStyle} onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }); }}>
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;