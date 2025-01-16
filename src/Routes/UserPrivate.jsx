import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Custom/Hooks/useAuth';

const UserPrivate = ({ children }) => {
    const location = useLocation();
    const { loading, user } = useAuth();

    if (loading) {
        return <div className='min-h-screen flex justify-center items-center'><span className="loading loading-spinner text-accent"></span></div>
    }
    else if (user) {
        return children;
    }
    return (
        <div>
            <Navigate state={location.pathname} to={'/joinus/login'}></Navigate>
        </div>
    );
};

export default UserPrivate;