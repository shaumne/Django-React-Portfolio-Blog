import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const api = {
    // Projects
    getProjects: () => axios.get(`${API_URL}/projects/`),
    getProject: (slug) => axios.get(`${API_URL}/projects/${slug}/`),
    
    // Blog
    getPosts: () => axios.get(`${API_URL}/posts/`),
    getPost: (slug) => axios.get(`${API_URL}/posts/${slug}/`),
    
    // Technologies
    getTechnologies: () => axios.get(`${API_URL}/technologies/`),
};

export default api;