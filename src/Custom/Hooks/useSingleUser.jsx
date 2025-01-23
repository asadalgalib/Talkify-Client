import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useSingleUser = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();

    const { data: activeUser, isLoading: isActiveUserLoading } = useQuery({
        queryKey: ['activeUser', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/active/user?email=${user?.email}`);
            return res.data;
        }
    })
    return [activeUser, isActiveUserLoading];
};

export default useSingleUser;