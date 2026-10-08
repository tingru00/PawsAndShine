import axios from 'axios';

//Hämta API-URL från miljövariabel eller lokalt på samma som backend
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://localhost:7018/api',
});

//Skickar med JWT-token i varje anrop om den finns sparad i localStorage
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;