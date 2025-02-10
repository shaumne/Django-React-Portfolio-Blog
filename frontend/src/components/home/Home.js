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
  ListItemText
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DataObjectIcon from '@mui/icons-material/DataObject';
import StorageIcon from '@mui/icons-material/Storage';
import AutomationIcon from '@mui/icons-material/AutoFixHigh';
import ApiIcon from '@mui/icons-material/Api';

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          background: 'linear-gradient(45deg, #0a0a0a 30%, #1a1a1a 90%)',
          py: 12
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h2" component="h1" gutterBottom>
                Python Developer
              </Typography>
              <Typography variant="h5" color="text.secondary" paragraph>
                Specializing in web scraping, automation, and API development
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                I deliver high-performance solutions across e-commerce, finance, real estate, and data analytics sectors. 
                My expertise lies in collecting, cleaning, and optimizing data to streamline business processes and enhance efficiency.
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Button 
                  variant="contained" 
                  size="large" 
                  component={RouterLink} 
                  to="/projects"
                  sx={{ mr: 2 }}
                >
                  View Projects
                </Button>
                <Button 
                  variant="outlined" 
                  size="large" 
                  component={RouterLink} 
                  to="/blog"
                >
                  Read Blog
                </Button>
              </Box>
              <Box sx={{ mt: 4 }}>
                <IconButton 
                  component="a" 
                  href="https://github.com/yourusername" 
                  target="_blank"
                  sx={{ mr: 2 }}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton 
                  component="a" 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank"
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Core Skills Section */}
      <Container sx={{ py: 8 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom
          sx={{ 
            borderBottom: '2px solid #ff1744',
            pb: 1,
            display: 'inline-block',
            mb: 4
          }}
        >
          Core Skills
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  Data Science & Analysis
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Pandas, NumPy, SciPy" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Matplotlib, Seaborn, Plotly" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Scikit-learn" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Jupyter Notebook" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Dash Dashboards" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  Web Scraping & Automation
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Selenium, BeautifulSoup4, Scrapy" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Playwright" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Anti-bot Bypassing" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Large Dataset Handling" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  API Development
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="FastAPI & Flask" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="PostgreSQL, MySQL, SQLite" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="SQLAlchemy" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="JWT Authentication" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  Automation & Scripting
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="PyAutoGUI" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Schedule & APScheduler" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Paramiko" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="ETL Pipelines" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Projects Highlight Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container>
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{ 
              borderBottom: '2px solid #ff1744',
              pb: 1,
              display: 'inline-block',
              mb: 4
            }}
          >
            Highlighted Projects
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: "E-commerce Price Monitor",
                description: "Web scraping bot that monitors product prices from Amazon, eBay, and other platforms for price comparison."
              },
              {
                title: "Real Estate Analytics",
                description: "Real estate data scraping tool to extract MLS listings and analyze property trends."
              },
              {
                title: "Large-scale Data Collection",
                description: "Data collection and API integration system processing over 500,000+ product details."
              },
              {
                title: "Bot Development",
                description: "Telegram & Discord bots that send real-time alerts for price drops and inventory changes."
              }
            ].map((project) => (
              <Grid item xs={12} md={6} key={project.title}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom color="primary">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 