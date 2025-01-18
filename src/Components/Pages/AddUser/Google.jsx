import Swal from 'sweetalert2';
import Gooogle from '../../../assets/Google.png'
import useAuth from '../../../Custom/Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import useAxiosPublic from '../../../Custom/Hooks/useAxiosPublic';
import useIsAdmin from '../../../Custom/Hooks/useIsAdmin';
import useAxiosSecure from '../../../Custom/Hooks/useAxiosSecure';

const Google = () => {
    const { user, setUser, auth, provider } = useAuth()
    const navigate = useNavigate()
    const [isAdmin, adminRefetch, isPending] = useIsAdmin();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

    const handleGoogle = () => {
        if (user) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You are already loged in!",
            });
        }
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user);
                const name = result.user.displayName;
                const email = result.user.email;
                const photo = result.user.photoURL
                axiosPublic.post('/users', { name, email, photo })
                    .then(res => {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Login Successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        setTimeout(async () => {
                            const res = await axiosSecure.get(`/check/admin?email=${email}`);
                            adminRefetch();
                            navigate('/')
                        }, 1000)
                    })
                    .catch(err => {
                        console.log(err.code);
                    })
            })
    }

    return (
        <div className='flex items-center justify-center '>
            <button onClick={handleGoogle} className='bg-secondary px-6 py-3 flex items-center justify-center gap-2 text-white font-semibold w-full rounded-md'>
                <img src={Gooogle} className='w-6' alt="" />
                <span>Continue with Google</span>
            </button>
        </div>
    );
};

export default Google;