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

  const techBadgeStyle = {
    background: '#dbeafe',
    color: '#1e40af',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '14px',
    margin: '2px'
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    color: '#2563eb',
    textDecoration: 'none',
    transition: 'color 0.2s'
  };

  const codeLinkStyle = {
    display: 'flex',
    alignItems: 'center',
    color: '#6b7280',
    textDecoration: 'none',
    transition: 'color 0.2s'
  };

  return (
    <div className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h1 style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '16px'}}>
            My Projects
          </h1>
          <p style={{fontSize: '20px', color: '#6b7280', maxWidth: '600px', margin: '0 auto'}}>
            A showcase of recent work demonstrating expertise across various technologies and industries
          </p>
        </div>

        <div className="grid grid-3">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <img 
                src={project.image} 
                alt={project.title}
                style={{width: '100%', height: '200px', objectFit: 'cover'}}
              />
              <div className="p-6">
                <h3 style={{fontSize: '20px', fontWeight: '600', marginBottom: '12px'}}>{project.title}</h3>
                <p style={{color: '#6b7280', marginBottom: '16px'}}>{project.description}</p>
                

                
                <div style={{display: 'flex', gap: '16px'}}>
                  <a href={project.liveUrl} style={linkStyle}>
                    <ExternalLink size={16} style={{marginRight: '4px'}} />
                    Live Demo
                  </a>
                  <a href={project.githubUrl} style={codeLinkStyle}>
                    <Github size={16} style={{marginRight: '4px'}} />
                    Code
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