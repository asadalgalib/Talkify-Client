import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useUserCount = () => {
    const axiosSecure = useAxiosSecure();

    const { data: userCount, isLoading : isCountLoading, error } = useQuery({
        queryKey: ['userCount'],
        queryFn: async () => {
            const res = await axiosSecure.get('/userCount')
            return res.data;
        }
    })
    return [userCount,isCountLoading];
}

export default useUserCount;