import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTags = () => {
    const axiosPublic = useAxiosPublic();
    const { data: allTags, isLoading, error, refetch } = useQuery({
        queryKey: ['allTags'],
        queryFn: async () => {
            const res = await axiosPublic.get('/tags')
            return res.data;
        }
    })
    return [allTags];
};

export default useTags;