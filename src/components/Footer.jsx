import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const footerStyle = {
    background: '#111827',
    color: 'white',
    padding: '80px 0'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '32px',
    marginBottom: '32px'
  };

  const linkStyle = {
    display: 'block',
    color: '#d1d5db',
    textDecoration: 'none',
    marginBottom: '8px',
    transition: 'color 0.2s'
  };

  const socialStyle = {
    display: 'flex',
    gap: '16px'
  };

  const socialLinkStyle = {
    color: '#d1d5db',
    transition: 'color 0.2s'
  };

  const borderStyle = {
    borderTop: '1px solid #374151',
    marginTop: '32px',
    paddingTop: '32px',
    textAlign: 'center',
    color: '#9ca3af'
  };

  return (
    <footer style={footerStyle}>
      <div className="container">
        <div style={gridStyle}>
          <div>
            <h3 style={{fontSize: '24px', fontWeight: 'bold', color: '#60a5fa', marginBottom: '16px'}}>CodeCrafter</h3>
            <p style={{color: '#d1d5db'}}>
              Crafting exceptional web experiences with modern technologies.
            </p>
          </div>
          
          <div>
            <h4 style={{fontWeight: '600', marginBottom: '16px'}}>Quick Links</h4>
            <div>
              <a href="/" style={linkStyle}>Home</a>
              <a href="/projects" style={linkStyle}>Projects</a>
              <a href="/pricing" style={linkStyle}>Pricing</a>
              <a href="/contact" style={linkStyle}>Contact</a>
            </div>
          </div>
          
          <div>
            <h4 style={{fontWeight: '600', marginBottom: '16px'}}>Connect</h4>
            <div style={socialStyle}>
              <a href="https://github.com/" style={socialLinkStyle} target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/feed/?nis=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B8QPB%2BBuiQomeJO56s%2BzTEA%3D%3D" style={socialLinkStyle} target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="#" style={socialLinkStyle}>
                <Twitter size={20} />
              </a>
              <a href="mailto:gadielkirwa@gmail.com" style={socialLinkStyle}>
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div style={borderStyle}>
          <p>&copy; 2025 AlgoKings. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;