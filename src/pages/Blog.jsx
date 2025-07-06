import { useState } from 'react';
import { Calendar, Clock, ArrowRight, X } from 'lucide-react';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
      title: 'Why Every Business Needs a Website in 2025',
      excerpt: 'Discover how a professional website can transform your business, increase credibility, and drive more customers to your door.',
      content: `In today's digital age, having a website isn't just an option—it's a necessity. Here's why every business, regardless of size, needs a professional online presence:

**24/7 Availability**: Your website works around the clock, allowing customers to learn about your services, make purchases, or contact you even when you're closed.

**Credibility and Trust**: 75% of consumers judge a company's credibility based on their website design. A professional website instantly establishes trust and legitimacy.

**Cost-Effective Marketing**: Compared to traditional advertising, a website provides ongoing marketing value. It's your digital storefront that never closes.

**Customer Convenience**: Modern customers expect to find businesses online. Without a website, you're invisible to potential customers who search online first.

**Competitive Advantage**: While your competitors are online, being absent from the web means losing customers to businesses that are easily found and accessible.

**Global Reach**: A website breaks geographical barriers, allowing you to serve customers beyond your local area and expand your market reach.

Don't let your business fall behind. Invest in a professional website today and watch your business grow exponentially.`,
      date: '2025-01-15',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      category: 'Business',
      slug: 'why-every-business-needs-website-2025'
    },
    {
      title: '10 Ways a Website Boosts Your Business Growth',
      excerpt: 'From 24/7 availability to global reach, learn how a website becomes your most powerful business tool for growth and success.',
      content: `A well-designed website is more than just an online brochure—it's a powerful growth engine. Here are 10 ways a website accelerates your business growth:

**1. Lead Generation**: Capture visitor information through contact forms, newsletters, and downloadable resources.

**2. SEO Benefits**: Rank higher in search results and attract organic traffic from potential customers actively searching for your services.

**3. Social Proof**: Display testimonials, reviews, and case studies that convince visitors to choose your business.

**4. Analytics Insights**: Track visitor behavior, popular pages, and conversion rates to make data-driven business decisions.

**5. E-commerce Capabilities**: Sell products or services directly online, creating additional revenue streams.

**6. Brand Building**: Establish a consistent brand identity and professional image that sets you apart from competitors.

**7. Customer Support**: Provide FAQs, chat support, and self-service options that improve customer satisfaction.

**8. Content Marketing**: Share valuable content that positions you as an industry expert and attracts potential customers.

**9. Mobile Accessibility**: Reach customers on their smartphones and tablets where they spend most of their time.

**10. Scalability**: Easily update content, add new services, and expand your online presence as your business grows.

Invest in a professional website and unlock these growth opportunities for your business today.`,
      date: '2025-01-10',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      category: 'Growth',
      slug: '10-ways-website-boosts-business-growth'
    },
    {
      title: 'The Cost of NOT Having a Website: What You\'re Missing',
      excerpt: 'Explore the hidden costs and missed opportunities that businesses face when they don\'t have an online presence.',
      content: `Every day without a website, your business is losing money. Here's what you're missing by not having an online presence:

**Lost Customers**: 97% of consumers search online before making a purchase. Without a website, you're invisible to these potential customers.

**Credibility Issues**: Businesses without websites appear outdated and unprofessional, causing customers to choose competitors instead.

**Limited Market Reach**: You're restricted to local customers only, missing out on regional, national, and international opportunities.

**No Online Reviews**: Without a web presence, you can't showcase customer testimonials and reviews that build trust.

**Missed Sales Opportunities**: No e-commerce means no online sales, limiting your revenue potential significantly.

**Poor Customer Service**: Customers can't find basic information like hours, location, or services, leading to frustration.

**Competitive Disadvantage**: Your competitors with websites are capturing the customers you're losing.

The cost of building a website is minimal compared to the revenue you're losing every day without one. Don't let another day pass—get your website today!`,
      date: '2025-01-05',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      category: 'Strategy',
      slug: 'cost-of-not-having-website'
    },
    {
      title: 'From Local to Global: How Websites Expand Your Reach',
      excerpt: 'Learn how a simple website can transform your local business into a global brand, reaching customers worldwide.',
      content: `A website is your passport to global business expansion. Here's how it transforms local businesses into international success stories:

**Breaking Geographic Barriers**: Your website makes your business accessible to customers anywhere in the world, 24/7.

**International SEO**: Optimize for global search terms and reach customers in different countries and languages.

**Online Marketplaces**: Integrate with platforms like Amazon, eBay, or Etsy to sell globally with ease.

**Digital Marketing**: Use social media, email marketing, and online advertising to reach international audiences cost-effectively.

**Customer Support**: Provide multilingual support and resources to serve diverse global customers.

**Shipping Solutions**: Partner with international shipping companies to deliver products worldwide.

**Currency Options**: Accept multiple currencies and payment methods to accommodate global customers.

**Success Stories**: Many small businesses have grown from local shops to international brands through strategic website development.

Your local expertise combined with global reach through a website creates unlimited growth potential. Start your global expansion today!`,
      date: '2024-12-28',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop',
      category: 'Expansion',
      slug: 'local-to-global-website-reach'
    },
    {
      title: 'Building Trust Online: Why Credibility Matters',
      excerpt: 'Discover how a professional website builds instant trust with customers and establishes your business as an industry leader.',
      content: `Trust is the foundation of every successful business relationship. Here's how a professional website builds unshakeable credibility:

**Professional Design**: A well-designed website immediately signals professionalism and attention to detail.

**Customer Testimonials**: Showcase real reviews and success stories that prove your value to potential customers.

**About Us Page**: Share your story, team, and values to create personal connections with visitors.

**Contact Information**: Display clear contact details, physical address, and multiple ways to reach you.

**Security Features**: SSL certificates and secure payment options show you protect customer data.

**Industry Certifications**: Display awards, certifications, and professional memberships prominently.

**Case Studies**: Detailed project examples demonstrate your expertise and successful track record.

**Regular Updates**: Fresh content and current information show your business is active and reliable.

**Social Proof**: Integration with social media and online reviews builds community trust.

In today's digital world, your website is often the first impression customers have of your business. Make it count with a professional, trustworthy online presence.`,
      date: '2024-12-20',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop',
      category: 'Trust',
      slug: 'building-trust-online-credibility'
    },
    {
      title: 'Website ROI: How Your Investment Pays for Itself',
      excerpt: 'Real examples of how businesses see immediate returns on their website investment through increased sales and leads.',
      content: `A professional website isn't an expense—it's an investment that pays dividends. Here's how businesses see real returns:

**Lead Generation ROI**: Businesses typically see 3-5x return on website investment through increased leads and conversions.

**Reduced Marketing Costs**: A website reduces dependence on expensive traditional advertising methods.

**Increased Sales**: E-commerce capabilities can double or triple revenue by enabling online sales.

**Customer Acquisition**: Websites cost 62% less per lead than traditional marketing methods.

**Operational Efficiency**: Automated processes reduce staff time spent on routine inquiries and bookings.

**Real Success Stories**:
- Local restaurant increased orders by 150% after launching online ordering
- Service business doubled client base within 6 months of website launch
- Retail store expanded to 3 locations after successful e-commerce implementation

**Measurable Benefits**:
- Average 40% increase in customer inquiries
- 25% reduction in customer service calls
- 60% improvement in brand recognition

**Quick Payback**: Most businesses recover their website investment within 3-6 months through increased revenue.

Don't view a website as a cost—see it as the smartest investment you'll make for your business growth.`,
      date: '2024-12-15',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      category: 'ROI',
      slug: 'website-roi-investment-returns'
    }
  ];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="section" style={{
      background: `
        linear-gradient(135deg, rgba(251, 146, 60, 0.7) 0%, rgba(245, 101, 101, 0.5) 50%, rgba(236, 72, 153, 0.3) 100%),
        url('https://media.istockphoto.com/id/2134854336/photo/social-media-online-content-freelance-worker-working-online-content-creator-woman-using.webp?a=1&b=1&s=612x612&w=0&k=20&c=8Xh8n5aKNiCyr4nnMdzF_DIdC6H7WLqzvyxP0wWxElM=')
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
        top: '20%',
        right: '8%',
        width: '200px',
        height: '200px',
        background: 'linear-gradient(45deg, rgba(255,255,255,0.15), rgba(255,255,255,0.08))',
        borderRadius: '50%',
        filter: 'blur(2px)',
        animation: 'float 6s ease-in-out infinite'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '30%',
        left: '10%',
        width: '150px',
        height: '150px',
        background: 'linear-gradient(45deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))',
        borderRadius: '50%',
        filter: 'blur(2px)',
        animation: 'float 8s ease-in-out infinite reverse'
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
            Blog & <span style={{color: '#fbbf24', textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>Insights</span>
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
            Discover why having a website is crucial for your business success and 
            how it can transform your growth in today's digital world.
          </p>
        </div>

        <div className="grid grid-3">
          {posts.map((post, index) => (
            <article 
              key={index} 
              className="card"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9))',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }}
            >
              <img 
                src={post.image} 
                alt={post.title}
                style={{width: '100%', height: '220px', objectFit: 'cover', transition: 'transform 0.3s ease'}}
                onMouseOver={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}
              />
              <div style={{padding: '32px'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px'}}>
                  <span style={{
                    background: 'linear-gradient(135deg, #f59e0b, #d97706)', 
                    color: 'white', 
                    padding: '6px 16px', 
                    borderRadius: '25px', 
                    fontSize: '14px', 
                    fontWeight: '600',
                    boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)'
                  }}>
                    {post.category}
                  </span>
                  <div style={{display: 'flex', alignItems: 'center', color: '#92400e', fontSize: '14px', fontWeight: '500'}}>
                    <Clock style={{width: '16px', height: '16px', marginRight: '4px'}} />
                    {post.readTime}
                  </div>
                </div>
                
                <h2 style={{
                  fontSize: '22px', 
                  fontWeight: 'bold', 
                  color: '#92400e', 
                  marginBottom: '16px', 
                  lineHeight: '1.3',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.05)'
                }}>
                  {post.title}
                </h2>
                
                <p style={{
                  color: '#a16207', 
                  marginBottom: '20px', 
                  lineHeight: '1.6',
                  fontWeight: '500'
                }}>
                  {post.excerpt}
                </p>
                
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <div style={{display: 'flex', alignItems: 'center', color: '#92400e', fontSize: '14px', fontWeight: '500'}}>
                    <Calendar style={{width: '16px', height: '16px', marginRight: '4px'}} />
                    {formatDate(post.date)}
                  </div>
                  
                  <button 
                    onClick={() => setSelectedPost(post)}
                    style={{
                      display: 'flex', 
                      alignItems: 'center', 
                      color: 'white',
                      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                      padding: '10px 16px',
                      borderRadius: '10px',
                      fontWeight: '600', 
                      border: 'none', 
                      cursor: 'pointer',
                      fontSize: '14px',
                      boxShadow: '0 6px 15px rgba(245, 158, 11, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 20px rgba(245, 158, 11, 0.4)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 6px 15px rgba(245, 158, 11, 0.3)';
                    }}
                  >
                    Read More
                    <ArrowRight style={{width: '16px', height: '16px', marginLeft: '6px'}} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal for full post content */}
        {selectedPost && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.8)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}>
            <div style={{
              background: 'white',
              borderRadius: '12px',
              maxWidth: '800px',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative'
            }}>
              <button 
                onClick={() => setSelectedPost(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  zIndex: 1001
                }}
              >
                <X size={24} />
              </button>
              
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title}
                style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px 12px 0 0'}}
              />
              
              <div style={{padding: '32px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px'}}>
                  <span style={{background: '#dbeafe', color: '#1e40af', padding: '4px 12px', borderRadius: '20px', fontSize: '14px', fontWeight: '500'}}>
                    {selectedPost.category}
                  </span>
                  <div style={{display: 'flex', alignItems: 'center', color: '#6b7280', fontSize: '14px'}}>
                    <Clock style={{width: '16px', height: '16px', marginRight: '4px'}} />
                    {selectedPost.readTime}
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', color: '#6b7280', fontSize: '14px'}}>
                    <Calendar style={{width: '16px', height: '16px', marginRight: '4px'}} />
                    {formatDate(selectedPost.date)}
                  </div>
                </div>
                
                <h1 style={{fontSize: '28px', fontWeight: 'bold', marginBottom: '24px', lineHeight: '1.3'}}>
                  {selectedPost.title}
                </h1>
                
                <div style={{fontSize: '16px', lineHeight: '1.7', color: '#374151'}}>
                  {selectedPost.content.split('\n').map((paragraph, index) => (
                    <p key={index} style={{marginBottom: '16px'}}>
                      {paragraph.startsWith('**') && paragraph.endsWith('**') ? (
                        <strong>{paragraph.slice(2, -2)}</strong>
                      ) : (
                        paragraph
                      )}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;