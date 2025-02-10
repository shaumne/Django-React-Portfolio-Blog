import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Box, 
  Card, 
  CardMedia, 
  Button, 
  Grid, 
  Chip,
  Link
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import api from '../../services/api';

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await api.getProject(slug);
        setProject(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error loading project:', error);
        setError('Failed to load project details.');
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <Container>
        <Box sx={{ py: 4, textAlign: 'center' }}>
          <Typography>Loading...</Typography>
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Box sx={{ py: 4, textAlign: 'center' }}>
          <Typography color="error">{error}</Typography>
        </Box>
      </Container>
    );
  }

  if (!project) return null;

  return (
    <Container sx={{ py: 4 }}>
      <Button
        component={RouterLink}
        to="/projects"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 3 }}
      >
        Back to Projects
      </Button>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          {project.image && (
            <Card>
              <CardMedia
                component="img"
                height="400"
                image={project.image}
                alt={project.title}
                sx={{ objectFit: 'cover' }}
              />
            </Card>
          )}
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            {project.title}
          </Typography>

          <Typography variant="body1" sx={{ mb: 3 }}>
            {project.description}
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Technologies Used:
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {project.technologies.map((tech) => (
                <Chip
                  key={tech.id}
                  label={tech.name}
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Box>
          </Box>

          <Box sx={{ display: 'flex', gap: 2 }}>
            {project.github_url && (
              <Button
                variant="contained"
                startIcon={<GitHubIcon />}
                component={Link}
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </Button>
            )}
            {project.live_url && (
              <Button
                variant="contained"
                startIcon={<LaunchIcon />}
                component={Link}
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProjectDetail; 