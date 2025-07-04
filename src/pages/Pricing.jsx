import { Check } from 'lucide-react';

const Pricing = () => {
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
    <div className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h1 style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '16px'}}>
            Transparent Pricing
          </h1>
          <p style={{fontSize: '20px', color: '#6b7280', maxWidth: '600px', margin: '0 auto'}}>
            Choose the perfect package for your project. All packages include modern design, 
            clean code, and professional support.
          </p>
        </div>

        <div className="grid grid-4">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className="card"
              style={{
                position: 'relative',
                padding: '32px',
                ...(pkg.popular ? {
                  border: '2px solid #2563eb',
                  transform: 'scale(1.05)'
                } : {})
              }}
            >
              {pkg.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-16px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#2563eb',
                  color: 'white',
                  padding: '4px 16px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  Most Popular
                </div>
              )}
              
              <div style={{textAlign: 'center', marginBottom: '32px'}}>
                <h3 style={{fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '8px'}}>{pkg.name}</h3>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#2563eb', marginBottom: '8px'}}>{pkg.price}</div>
                <p style={{color: '#6b7280'}}>{pkg.description}</p>
              </div>

              <ul style={{marginBottom: '32px'}}>
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} style={{display: 'flex', alignItems: 'center', marginBottom: '16px'}}>
                    <Check style={{width: '20px', height: '20px', color: '#10b981', marginRight: '12px', flexShrink: 0}} />
                    <span style={{color: '#374151'}}>{feature}</span>
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
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                  cursor: 'pointer',
                  ...(pkg.popular ? {
                    background: '#2563eb',
                    color: 'white'
                  } : {
                    background: '#f3f4f6',
                    color: '#111827'
                  })
                }}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 style={{fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '16px'}}>
            Need Something Custom?
          </h2>
          <p style={{color: '#6b7280', marginBottom: '24px'}}>
            Every project is unique. Let's discuss your specific requirements and create a tailored solution.
          </p>
          <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }); }}>
            Request Custom Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;