import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useReportCount = () => {
    const axiosSecure = useAxiosSecure();
   
    const {data : reportCount} = useQuery({
        queryKey : ['reportCount'],
        queryFn : async ()=>{
            const res = await axiosSecure.get('/reportCount');
            return res.data;
        }
    })
    return [reportCount];
};

export default useReportCount;