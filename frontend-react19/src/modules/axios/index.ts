import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1';
const instance = axios.create({ baseURL: apiUrl });

export { instance };
