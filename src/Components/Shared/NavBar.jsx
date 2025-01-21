import { useEffect } from 'react';
import { MdNotificationsActive } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'
import useAuth from '../../Custom/Hooks/useAuth';
import useIsAdmin from '../../Custom/Hooks/useIsAdmin';
import useAnnounce from '../../Custom/Hooks/useAnnounce';
import Swal from 'sweetalert2';

const NavBar = () => {
    const { user, logOutUser } = useAuth()
    const [announceData] = useAnnounce();
    const [isAdmin, adminRefetch, isPending] = useIsAdmin();

    useEffect(() => {

    }, [user])

    const handleTheme = () => {
        const htmlElement = document.documentElement;
        htmlElement.setAttribute('data-theme',
            htmlElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
        );
    };

    const handleLogout = () => {
        logOutUser();
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Logout Successfull",
            showConfirmButton: false,
            timer: 1500
        });
    }

    return (
        <div className="xl:px-28 lg:px-20 px-4 navbar sticky top-0 z-40 bg-base-100 w-full">
            <div className="flex-none md:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-6 w-6 stroke-current">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </label>
            </div>
            <div className="mx-2 flex-1 px-2">
                <h1 className='lg:text-3xl text-2xl  text-neutral font-semibold'>Talkify</h1>
                <div className='ml-10 hidden md:flex'>
                    <ul className="flex text-neutral items-center">
                        <li className='px-4'><NavLink to={'/'}>Home</NavLink></li>
                        <li className='px-4'><NavLink >Membership</NavLink></li>
                        <li className='px-4'></li>
                    </ul>
                </div>
            </div>

            <div className="flex gap-1 lg:gap-3 items-center">
                <div>
                    <button onClick={handleTheme} className="md:flex ml-3 text-neutral my-2 cursor-pointer gap-2 hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </button>
                </div>
                <div className='text-3xl p-2 rounded cursor-pointer bg-base-100 border-none shadow-none btn'>
                    <p><MdNotificationsActive /></p>
                    {
                        announceData && <div className="badge badge-error -ml-6 -mt-4 text-white">{announceData.length}</div>
                    }
                </div>
                <div>
                    {
                        user == null ?
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className='px-6 py-2 bg-secondary rounded-md text-white font-semibold'>Join Us</div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-md z-[1] w-40 mt-4">
                                    <Link to={'/joinus/login'}><li className='py-2 rounded pl-5 my-1 bg-secondary font-semibold text-white'>Login</li></Link>
                                    <Link to={'/joinus/signup'}><li className='py-2 rounded pl-5 my-1 bg-secondary font-semibold text-white'>Signup</li></Link>
                                </ul>
                            </div>
                            :
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src={user?.photoURL} />
                                    </div>
                                </div>
                                <div
                                    tabIndex={0}
                                    className=" dropdown-content bg-base-100 rounded z-[1] mt-4 w-52 p-2 shadow">
                                    <p className="bg-secondary rounded pl-5 py-1 mb-2 font-semibold text-white">{user.displayName}</p>
                                    <ul className='py-1 font-semibold text-white '>
                                        <Link to={`${isAdmin ? '/dashboard/admin/profile' : '/dashboard/user/profile'}`}><li className='py-1 rounded pl-5 mb-1 bg-accent'>Dashboard</li></Link>
                                        <li onClick={handleLogout} className='py-1 rounded pl-5 bg-accent cursor-pointer'><button >Logout</button></li>
                                    </ul>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;