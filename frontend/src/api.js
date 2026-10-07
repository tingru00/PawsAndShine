import axios from 'axios';

//Hämta API-URL från miljövariabel eller lokalt på port 5000
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
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