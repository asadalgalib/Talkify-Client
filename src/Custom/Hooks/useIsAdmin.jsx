import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useIsAdmin = () => {
    const { user,loading } = useAuth();

    const axiosSecure = useAxiosSecure();
    const { data: isAdmin, isPending, error, refetch : adminRefetch } = useQuery({
        queryKey: ['isAdmin'],
        enabled : !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/check/admin?email=${user?.email}`);
            return res.data;
        }
    })
    return [isAdmin, adminRefetch, isPending];
};

export default useIsAdmin;