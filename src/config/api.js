// API configuration for different environments
// In production prefer a configured VITE_API_BASE_URL (e.g. https://your-backend.onrender.com)
// Otherwise fall back to the Vercel serverless relative path '/api'
const API_BASE_URL = import.meta.env.PROD
    ? (import.meta.env.VITE_API_BASE_URL || '/api')
    : 'http://localhost:3000';

// Fallback to relative path if the full URL doesn't work
const FALLBACK_API_URL = '/api';

export default API_BASE_URL;
export { FALLBACK_API_URL };