import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Custom/Hooks/useAuth';
import useIsAdmin from '../Custom/Hooks/useIsAdmin';

const AdminPrivate = ({ children }) => {
    const location = useLocation();
    const { loading, user } = useAuth();
    const [isAdmin, adminRefetch, isLoading] = useIsAdmin()

    if (loading && isLoading || !isAdmin) {
        return <div className='min-h-screen flex justify-center items-center'><span className="loading loading-spinner text-accent"></span></div>
    }
    else if (user && isAdmin) {
        return children;
    }
    return (
        <div>
            <Navigate state={location.pathname} to={'/joinus/login'}></Navigate>
        </div>
    );
};

export default AdminPrivate;