import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useCommentCount = () => {
    const axiosSecure = useAxiosSecure();

    const { data: commentCount, refetch } = useQuery({
        queryKey: ['commentCount'],
        queryFn: async () => {
            const res = await axiosSecure.get('/commentCount');
            return res.data;
        }
    });
    return [commentCount, refetch];
};

export default useCommentCount;