import { useState } from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [hoveredIndex, setHoveredIndex] = useState(1); // Default to popular package

  const packages = [
    {
      name: 'Basic Website',
      price: 'KSH 20,000',
      description: 'Perfect for small businesses and personal brands',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Basic SEO optimization',
        'Contact form',
        'Social media integration',
        '30 days support',
        'Mobile-friendly'
      ],
      popular: false
    },
    {
      name: 'Business Website',
      price: 'KSH 35,000',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Up to 15 pages',
        'Custom design',
        'Advanced SEO',
        'Content management system',
        'Analytics integration',
        'Blog functionality',
        '90 days support',
        'Performance optimization'
      ],
      popular: true
    },
    {
      name: 'E-commerce Site',
      price: 'KSH 50,000',
      description: 'Complete online store solution',
      features: [
        'Unlimited products',
        'Payment gateway integration',
        'Inventory management',
        'Order tracking',
        'Customer accounts',
        'Admin dashboard',
        '6 months support',
        'Security features'
      ],
      popular: false
    },
    {
      name: 'Web Application',
      price: 'Custom Quote',
      description: 'Complex web applications and custom solutions',
      features: [
        'Custom functionality',
        'Database design',
        'API development',
        'User authentication',
        'Third-party integrations',
        'Scalable architecture',
        'Ongoing maintenance',
        'Technical consultation'
      ],
      popular: false
    }
  ];

  return (
    <div className="section" style={{
      background: `
        linear-gradient(135deg, rgba(220, 38, 127, 0.8) 0%, rgba(236, 72, 153, 0.6) 50%, rgba(251, 113, 133, 0.4) 100%),
        url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aHVtYW4lMjByZXNvdXJjZXxlbnwwfHwwfHx8MA%3D%3D')
      `,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <div className="container">
        <div className="text-center mb-16">
          <h1 style={{
            fontSize: '2.8rem', 
            fontWeight: 'bold', 
            color: '#ffffff', 
            marginBottom: '16px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Simple Pricing. <span style={{color: '#fde047', textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>Powerful Results.</span>
          </h1>
          <p style={{
            fontSize: '22px', 
            color: '#f8fafc', 
            maxWidth: '650px', 
            margin: '0 auto',
            fontWeight: '400',
            lineHeight: '1.6',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            opacity: '0.95'
          }}>
            Choose the plan that works for you. Every package includes modern design, 
            clean code, and dedicated care.
          </p>
        </div>

        <div className="grid grid-4" style={{position: 'relative'}}>
          {/* Moving highlighter */}
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: `${hoveredIndex * 25}%`,
              width: '25%',
              height: '100%',
              background: 'linear-gradient(135deg, rgba(220, 38, 127, 0.2), rgba(236, 72, 153, 0.15))',
              borderRadius: '20px',
              border: '3px solid rgba(220, 38, 127, 0.4)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              pointerEvents: 'none',
              zIndex: 0,
              boxShadow: '0 25px 50px rgba(220, 38, 127, 0.3)'
            }}
          />
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className="card"
              style={{
                position: 'relative',
                padding: '40px',
                background: 'rgba(255, 255, 255, 0.95)',
                border: '2px solid rgba(220, 38, 127, 0.2)',
                borderRadius: '16px',
                boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                transform: pkg.popular ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                zIndex: 1
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(1)}
            >
              {pkg.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-18px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #dc2677, #ec4899)',
                  color: 'white',
                  padding: '8px 20px',
                  borderRadius: '25px',
                  fontSize: '14px',
                  fontWeight: '600',
                  boxShadow: '0 4px 12px rgba(220, 38, 127, 0.4)',
                  letterSpacing: '0.5px'
                }}>
                  ⭐ MOST POPULAR
                </div>
              )}
              
              <div style={{textAlign: 'center', marginBottom: '32px'}}>
                <h3 style={{fontSize: '26px', fontWeight: 'bold', color: '#1e40af', marginBottom: '8px', textShadow: '1px 1px 2px rgba(0,0,0,0.05)'}}>{pkg.name}</h3>
                <div style={{fontSize: '2.8rem', fontWeight: 'bold', color: '#dc2677', marginBottom: '8px', textShadow: '1px 1px 2px rgba(0,0,0,0.1)'}}>{pkg.price}</div>
                <p style={{color: '#1e3a8a', fontWeight: '500', lineHeight: '1.5'}}>{pkg.description}</p>
              </div>

              <ul style={{marginBottom: '32px'}}>
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} style={{display: 'flex', alignItems: 'center', marginBottom: '16px'}}>
                    <Check style={{width: '22px', height: '22px', color: '#dc2677', marginRight: '12px', flexShrink: 0, background: 'rgba(220, 38, 127, 0.1)', borderRadius: '50%', padding: '2px'}} />
                    <span style={{color: '#1e40af', fontWeight: '500'}}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }); }}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'center',
                  padding: '16px 24px',
                  borderRadius: '12px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  fontSize: '16px',
                  ...(pkg.popular ? {
                    background: 'linear-gradient(135deg, #dc2677, #ec4899)',
                    color: 'white',
                    boxShadow: '0 8px 20px rgba(220, 38, 127, 0.4)'
                  } : {
                    background: 'linear-gradient(135deg, rgba(220, 38, 127, 0.1), rgba(236, 72, 153, 0.05))',
                    color: '#dc2677',
                    border: '2px solid rgba(220, 38, 127, 0.3)'
                  })
                }}
                onMouseOver={(e) => {
                  if (pkg.popular) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 12px 25px rgba(220, 38, 127, 0.5)';
                  } else {
                    e.target.style.background = 'linear-gradient(135deg, rgba(220, 38, 127, 0.2), rgba(236, 72, 153, 0.1))';
                  }
                }}
                onMouseOut={(e) => {
                  if (pkg.popular) {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 8px 20px rgba(220, 38, 127, 0.4)';
                  } else {
                    e.target.style.background = 'linear-gradient(135deg, rgba(220, 38, 127, 0.1), rgba(236, 72, 153, 0.05))';
                  }
                }}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '80px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(220, 38, 127, 0.15), rgba(236, 72, 153, 0.08))',
          padding: '60px 40px',
          borderRadius: '20px',
          border: '2px solid rgba(220, 38, 127, 0.3)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{
            fontSize: '2.2rem', 
            fontWeight: 'bold', 
            color: '#ffffff', 
            marginBottom: '20px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Looking for Something <span style={{color: '#fde047', textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>Unique?</span>
          </h2>
          <p style={{
            color: '#f8fafc', 
            marginBottom: '32px',
            fontSize: '18px',
            fontWeight: '500',
            maxWidth: '500px',
            margin: '0 auto 32px auto',
            lineHeight: '1.6'
          }}>
            Every vision deserves a custom approach. Let's collaborate to bring your unique ideas to life with precision and creativity.
          </p>
          <a href="#contact" 
             onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }); }}
             style={{
               background: 'linear-gradient(135deg, #dc2677, #ec4899)',
               color: 'white',
               padding: '16px 32px',
               borderRadius: '12px',
               fontWeight: '600',
               textDecoration: 'none',
               fontSize: '18px',
               boxShadow: '0 8px 20px rgba(220, 38, 127, 0.4)',
               transition: 'all 0.3s ease',
               display: 'inline-block'
             }}
             onMouseOver={(e) => {
               e.target.style.transform = 'translateY(-2px)';
               e.target.style.boxShadow = '0 12px 25px rgba(220, 38, 127, 0.5)';
             }}
             onMouseOut={(e) => {
               e.target.style.transform = 'translateY(0)';
               e.target.style.boxShadow = '0 8px 20px rgba(220, 38, 127, 0.4)';
             }}
          >
            Start Your Custom Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;