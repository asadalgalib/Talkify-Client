import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useState } from 'react';

const useUserData = () => {
    const { user } = useAuth();
    const [search,setSearch] = useState(' ');
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize,setPageSize] = useState(10);

    const axiosSecure = useAxiosSecure();
    const { data: userData, isLoading, error, refetch } = useQuery({
        queryKey: ['userData',currentPage,pageSize],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?email=${user?.email}&page=${currentPage}&size=${pageSize}&search=${search}`);
            return res.data;
        }
    })
    return [userData, refetch, isLoading,currentPage,setCurrentPage,pageSize,setSearch]
};

export default useUserData;