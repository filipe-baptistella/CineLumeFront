import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
    withCredentials: true, // permite envio automático de cookies HttpOnly
    headers: {
        'Content-Type': 'application/json',
    },
});

// Response interceptor to handle unauthorized responses
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401 && typeof window !== 'undefined') {
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);
