import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'School Management System',
      description: 'Comprehensive school website with student portal, course management, announcements, and administrative features.',
      tech: ['React', 'Next.js', 'CSS', 'Vercel'],
      image: 'https://images.unsplash.com/photo-1725801731040-35de33ef72b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNjaG9vbHdlYnNpdGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D',
      liveUrl: 'https://rising-lion-school-git-master-eliuds-projects-ebf8c589.vercel.app/#contact',
      githubUrl: '#'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      liveUrl: 'https://www.izzywheels.com/',
      githubUrl: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, team collaboration, and progress tracking.',
      tech: ['React', 'Firebase', 'CSS', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      liveUrl: 'https://webflow.com/made-in-webflow/website/Basic-Task-Manager-Demo',
      githubUrl: '#'
    },
    {
      title: 'Restaurant Website',
      description: 'Modern restaurant website with online ordering, reservation system, and menu management.',
      tech: ['Next.js', 'Sanity CMS', 'CSS', 'Vercel'],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop',
      liveUrl: 'https://restaurant.menufy.com/demo',
      githubUrl: '#'
    },
    {
      title: 'Personal Portfolio/Business',
      description: 'Investment portfolio tracker with real-time data, analytics, and performance insights.',
      tech: ['Vue.js', 'Chart.js', 'Express.js', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      liveUrl: 'https://elvisw.online/about-2/',
      githubUrl: '#'
    },
    {
      title: 'Learning Management System',
      description: 'Educational platform with course creation, student progress tracking, and interactive content.',
      tech: ['React', 'Django', 'PostgreSQL', 'AWS'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop',
      liveUrl: 'https://roadmap.sh/blockchain',
      githubUrl: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location-based forecasts and interactive maps.',
      tech: ['JavaScript', 'OpenWeather API', 'Mapbox', 'CSS3'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      liveUrl: 'https://www.meteotemplate.com/web/blocks.php',
      githubUrl: '#'
    }
  ];

  return (
    <div className="section" style={{
      background: `
        linear-gradient(135deg, rgba(6, 182, 212, 0.85) 0%, rgba(14, 165, 233, 0.7) 50%, rgba(56, 189, 248, 0.5) 100%),
        url('https://plus.unsplash.com/premium_photo-1745306842355-76a97ed6d803?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvamVjdHMlMjBpbiUyMHRlY2h8ZW58MHx8MHx8fDA%3D')
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
        top: '15%',
        right: '10%',
        width: '250px',
        height: '250px',
        background: 'linear-gradient(45deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))',
        borderRadius: '50%',
        filter: 'blur(1px)',
        animation: 'float 7s ease-in-out infinite'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '25%',
        left: '5%',
        width: '180px',
        height: '180px',
        background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.04))',
        borderRadius: '50%',
        filter: 'blur(1px)',
        animation: 'float 9s ease-in-out infinite reverse'
      }}></div>
      <div className="container" style={{position: 'relative', zIndex: 2}}>
        <div className="text-center mb-16" style={{animation: 'fadeInUp 1s ease-out'}}>
          <h1 style={{
            fontSize: '3.2rem', 
            fontWeight: 'bold', 
            color: '#ffffff', 
            marginBottom: '20px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            letterSpacing: '-0.02em'
          }}>
<span style={{color: '#06d6a0', textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>Projects</span>
          </h1>
          <p style={{
            fontSize: '22px', 
            color: '#f8fafc', 
            maxWidth: '750px', 
            margin: '0 auto',
            lineHeight: '1.7',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            opacity: '0.95',
            fontWeight: '400'
          }}>
            A curated showcase of innovative solutions and digital experiences that bring ideas to life
          </p>
        </div>

        <div className="grid grid-3">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="card"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9))',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                transition: 'all 0.3s ease',
                transform: 'translateY(0)'
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
              <div style={{position: 'relative', overflow: 'hidden'}}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{
                    width: '100%', 
                    height: '220px', 
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.05))',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }}></div>
              </div>
              <div style={{padding: '32px'}}>
                <h2 style={{
                  fontSize: '22px', 
                  fontWeight: 'bold', 
                  color: '#1e40af', 
                  marginBottom: '16px', 
                  lineHeight: '1.3',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.05)'
                }}>
                  {project.title}
                </h2>
                
                <p style={{
                  color: '#1e3a8a', 
                  marginBottom: '24px', 
                  lineHeight: '1.6',
                  fontWeight: '500'
                }}>
                  {project.description}
                </p>
                
                <div style={{
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  gap: '16px'
                }}>
                  <a 
                    href={project.liveUrl} 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#ffffff',
                      textDecoration: 'none',
                      background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                      padding: '12px 20px',
                      borderRadius: '10px',
                      fontWeight: '600',
                      fontSize: '14px',
                      boxShadow: '0 6px 15px rgba(59, 130, 246, 0.4)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.5)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 6px 15px rgba(59, 130, 246, 0.4)';
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} style={{marginRight: '6px'}} />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#1e40af',
                      textDecoration: 'none',
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.05))',
                      padding: '12px 20px',
                      borderRadius: '10px',
                      fontWeight: '600',
                      fontSize: '14px',
                      border: '2px solid rgba(59, 130, 246, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.1))';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.05))';
                      e.target.style.transform = 'translateY(0)';
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} style={{marginRight: '6px'}} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;