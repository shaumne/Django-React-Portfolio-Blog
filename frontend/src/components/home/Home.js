import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Button, 
  Grid,
  Card,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  LinearProgress,
  useTheme,
  Chip
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import VerifiedIcon from '@mui/icons-material/Verified';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ApiIcon from '@mui/icons-material/Api';
import DatabaseIcon from '@mui/icons-material/Storage';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import StarIcon from '@mui/icons-material/Star';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  background: `linear-gradient(45deg, ${theme.palette.background.default} 30%, ${theme.palette.background.paper} 90%)`,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(255,23,68,0.1) 0%, rgba(0,0,0,0) 50%)',
  }
}));

const SkillBar = ({ name, value }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <Box ref={ref} sx={{ mb: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="body2" color="primary">
          {name}
        </Typography>
        <Typography variant="body2" color="primary">
          {value}%
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={inView ? value : 0}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: 'rgba(255,23,68,0.1)',
          '& .MuiLinearProgress-bar': {
            borderRadius: 4,
            background: 'linear-gradient(90deg, #ff1744 0%, #b2102f 100%)',
          }
        }}
      />
    </Box>
  );
};

const Home = () => {
  const theme = useTheme();

  const skills = {
    // Web Scraping & Automation
    'Web Scraping': 95,
    'Python': 90,
    'Automation': 92,
    'Data Processing': 88,
    
    // Backend Development
    'Django': 85,
    'FastAPI': 90,
    'RESTful APIs': 88,
    'GraphQL': 80,
    
    // Databases
    'PostgreSQL': 85,
    'MongoDB': 82,
    'Redis': 80,
    'SQLAlchemy': 85,
    
    // DevOps & Tools
    'Docker': 80,
    'Git': 85,
    'CI/CD': 78,
    'AWS': 75
  };

  const experiences = [
    {
      title: 'Backend Development',
      items: [
        'RESTful API development with Django and FastAPI',
        'Database design and optimization',
        'Authentication and authorization systems',
        'Microservices architecture',
        'API documentation with Swagger/OpenAPI'
      ]
    },
    {
      title: 'Data Engineering',
      items: [
        'ETL pipeline development',
        'Data warehouse design',
        'Real-time data processing',
        'Data migration and integration',
        'Performance optimization'
      ]
    },
    {
      title: 'DevOps & Infrastructure',
      items: [
        'Docker containerization',
        'CI/CD pipeline setup',
        'AWS cloud services',
        'Monitoring and logging',
        'Security best practices'
      ]
    }
  ];

  const certifications = [
    {
      title: "CS50's Introduction to Computer Science",
      provider: "edX",
      date: "March 2024",
      expiry: "March 2025",
      id: "c945a85c2904425d9e2ddac11708b5c3",
      icon: <SchoolIcon />
    },
    {
      title: "CS50",
      provider: "Harvard University",
      date: "March 2024",
      expiry: "March 2025",
      icon: <SchoolIcon />
    }
  ];

  const workHistory = [
    {
      title: "Mid Software Developer",
      company: "ZoneAds",
      period: "February 2021 - April 2023",
      responsibilities: [
        "Led backend development initiatives using Python and Django",
        "Designed and implemented scalable web scraping solutions",
        "Optimized database performance and query efficiency",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      title: "Junior Software Developer",
      company: "ZoneAds",
      period: "February 2020 - April 2021",
      responsibilities: [
        "Developed and maintained Python-based automation scripts",
        "Assisted in API development and integration",
        "Implemented data processing pipelines",
        "Collaborated with team members on various projects"
      ]
    }
  ];

  const skillCategories = [
    {
      title: 'Web Scraping & Automation',
      icon: <AutoFixHighIcon />,
      skills: [
        { name: 'Web Scraping', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'Automation', level: 92 },
        { name: 'Data Processing', level: 88 }
      ],
      description: 'Expert in developing efficient web scraping solutions and automation systems'
    },
    {
      title: 'Backend Development',
      icon: <ApiIcon />,
      skills: [
        { name: 'Django', level: 85 },
        { name: 'FastAPI', level: 90 },
        { name: 'RESTful APIs', level: 88 },
        { name: 'GraphQL', level: 80 }
      ],
      description: 'Specialized in building scalable and secure backend systems'
    },
    {
      title: 'Database Management',
      icon: <StorageIcon />,
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 82 },
        { name: 'Redis', level: 80 },
        { name: 'SQLAlchemy', level: 85 }
      ],
      description: 'Proficient in database design, optimization, and management'
    },
    {
      title: 'DevOps & Tools',
      icon: <CloudIcon />,
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'Git', level: 85 },
        { name: 'CI/CD', level: 78 },
        { name: 'AWS', level: 75 }
      ],
      description: 'Experience with modern DevOps practices and cloud technologies'
    }
  ];

  const upworkJobs = [
    {
      title: "Data Scraper Needed for Family Dollar and Dollar Tree Store Addresses",
      date: "Feb 8, 2025",
      rating: 5,
      review: "Amazing work! Super fast and correct. Emrecan was a great communicator and completed the job fast and efficiently. Will definitely hire again.",
      type: "Fixed price"
    },
    {
      title: "Twitch donations to Discord Server",
      date: "May 31, 2023",
      rating: 5,
      review: "Emre completed the bot within hours, I couldn't be happier. What I liked the most is he knew what I needed exactly and he provided it without any back-and-forth communication which is a time consuming process. I am also a developer but I needed this done when I was working on something else, and this dude wrote the code better than I'd have lol! :) Code was written clean and easy to understand, with proper commenting for future modifications. a+ grade developer!",
      type: "Fixed price"
    },
    {
      title: "Fix issue of current system",
      date: "May 3, 2023",
      rating: 5,
      review: "He went above and beyond. Thank you for all your hard work and solution-oriented nature!",
      type: "Fixed price"
    },
    {
      title: "Python website host on Siteground",
      date: "May 3, 2023",
      rating: 5,
      review: "I posted a job request, and received five responses. He was the one who asked the right questions and understood what I needed. He worked very fast, exceeded expectations and charged a very reasonable price. Would use again without hesitation.",
      type: "Fixed price"
    },
    {
      title: "New job",
      date: "May 1, 2023",
      rating: 5,
      review: "Best freelancer I have worked with. Just did our second job. Great support, great skill level, great trouble shooter, very friendly, big work ethic, there isn't a down side to working with this freelancer",
      type: "Fixed price"
    },
    {
      title: "Python click bot/mouse recorder macro development",
      date: "Apr 29, 2023",
      rating: 5,
      review: "This freelancer provided me with amazing customer support. The type of one on one support you get here is rare, he was quick thinking and a great trouble shooter who worked through it all to the end with me. I will be coming back, I'd recommend you give this freelancer a chance, the service and work I got here was way more than what I paid for.",
      type: "Fixed price"
    }
  ];

  return (
    <Box>
      <HeroSection>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography 
                  variant="h1" 
                  sx={{ 
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 700,
                    mb: 2
                  }}
                >
                  Python Developer
                </Typography>
                <Typography 
                  variant="h2" 
                  color="primary"
                  sx={{ 
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 600,
                    mb: 3
                  }}
                >
                  Specializing in Web Scraping & Automation
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: '600px' }}>
                  I deliver high-performance solutions across e-commerce, finance, and data analytics sectors.
                  Expert in collecting, cleaning, and optimizing data to streamline business processes.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button 
                    variant="contained" 
                    size="large"
                    sx={{
                      borderRadius: '30px',
                      px: 4
                    }}
                  >
                    View Projects
                  </Button>
                  <Button 
                    variant="outlined" 
                    size="large"
                    sx={{
                      borderRadius: '30px',
                      px: 4
                    }}
                  >
                    Contact Me
                  </Button>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      <Container sx={{ py: 15 }}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
              Skills & Expertise
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Comprehensive expertise in development and automation
            </Typography>

            <Box sx={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 2,
              '@media (max-width: 600px)': {
                gridTemplateColumns: '1fr'
              }
            }}>
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      p: 3,
                      height: '100%',
                      bgcolor: 'background.paper',
                      borderRadius: 2,
                      boxShadow: 1,
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        boxShadow: 3,
                        transform: 'translateY(-4px)',
                        '&::after': {
                          opacity: 0.8,
                        }
                      },
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'radial-gradient(circle at center, rgba(255,23,68,0.15) 0%, rgba(255,23,68,0) 70%)',
                        zIndex: -1,
                        opacity: 0.4,
                        transition: 'opacity 0.3s ease-in-out',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '4px',
                        height: '100%',
                        background: 'linear-gradient(180deg, #ff1744 0%, rgba(255,23,68,0.3) 100%)',
                        boxShadow: '0 0 15px rgba(255,23,68,0.5)',
                        zIndex: 0,
                      }
                    }}
                  >
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      gap: 2,
                      mb: 3,
                      pb: 2,
                      borderBottom: '1px solid',
                      borderColor: 'divider'
                    }}>
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: 2,
                          bgcolor: 'primary.main',
                          color: 'white',
                          display: 'flex',
                          flexShrink: 0
                        }}
                      >
                        {category.icon}
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {category.title}
                      </Typography>
                    </Box>

                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ mb: 3, flexGrow: 1 }}
                    >
                      {category.description}
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      {category.skills.map((skill) => (
                        <Box key={skill.name}>
                          <Box sx={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            mb: 1,
                            alignItems: 'center'
                          }}>
                            <Typography 
                              variant="body2" 
                              sx={{ 
                                fontWeight: 500,
                                color: 'text.primary'
                              }}
                            >
                              {skill.name}
                            </Typography>
                            <Typography 
                              variant="caption" 
                              color="primary"
                              sx={{ 
                                fontWeight: 600,
                                bgcolor: 'primary.main',
                                color: 'white',
                                px: 1,
                                py: 0.5,
                                borderRadius: 1,
                                minWidth: '45px',
                                textAlign: 'center'
                              }}
                            >
                              {skill.level}%
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              width: '100%',
                              height: 4,
                              bgcolor: 'rgba(255,23,68,0.1)',
                              borderRadius: 2,
                              overflow: 'hidden'
                            }}
                          >
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              style={{
                                height: '100%',
                                background: 'linear-gradient(90deg, #ff1744 0%, #b2102f 100%)',
                                borderRadius: 2
                              }}
                            />
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ pl: { md: 4 } }}>
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
                Experience
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Professional journey in software development
              </Typography>

              {[
                {
                  title: "Mid Software Developer",
                  company: "ZoneAds",
                  period: "February 2021 - April 2023",
                  achievements: [
                    "Led development of high-performance web scraping solutions processing 500,000+ product listings daily",
                    "Designed and implemented RESTful APIs using Django and FastAPI, improving data retrieval efficiency by 40%",
                    "Developed automated data collection systems for e-commerce platforms (Amazon, eBay) with anti-bot detection mechanisms",
                    "Optimized PostgreSQL database queries and implemented Redis caching, reducing response times by 60%",
                    "Created ETL pipelines for processing and analyzing large datasets",
                    "Implemented CI/CD pipelines using GitHub Actions and Docker",
                    "Mentored junior developers and conducted code reviews"
                  ]
                },
                {
                  title: "Junior Software Developer",
                  company: "ZoneAds",
                  period: "February 2020 - February 2021",
                  achievements: [
                    "Developed Python scripts for web scraping and data automation tasks",
                    "Built data processing pipelines using Pandas and NumPy",
                    "Implemented API integrations with various e-commerce platforms",
                    "Created monitoring systems for tracking price changes and inventory updates",
                    "Developed Telegram and Discord bots for automated notifications",
                    "Assisted in database management and optimization",
                    "Contributed to internal tools development"
                  ]
                }
              ].map((role, index) => (
                <motion.div
                  key={role.period}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      mb: 4,
                      p: 3,
                      bgcolor: 'background.paper',
                      borderRadius: 2,
                      boxShadow: 1,
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        boxShadow: 3,
                        '& .timeline-dot': {
                          transform: 'scale(1.2)',
                          boxShadow: '0 0 20px rgba(255,23,68,0.6)',
                        },
                        '&::after': {
                          opacity: 0.8,
                        }
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'radial-gradient(circle at center, rgba(255,23,68,0.15) 0%, rgba(255,23,68,0) 70%)',
                        zIndex: -1,
                        opacity: 0.4,
                        transition: 'opacity 0.3s ease-in-out',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '4px',
                        height: '100%',
                        background: 'linear-gradient(180deg, #ff1744 0%, rgba(255,23,68,0.3) 100%)',
                        boxShadow: '0 0 15px rgba(255,23,68,0.5)',
                        zIndex: 0,
                      }
                    }}
                  >
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'flex-start',
                      gap: 2,
                      mb: 2 
                    }}>
                      <Box
                        className="timeline-dot"
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          bgcolor: 'primary.main',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'all 0.3s ease-in-out',
                          boxShadow: '0 0 10px rgba(255,23,68,0.4)',
                          position: 'relative',
                          zIndex: 1,
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: -2,
                            left: -2,
                            right: -2,
                            bottom: -2,
                            borderRadius: '50%',
                            background: 'linear-gradient(45deg, #ff1744, #ff4081)',
                            opacity: 0.5,
                            filter: 'blur(4px)',
                            zIndex: -1
                          }
                        }}
                      >
                        <WorkIcon sx={{ color: 'white' }} />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {role.title}
                        </Typography>
                        <Typography 
                          variant="subtitle1" 
                          color="primary"
                          sx={{ fontWeight: 500 }}
                        >
                          {role.company}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          color="text.secondary"
                          sx={{ mt: 0.5 }}
                        >
                          {role.period}
                        </Typography>
                      </Box>
                    </Box>

                    <Box 
                      component="ul" 
                      sx={{ 
                        pl: 2,
                        mb: 0,
                        '& li': {
                          color: 'text.secondary',
                          mb: 1,
                          '&::marker': {
                            color: 'primary.main'
                          }
                        }
                      }}
                    >
                      {role.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                          viewport={{ once: true }}
                        >
                          <Typography variant="body2">
                            {achievement}
                          </Typography>
                        </motion.li>
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              ))}

              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom sx={{ 
                  color: 'primary.main',
                  fontWeight: 600,
                  mb: 2
                }}>
                  Key Technologies & Tools Used
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: 1
                }}>
                  {[
                    'Python', 'Django', 'FastAPI', 'PostgreSQL', 'Redis',
                    'Docker', 'AWS', 'Git', 'CI/CD', 'Selenium',
                    'BeautifulSoup4', 'Scrapy', 'Pandas', 'NumPy',
                    'RESTful APIs', 'GraphQL', 'MongoDB', 'ETL',
                    'Data Analysis', 'Web Scraping'
                  ].map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      variant="outlined"
                      color="primary"
                      size="small"
                      sx={{ 
                        borderRadius: 1,
                        transition: 'all 0.2s',
                        '&:hover': {
                          bgcolor: 'primary.main',
                          color: 'white',
                          transform: 'translateY(-2px)',
                          boxShadow: 1
                        }
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Certifications Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 15 }}>
        <Container>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
            Certifications
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
            Professional certifications and achievements
          </Typography>

          <Grid container spacing={4}>
            {certifications.map((cert) => (
              <Grid item xs={12} md={6} key={cert.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      p: 3,
                      bgcolor: 'background.default',
                      borderRadius: 2,
                      boxShadow: 1,
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '4px',
                        height: '100%',
                        bgcolor: 'primary.main'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <VerifiedIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="h6">{cert.title}</Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Provider: {cert.provider}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Issued: {cert.date} - Expires: {cert.expiry}
                    </Typography>
                    {cert.id && (
                      <Typography variant="body2" color="text.secondary">
                        Certification ID: {cert.id}
                      </Typography>
                    )}
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>


      {/* Upwork Profile Section */}
      <Box sx={{ 
        py: 8, 
        px: 4,
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at center, rgba(255,23,68,0.15) 0%, rgba(255,23,68,0) 70%)',
          zIndex: -1,
          opacity: 0.4,
        }
      }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 2, 
          mb: 6,
          pb: 3,
          borderBottom: '2px solid',
          borderColor: 'primary.main'
        }}>
          <Box sx={{
            width: 48,
            height: 48,
            borderRadius: '12px',
            bgcolor: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(255,23,68,0.3)'
          }}>
            <WorkIcon sx={{ color: 'white', fontSize: 28 }} />
          </Box>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
              Upwork Profile
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Check out my work history and client feedback
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href="https://www.upwork.com/freelancers/emrecancetinkaya"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: 4,
                py: 1,
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                boxShadow: '0 0 15px rgba(255,23,68,0.3)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 0 20px rgba(255,23,68,0.5)',
                },
                transition: 'all 0.2s ease-in-out'
              }}
            >
              View Full Profile
            </Button>
          </Box>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{
              p: 4,
              bgcolor: 'background.paper',
              borderRadius: 2,
              boxShadow: 1,
              position: 'relative',
              overflow: 'hidden',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at center, rgba(255,23,68,0.15) 0%, rgba(255,23,68,0) 70%)',
                zIndex: -1,
                opacity: 0.4,
              }
            }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Python Developer | Web Scraping, API & Automation Specialist
              </Typography>

              <Typography variant="body2" color="text.secondary" paragraph>
                I am a Python developer specializing in web scraping, automation, and API development. 
                I have successfully delivered projects across e-commerce, finance, real estate, and data analytics sectors. 
                My expertise lies in collecting, cleaning, and optimizing data to streamline business processes and enhance efficiency.
              </Typography>

              <Typography variant="h6" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
                📌 My Core Skills
              </Typography>

              <Grid container spacing={3}>
                {[
                  {
                    title: "📊 Data Science & Analysis",
                    skills: [
                      "Data manipulation & analysis using Pandas, NumPy, SciPy",
                      "Data visualization with Matplotlib, Seaborn, Plotly",
                      "Basic machine learning applications with Scikit-learn",
                      "Interactive data analysis with Jupyter Notebook",
                      "Building dynamic dashboards using Dash"
                    ]
                  },
                  {
                    title: "🔄 Web Scraping & Automation",
                    skills: [
                      "Scraping data from e-commerce (Amazon, eBay, etc.), finance, and real estate platforms",
                      "Extracting data from dynamic pages using Selenium, BeautifulSoup4, Scrapy",
                      "Bypassing anti-bot measures (Proxy rotation, CAPTCHA solving, headers spoofing)",
                      "Headless browser automation with Playwright",
                      "Optimized pipelines for handling large datasets efficiently"
                    ]
                  },
                  {
                    title: "🔧 API Development & Backend",
                    skills: [
                      "FastAPI & Flask for high-performance REST APIs",
                      "Database integration with PostgreSQL, MySQL, SQLite using SQLAlchemy",
                      "JWT authentication and secure API implementation",
                      "Rate limiting and caching for better performance"
                    ]
                  },
                  {
                    title: "⚙️ Automation & Scripting",
                    skills: [
                      "Desktop automation with PyAutoGUI",
                      "Task scheduling with Schedule & APScheduler",
                      "SSH automation using Paramiko",
                      "ETL pipelines for data processing"
                    ]
                  }
                ].map((category, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Box sx={{
                      height: '100%',
                      p: 3,
                      borderRadius: 2,
                      bgcolor: 'background.default',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 2
                      },
                      transition: 'all 0.2s'
                    }}>
                      <Typography variant="h6" gutterBottom>
                        {category.title}
                      </Typography>
                      <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                        {category.skills.map((skill, i) => (
                          <Typography component="li" variant="body2" color="text.secondary" key={i} sx={{ mb: 1 }}>
                            {skill}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Typography variant="h6" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
                🏆 Highlighted Projects
              </Typography>

              <Box component="ul" sx={{ pl: 2, mb: 4 }}>
                {[
                  "🛒 Developed a web scraping bot that monitors product prices from Amazon, eBay, and other platforms for price comparison.",
                  "📊 Created a real estate data scraping tool to extract MLS listings and analyze property trends.",
                  "🔄 Designed a large-scale data collection and API integration system processing over 500,000+ product details.",
                  "🤖 Built Telegram & Discord bots that send real-time alerts for price drops and inventory changes."
                ].map((project, index) => (
                  <Typography component="li" variant="body2" color="text.secondary" key={index} sx={{ mb: 1 }}>
                    {project}
                  </Typography>
                ))}
              </Box>

              <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                💡 Why Work With Me?
              </Typography>

              <Box component="ul" sx={{ pl: 2, mb: 4 }}>
                {[
                  "✅ I write optimized, scalable, and maintainable code.",
                  "✅ Expertise in handling anti-bot challenges like proxies and CAPTCHAs.",
                  "✅ Modular and reusable solutions for future scalability.",
                  "✅ Committed to long-term Upwork collaborations."
                ].map((point, index) => (
                  <Typography component="li" variant="body2" color="text.secondary" key={index} sx={{ mb: 1 }}>
                    {point}
                  </Typography>
                ))}
              </Box>

              <Typography variant="body1" sx={{ textAlign: 'center', color: 'primary.main', fontWeight: 500 }}>
                📩 Let's discuss your project! Feel free to reach out. 🚀
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{
              mt: 4,
              p: 4,
              bgcolor: 'background.paper',
              borderRadius: 2,
              boxShadow: 1,
              position: 'relative',
              overflow: 'hidden',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at center, rgba(255,23,68,0.15) 0%, rgba(255,23,68,0) 70%)',
                zIndex: -1,
                opacity: 0.4,
              }
            }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 2, 
                mb: 4,
                pb: 3,
                borderBottom: '2px solid',
                borderColor: 'primary.main'
              }}>
                <Box sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '12px',
                  bgcolor: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 15px rgba(255,23,68,0.3)'
                }}>
                  <WorkIcon sx={{ color: 'white', fontSize: 28 }} />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  Completed Jobs
                </Typography>
              </Box>

              <Grid container spacing={3}>
                {upworkJobs.map((job, index) => (
                  <Grid item xs={12} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Box 
                        sx={{ 
                          p: 3,
                          borderRadius: 3,
                          bgcolor: 'background.default',
                          position: 'relative',
                          overflow: 'hidden',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: 3,
                            '&::after': {
                              opacity: 0.8,
                            }
                          },
                          transition: 'all 0.3s ease-in-out',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'radial-gradient(circle at center, rgba(255,23,68,0.1) 0%, rgba(255,23,68,0) 70%)',
                            zIndex: -1,
                            opacity: 0.4,
                            transition: 'opacity 0.3s ease-in-out',
                          }
                        }}
                      >
                        <Box sx={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          mb: 2,
                          gap: 2
                        }}>
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              fontSize: '1.1rem',
                              fontWeight: 600,
                              color: 'primary.main'
                            }}
                          >
                            {job.title}
                          </Typography>
                          <Box sx={{ 
                            display: 'flex', 
                            gap: 0.5 
                          }}>
                            {[...Array(job.rating)].map((_, i) => (
                              <StarIcon key={i} sx={{ color: '#FFD700', fontSize: 16 }} />
                            ))}
                          </Box>
                        </Box>

                        <Typography 
                          variant="body2" 
                          color="text.secondary"
                          sx={{ 
                            mb: 2,
                            lineHeight: 1.6,
                            fontStyle: 'italic',
                            '&::before': {
                              content: '"\\201C"',
                              display: 'inline',
                              marginRight: '4px',
                              color: 'primary.main',
                              fontSize: '1.5rem',
                              lineHeight: 0,
                              verticalAlign: 'middle',
                              fontFamily: 'serif'
                            },
                            '&::after': {
                              content: '"\\201D"',
                              display: 'inline',
                              marginLeft: '4px',
                              color: 'primary.main',
                              fontSize: '1.5rem',
                              lineHeight: 0,
                              verticalAlign: 'middle',
                              fontFamily: 'serif'
                            }
                          }}
                        >
                          {job.review}
                        </Typography>

                        <Box sx={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          pt: 1,
                          borderTop: '1px solid',
                          borderColor: 'divider'
                        }}>
                          <Typography 
                            variant="caption" 
                            sx={{ 
                              color: 'text.secondary',
                              fontWeight: 500
                            }}
                          >
                            {job.type}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home; 