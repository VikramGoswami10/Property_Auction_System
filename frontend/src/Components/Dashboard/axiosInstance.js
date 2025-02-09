import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:7155/api', // Your API base URL
    withCredentials: true, // Include credentials (cookies) in requests
});

// Add a response interceptor
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        const { response } = error;
        if (response && response.status === 401) {
            // Handle 401 error (Unauthorized)
            console.error('Unauthorized access - redirecting to login');
            // You can redirect to login page or show a message
            window.location.href = '/login'; // Redirect to login page
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;