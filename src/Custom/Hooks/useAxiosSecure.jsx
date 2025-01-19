import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true
})

// http://localhost:5000
// https://talkify-server-two.vercel.app

const useAxiosSecure = () => {
    return axiosInstance;
};

export default useAxiosSecure;