import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAnnounce = () => {
   const axiosPublic = useAxiosPublic();
   const { data: announceData, isLoading, error,refetch } = useQuery({
    queryKey :['announceData'],
    queryFn: async ()=>{
        const res = await axiosPublic.get('/announce');
        return res.data
    }
   })
   return [announceData,isLoading];
};

export default useAnnounce;