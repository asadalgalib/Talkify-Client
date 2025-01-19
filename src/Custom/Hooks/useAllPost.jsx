import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useState } from "react";

const useAllPost = () => {
    const [postQuery, setPostQuery] = useState('');

    const axiosPublic = useAxiosPublic()
    const { data: allPost, isLoading: isAllPostLoading, error, refetch } = useQuery({
        queryKey: [postQuery,'allPost'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/posts?search=${postQuery}`);
            return res.data
        }
    })
    return [allPost, isAllPostLoading, refetch,setPostQuery,postQuery];
};

export default useAllPost;