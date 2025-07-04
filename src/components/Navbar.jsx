import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  const navStyle = {
    background: 'white',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 50
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 0'
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#2563eb',
    textDecoration: 'none'
  };

  const desktopNavStyle = {
    display: 'flex',
    gap: '32px'
  };

  const linkStyle = {
    fontWeight: '500',
    color: '#374151',
    textDecoration: 'none',
    transition: 'color 0.2s',
    cursor: 'pointer'
  };

  const mobileMenuStyle = {
    paddingBottom: '16px'
  };

  const mobileLinkStyle = {
    display: 'block',
    padding: '8px 0',
    fontWeight: '500',
    color: '#374151',
    textDecoration: 'none',
    cursor: 'pointer'
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav style={navStyle}>
      <div className="container">
        <div className="nav-container" style={containerStyle}>
          <a href="#home" style={logoStyle} onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}>
            CodeCrafter
          </a>

          <div className="desktop-nav" style={desktopNavStyle}>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={linkStyle}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mobile-nav" style={{display: 'flex', justifyContent: 'center', gap: '24px', paddingBottom: '16px'}}>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              style={{...linkStyle, fontSize: '14px'}}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;