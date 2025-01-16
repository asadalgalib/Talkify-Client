import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useRecentPost = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: recentPost, isLoading: isPostLoading, error } = useQuery({
        queryKey : ['recentPost'],
        queryFn : async ()=>{
            const res = await axiosSecure.get(`/recentpost?email=${user.email}`);
            return res.data;
        }
    })
    return [ recentPost, isPostLoading ]
};

export default useRecentPost;