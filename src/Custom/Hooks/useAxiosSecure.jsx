import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://talkify-server-two.vercel.app",
    withCredentials: true
})

// http://localhost:5000
// https://talkify-server-two.vercel.app

const useAxiosSecure = () => {
    return axiosInstance;
};

export default useAxiosSecure;