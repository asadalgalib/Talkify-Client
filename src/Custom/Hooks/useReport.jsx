import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useReport = () => {
    const axiosSecure = useAxiosSecure();

    const { data: report, isLoading : reportLoading, refetch: reportRefetch } = useQuery({
        queryKey: ['report'],
        queryFn: async () => {
            const res = await axiosSecure.get('/report');
            return res.data;
        }
    })
    return [report, reportRefetch,reportLoading];
};

export default useReport;