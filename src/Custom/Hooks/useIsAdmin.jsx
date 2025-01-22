import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useIsAdmin = () => {
    const { user,loading } = useAuth();

    const axiosSecure = useAxiosSecure();
    const { data: isAdmin, isLoading, error, refetch : adminRefetch } = useQuery({
        queryKey: ['isAdmin',user?.email],
        enabled : !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/check/admin?email=${user?.email}`);
            return res.data;
        }
    })
    return [isAdmin, adminRefetch, isLoading];
};

export default useIsAdmin;