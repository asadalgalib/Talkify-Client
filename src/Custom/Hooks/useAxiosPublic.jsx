import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://talkify-server-two.vercel.app"
})

const useAxiosPublic = () => {
    return axiosInstance;
};

export default useAxiosPublic;
