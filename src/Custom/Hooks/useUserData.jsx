import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useUserData = () => {
    const { user } = useAuth();

    const axiosSecure = useAxiosSecure();
    const { data: userData, isLoading, error, refetch } = useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?email=${user?.email}`);
            return res.data;
        }
    })
    return [userData, refetch, isLoading]
};

export default useUserData;