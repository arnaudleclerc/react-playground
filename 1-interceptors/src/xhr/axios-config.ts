import axios from 'axios';
import promise from 'promise';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
    console.log('before send');
    return config;
}, (error) => {
    return promise.reject(error);
});

export default axiosInstance;