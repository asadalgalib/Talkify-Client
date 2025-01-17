import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useUserAllPosts = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: userAllPost, isLoading: isPostLoading, error,refetch } = useQuery({
        queryKey: ['recentPost'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/allpost?email=${user.email}`);
            return res.data;
        }
    })
    return [userAllPost, isPostLoading, error,refetch]
};

export default useUserAllPosts;