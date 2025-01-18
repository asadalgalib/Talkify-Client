import { FaUserShield } from "react-icons/fa";
import useUserData from "../../../Custom/Hooks/useUserData";
import Swal from "sweetalert2";
import useAuth from "../../../Custom/Hooks/useAuth";
import useAxiosSecure from "../../../Custom/Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const ManageUsers = () => {
    const [userData, refetch] = useUserData();
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth();
    const { email } = user;

    const handleAdmin = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.put(`/make/admin?id=${id}`, { email })
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Made Admin Successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                    .catch(err => {
                        toast.error(err.code);
                    })
            }
        })
    }

    const handleUser = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Remove Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.put(`/remove/admin?id=${id}`, { email })
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Remove Admin Successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                    .catch(err => {
                        toast.error(err.code);
                    })
            }
        })
    }

    return (
        <div className='lg:my-14 md:my-8 my-4 min-h-screen lg:mx-14 md:mx-8 mx-4 mb-10'>
            <div className='mb-5 bg-base-100 lg:py-10 py-5 lg:px-12 px-5 shadow rounded-md flex items-center justify-center'>
                <h1 className='lg:text-3xl text-2xl font-semibold text-neutral'>Manage Total {userData?.length} User</h1>
            </div>
            <div className='bg-base-100 rounded-md shadow overflow-x-auto'>
                <table className="table min-w-full">
                    {/* head */}
                    <thead>
                        <tr className='bg-secondary rounded text-white'>
                            <th className=' text-base'>#</th>
                            <th className=' text-base'>Photo</th>
                            <th className=' text-base'>Name</th>
                            <th className=' text-base'>Email</th>
                            <th className=' text-base'>Role</th>
                            <th className=' text-base'>Promote/Demote</th>
                            <th className=' text-base'>Membership</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData?.map((user, index) =>
                                <tr key={user._id} className='hover'>
                                    <th className='text-neutral'>{index + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask rounded-full h-12 w-12">
                                                <img
                                                    src={user.photo}
                                                    alt="Avatar" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-neutral font-semibold'>{user.name}</td>
                                    <td className="text-neutral">{user.email}</td>
                                    <td className='text-neutral'>
                                        {
                                            user?.role === "Admin" ?
                                                <h1 className="font-semibold text-lg text-green-600">ADMIN</h1>
                                                :
                                                <h1 className="font-semibold text-lg text-blue-600">USER</h1>
                                        }
                                    </td>
                                    <td className='text-neutral'>
                                        {
                                            user?.role === "Admin" ?
                                                <button onClick={() => handleUser(user._id)} className='font-semibold lg:text-3xl text-2xl text-white bg-red-600 px-3 py-2 rounded-md'><FaUserShield /></button>
                                                :
                                                <button onClick={() => handleAdmin(user._id)} className='font-semibold lg:text-3xl text-2xl text-white bg-green-600 px-3 py-2 rounded-md'><FaUserShield /></button>
                                        }
                                    </td>
                                    <td className='text-neutral'>
                                        {
                                            user?.isMember === true ?
                                                <p className="px-2 py-1 bg-green-600 font-semibold">Active</p>
                                                :
                                                <p className="px-2 py-1 text-red-600 font-semibold">Deactive</p>
                                        }
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;