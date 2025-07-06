import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create WhatsApp message
    const message = `Hi! I'm ${formData.name}\\n\\nEmail: ${formData.email}\\nSubject: ${formData.subject}\\n\\nMessage:\\n${formData.message}`;
    const whatsappUrl = `https://wa.me/254791260817?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitStatus('success');
    setIsSubmitting(false);
  };

  return (
    <div className="section" style={{
      background: `
        linear-gradient(135deg, rgba(99, 102, 241, 0.8) 0%, rgba(129, 140, 248, 0.6) 50%, rgba(165, 180, 252, 0.4) 100%),
        url('https://media.istockphoto.com/id/2177120871/photo/social-network-connections.webp?a=1&b=1&s=612x612&w=0&k=20&c=R3qtQqjrYwTdBVyq0LI-pLLMb0UIHGE2CrV2LwPBNTE=')
      `,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '300px',
        height: '300px',
        background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
        borderRadius: '50%',
        filter: 'blur(2px)',
        animation: 'float 8s ease-in-out infinite'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '8%',
        width: '200px',
        height: '200px',
        background: 'linear-gradient(45deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
        borderRadius: '50%',
        filter: 'blur(2px)',
        animation: 'float 10s ease-in-out infinite reverse'
      }}></div>
      <div className="container" style={{position: 'relative', zIndex: 2}}>
        <div className="text-center mb-16" style={{animation: 'fadeInUp 1s ease-out'}}>
          <h1 style={{
            fontSize: '3rem', 
            fontWeight: 'bold', 
            color: '#ffffff', 
            marginBottom: '20px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            letterSpacing: '-0.02em'
          }}>
            Let's <span style={{color: '#f97316', textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>Connect</span>
          </h1>
          <p style={{
            fontSize: '22px', 
            color: '#f8fafc', 
            maxWidth: '700px', 
            margin: '0 auto',
            lineHeight: '1.7',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            opacity: '0.95'
          }}>
            Ready to transform your vision into reality? Let's collaborate and create something extraordinary together.
          </p>
        </div>

        <div className="grid grid-2">
          <div style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9))',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}>
            <form onSubmit={handleSubmit}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '24px'}}>
                <div>
                  <label htmlFor="name" style={{display: 'block', fontSize: '14px', fontWeight: '600', color: '#1e40af', marginBottom: '8px'}}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    style={{width: '100%', padding: '14px 18px', border: '2px solid rgba(59, 130, 246, 0.3)', borderRadius: '12px', fontSize: '16px', transition: 'all 0.3s ease', background: 'rgba(255, 255, 255, 0.9)'}}
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" style={{display: 'block', fontSize: '14px', fontWeight: '600', color: '#1e40af', marginBottom: '8px'}}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={{width: '100%', padding: '14px 18px', border: '2px solid rgba(59, 130, 246, 0.3)', borderRadius: '12px', fontSize: '16px', transition: 'all 0.3s ease', background: 'rgba(255, 255, 255, 0.9)'}}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div style={{marginBottom: '24px'}}>
                <label htmlFor="subject" style={{display: 'block', fontSize: '14px', fontWeight: '600', color: '#1e40af', marginBottom: '8px'}}>
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  style={{width: '100%', padding: '14px 18px', border: '2px solid rgba(59, 130, 246, 0.3)', borderRadius: '12px', fontSize: '16px', transition: 'all 0.3s ease', background: 'rgba(255, 255, 255, 0.9)'}}
                  placeholder="Project inquiry, question, etc."
                />
              </div>

              <div style={{marginBottom: '24px'}}>
                <label htmlFor="message" style={{display: 'block', fontSize: '14px', fontWeight: '600', color: '#1e40af', marginBottom: '8px'}}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  style={{width: '100%', padding: '14px 18px', border: '2px solid rgba(59, 130, 246, 0.3)', borderRadius: '12px', fontSize: '16px', resize: 'vertical', transition: 'all 0.3s ease', background: 'rgba(255, 255, 255, 0.9)'}}
                  placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  background: isSubmitting ? '#9ca3af' : 'linear-gradient(135deg, #3b82f6, #2563eb)',
                  color: 'white',
                  padding: '16px 24px',
                  border: 'none',
                  borderRadius: '12px',
                  fontWeight: '600',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  boxShadow: '0 8px 20px rgba(59, 130, 246, 0.4)',
                  transition: 'all 0.3s ease'
                }}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send style={{width: '20px', height: '20px', marginRight: '8px'}} />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div style={{color: '#059669', textAlign: 'center', marginTop: '16px', fontWeight: '600', fontSize: '16px'}}>
                  🎉 Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === 'error' && (
                <div style={{color: '#dc2626', textAlign: 'center', marginTop: '16px', fontWeight: '600', fontSize: '16px'}}>
                  ❌ Sorry, there was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8))',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}>
            <h2 style={{
              fontSize: '28px', 
              fontWeight: 'bold', 
              color: '#1e40af', 
              marginBottom: '24px',
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
            }}>
              Get In <span style={{color: '#3b82f6'}}>Touch</span>
            </h2>
            <p style={{
              color: '#1e3a8a', 
              marginBottom: '32px',
              fontSize: '16px',
              lineHeight: '1.6',
              fontWeight: '500'
            }}>
              I'm passionate about turning innovative ideas into digital masterpieces. 
              Let's start a conversation and build something amazing together.
            </p>

            <div style={{marginBottom: '32px'}}>
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '24px'}}>
                <Mail style={{width: '24px', height: '24px', color: '#2563eb', marginRight: '16px'}} />
                <div>
                  <h3 style={{fontWeight: '600', color: '#1e40af'}}>Email</h3>
                  <a href="mailto:gadielkirwa@gmail.com" style={{color: '#3b82f6', textDecoration: 'none', fontWeight: '500'}}>gadielkirwa@gmail.com</a>
                </div>
              </div>
              
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '24px'}}>
                <Phone style={{width: '24px', height: '24px', color: '#2563eb', marginRight: '16px'}} />
                <div>
                  <h3 style={{fontWeight: '600', color: '#1e40af'}}>Phone</h3>
                  <p style={{color: '#3b82f6', fontWeight: '500'}}>0791260817</p>
                </div>
              </div>
              
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '24px'}}>
                <MessageCircle style={{width: '24px', height: '24px', color: '#2563eb', marginRight: '16px'}} />
                <div>
                  <h3 style={{fontWeight: '600', color: '#1e40af'}}>WhatsApp</h3>
                  <a href="https://wa.me/254791260817" style={{color: '#3b82f6', textDecoration: 'none', fontWeight: '500'}} target="_blank" rel="noopener noreferrer">+254 791 260 817</a>
                </div>
              </div>
              
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '24px'}}>
                <MapPin style={{width: '24px', height: '24px', color: '#2563eb', marginRight: '16px'}} />
                <div>
                  <h3 style={{fontWeight: '600', color: '#1e40af'}}>Location</h3>
                  <p style={{color: '#3b82f6', fontWeight: '500'}}>Remote & On-site Available</p>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{fontWeight: '600', marginBottom: '16px', color: '#1e40af'}}>Response Time</h3>
              <p style={{color: '#1e3a8a', lineHeight: '1.6', fontWeight: '500'}}>
                I typically respond to all inquiries within 24 hours. For urgent projects, 
                please mention it in your message and I'll prioritize your request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;