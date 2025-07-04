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
    const message = `Hi! I'm ${formData.name}\n\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
    const whatsappUrl = `https://wa.me/0791260817?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitStatus('success');
    setIsSubmitting(false);
  };

  return (
    <div className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h1 style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '16px'}}>
            Get In Touch
          </h1>
          <p style={{fontSize: '20px', color: '#6b7280', maxWidth: '600px', margin: '0 auto'}}>
            Ready to start your project? Let's discuss how I can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-2">
          <div>
            <h2 style={{fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '24px'}}>
              Let's Connect
            </h2>
            <p style={{color: '#6b7280', marginBottom: '32px'}}>
              I'm always excited to work on new projects and collaborate with amazing people. 
              Reach out and let's create something extraordinary together.
            </p>

            <div style={{marginBottom: '32px'}}>
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '24px'}}>
                <Mail style={{width: '24px', height: '24px', color: '#2563eb', marginRight: '16px'}} />
                <div>
                  <h3 style={{fontWeight: '600'}}>Email</h3>
                  <a href="mailto:gadielkirwa@gmail.com" style={{color: '#6b7280', textDecoration: 'none'}}>gadielkirwa@gmail.com</a>
                </div>
              </div>
              
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '24px'}}>
                <Phone style={{width: '24px', height: '24px', color: '#2563eb', marginRight: '16px'}} />
                <div>
                  <h3 style={{fontWeight: '600'}}>Phone</h3>
                  <p style={{color: '#6b7280'}}>0791260817</p>
                </div>
              </div>
              
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '24px'}}>
                <MessageCircle style={{width: '24px', height: '24px', color: '#2563eb', marginRight: '16px'}} />
                <div>
                  <h3 style={{fontWeight: '600'}}>WhatsApp</h3>
                  <a href="https://wa.me/0791260817" style={{color: '#6b7280', textDecoration: 'none'}} target="_blank" rel="noopener noreferrer">0791260817</a>
                </div>
              </div>
              
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '24px'}}>
                <MapPin style={{width: '24px', height: '24px', color: '#2563eb', marginRight: '16px'}} />
                <div>
                  <h3 style={{fontWeight: '600'}}>Location</h3>
                  <p style={{color: '#6b7280'}}>Remote & On-site Available</p>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{fontWeight: '600', marginBottom: '16px'}}>Response Time</h3>
              <p style={{color: '#6b7280'}}>
                I typically respond to all inquiries within 24 hours. For urgent projects, 
                please mention it in your message.
              </p>
            </div>
          </div>

          <div style={{background: '#f9fafb', padding: '32px', borderRadius: '12px'}}>
            <form onSubmit={handleSubmit}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '24px'}}>
                <div>
                  <label htmlFor="name" style={{display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px'}}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    style={{width: '100%', padding: '12px 16px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '16px'}}
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" style={{display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px'}}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={{width: '100%', padding: '12px 16px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '16px'}}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div style={{marginBottom: '24px'}}>
                <label htmlFor="subject" style={{display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px'}}>
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  style={{width: '100%', padding: '12px 16px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '16px'}}
                  placeholder="Project inquiry, question, etc."
                />
              </div>

              <div style={{marginBottom: '24px'}}>
                <label htmlFor="message" style={{display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px'}}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  style={{width: '100%', padding: '12px 16px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '16px', resize: 'vertical'}}
                  placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  background: isSubmitting ? '#9ca3af' : '#2563eb',
                  color: 'white',
                  padding: '12px 24px',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '500',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px'
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
                <div style={{color: '#059669', textAlign: 'center', marginTop: '16px'}}>
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === 'error' && (
                <div style={{color: '#dc2626', textAlign: 'center', marginTop: '16px'}}>
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;