import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAllPostCount = () => {
    const axiosSecure = useAxiosSecure();

    const { data: AllPostCount, isLoading : isPostCountLoading, error } = useQuery({
        queryKey: ['/postCount'],
        queryFn: async () => {
            const res = await axiosSecure.get('/postCount')
            return res.data;
        }
    })
    return [AllPostCount,isPostCountLoading];
}

export default useAllPostCount;