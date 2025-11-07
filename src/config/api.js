// API configuration for different environments
// Preferred order (production):
// 1. import.meta.env.VITE_API_BASE_URL (set by Vercel env or build)
// 2. runtime heuristic: if running on a known Vercel hostname, point to the Render backend
// 3. fallback to the relative '/api' path (useful for local serverless setups)
// In development use the local backend at http://localhost:3000

const RENDER_BACKEND_FALLBACK = 'https://farm-fresh-backend-z8ex.onrender.com';

const runtimeHostname = (typeof window !== 'undefined' && window.location && window.location.hostname)
    ? window.location.hostname
    : '';

let API_BASE_URL;
if (import.meta.env.PROD) {
    // first preference: explicit env var set at build time
    const configured = import.meta.env.VITE_API_BASE_URL;
    if (configured && configured !== '') {
        API_BASE_URL = configured;
    } else {
        // runtime heuristic: if we're served from a vercel.app hostname (or a custom domain),
        // use the Render backend URL so the SPA calls the long-running API instead of Vercel /api
        if (runtimeHostname.includes('vercel.app') || runtimeHostname === 'localhost') {
            // When deployed on Vercel the hostname will contain 'vercel.app'
            API_BASE_URL = RENDER_BACKEND_FALLBACK;
        } else {
            // default to relative path which points to same-origin /api (useful for serverless responses)
            API_BASE_URL = '/api';
        }
    }
} else {
    API_BASE_URL = 'http://localhost:3000';
}

const FALLBACK_API_URL = '/api';

export default API_BASE_URL;
export { FALLBACK_API_URL };