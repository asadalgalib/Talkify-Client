import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useIsAdmin = () => {
    const { user } = useAuth();

    const axiosSecure = useAxiosSecure();
    const { data: isAdmin, isLoading, error, refetch } = useQuery({
        queryKey: ['isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/check/admin?email=${user?.email}`);
            return res.data;
        }
    })
    return [isAdmin, refetch, isLoading]
};

export default useIsAdmin;