
import { Code, Smartphone, Globe, Zap } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Globe style={{width: '32px', height: '32px'}} />,
      title: 'Web Development',
      description: 'Modern, responsive websites built with the latest technologies'
    },
    {
      icon: <Smartphone style={{width: '32px', height: '32px'}} />,
      title: 'Mobile-First Design',
      description: 'Optimized experiences across all devices and screen sizes'
    },
    {
      icon: <Code style={{width: '32px', height: '32px'}} />,
      title: 'Custom Solutions',
      description: 'Tailored web applications to meet your specific needs'
    },
    {
      icon: <Zap style={{width: '32px', height: '32px'}} />,
      title: 'Performance Optimization',
      description: 'Fast-loading, SEO-optimized websites for better user experience'
    }
  ];

  const heroStyle = {
    background: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url('https://media.istockphoto.com/id/2173352698/photo/seo-concept-with-magnifying-glass-and-icons-on-yellow-background-2d-illustration.webp?a=1&b=1&s=612x612&w=0&k=20&c=6xoGGh1tFdB1ORmihu_m1nANYM1WiYiuQc9o3IeDX_4=')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '80px 0'
  };

  const heroContentStyle = {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto'
  };

  const titleStyle = {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '24px'
  };

  const buttonGroupStyle = {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap'
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
        <div className="container">
          <div style={heroContentStyle}>
            <h1 style={{...titleStyle, color: '#1d4ed8'}}>
              Crafting Digital
              <span style={{color: '#2563eb'}}> Excellence</span>
            </h1>
            <p style={{fontSize: '20px', color: '#1e40af', marginBottom: '32px', lineHeight: '1.6', fontWeight: '500'}}>
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

      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '16px'}}>
              What I Do
            </h2>
            <p style={{fontSize: '20px', color: '#6b7280', maxWidth: '600px', margin: '0 auto'}}>
              Specialized in creating modern web solutions that drive results
            </p>
          </div>
          
          <div className="grid grid-4">
            {services.map((service, index) => (
              <div key={index} style={serviceCardStyle}>
                <div style={{color: '#2563eb', marginBottom: '16px', display: 'flex', justifyContent: 'center'}}>
                  {service.icon}
                </div>
                <h3 style={{fontSize: '20px', fontWeight: '600', marginBottom: '12px'}}>{service.title}</h3>
                <p style={{color: '#6b7280'}}>{service.description}</p>
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