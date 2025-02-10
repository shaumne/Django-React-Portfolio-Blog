import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Box, 
  Card, 
  CardMedia, 
  Button,
  Chip,
  Divider,
  Avatar
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { formatDistance } from 'date-fns';
import api from '../../services/api';

const PostDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.getPost(slug);
        setPost(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error loading post:', error);
        setError('Failed to load blog post.');
        setLoading(false);
      }
    };

    fetchPost();
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

  if (!post) return null;

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Button
        component={RouterLink}
        to="/blog"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 3 }}
      >
        Back to Blog
      </Button>

      <Card sx={{ 
        mb: 4,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #ff1744 0%, #b2102f 100%)',
        }
      }}>
        {post.image && (
          <CardMedia
            component="img"
            height="400"
            image={post.image}
            alt={post.title}
            sx={{ objectFit: 'cover' }}
          />
        )}
      </Card>

      <Typography variant="h3" component="h1" gutterBottom>
        {post.title}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
        <Avatar sx={{ bgcolor: 'primary.main' }}>
          {post.author[0].toUpperCase()}
        </Avatar>
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            {post.author}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {formatDistance(new Date(post.created_at), new Date(), { addSuffix: true })}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mb: 3 }}>
        {post.categories.map((category) => (
          <Chip
            key={category.id}
            label={category.name}
            sx={{ mr: 1 }}
            color="primary"
            variant="outlined"
          />
        ))}
      </Box>

      <Divider sx={{ mb: 3 }} />

      <Typography variant="body1" sx={{ 
        lineHeight: 1.8,
        '& p': { mb: 2 },
        whiteSpace: 'pre-wrap'
      }}>
        {post.content}
      </Typography>
    </Container>
  );
};

export default PostDetail; 