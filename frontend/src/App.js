import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/layout/Navbar';
import ProjectList from './components/projects/ProjectList';
import ProjectDetail from './components/projects/ProjectDetail';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff1744', // Kırmızı
    },
    secondary: {
      main: '#b2102f', // Koyu kırmızı
    },
    background: {
      default: '#0a0a0a', // Çok koyu gri
      paper: '#1a1a1a',   // Koyu gri
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1a1a1a',
          borderRadius: 8,
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 4px 20px rgba(255, 23, 68, 0.2)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#0a0a0a',
          boxShadow: '0 1px 3px rgba(255, 23, 68, 0.1)',
        },
      },
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Dark mode için gerekli */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProjectList />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
