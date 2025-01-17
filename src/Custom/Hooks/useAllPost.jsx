import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useAllPost = () => {
    const axiosPublic = useAxiosPublic()
    const { data: allPost, isLoading: isAllPostLoading, error,refetch } = useQuery({
        queryKey: ['allPost'],
        queryFn : async ()=>{
            const res = await axiosPublic.get('/posts');
            return res.data
        }
    })
    return [allPost,isAllPostLoading,refetch]
};

export default useAllPost;