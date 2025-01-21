import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useIsAdmin from '../Custom/Hooks/useIsAdmin';

const UserDashboard = () => {
    const [isAdmin,isLoading] = useIsAdmin();
    // console.log(isAdmin,isLoading);

    const handleTheme = () => {
        const htmlElement = document.documentElement;
        htmlElement.setAttribute('data-theme',
            htmlElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
        );
    };

    
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <div>
                    <div className='bg-secondary py-2 lg:hidden sticky top-0 z-40'>
                        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="ml-5 text-neutral">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-8 w-8 mr-5 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <Outlet></Outlet>
                </div>
            </div>
            <div className="drawer-side z-50">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className='bg-secondary min-h-screen pl-6'>
                    <ul className="min-h-full w-60 xl:w-72 pt-5 mb-2 text-white">
                        {
                            isAdmin ?
                                // admin route
                                <div>
                                    <li className='mb-1 text-lg font-medium'><NavLink to={'/dashboard/admin/profile'}>Admin Profile</NavLink></li>
                                    <li className='mb-1 text-lg font-medium'><NavLink to={'/dashboard/admin/manageusers'}>Manage User</NavLink></li>
                                    <li className='mb-1 text-lg font-medium'><NavLink to={'/dashboard/admin/activities'}>Activities</NavLink></li>
                                    <li className='mb-1 text-lg font-medium'><NavLink to={'/dashboard/admin/announce'}>Announcement</NavLink></li>
                                </div>
                                :
                                // user route
                                <div>
                                    <li className='mb-1 text-lg font-medium'><NavLink to={'/dashboard/user/profile'}>My Profile</NavLink></li>
                                    <li className='mb-1 text-lg font-medium'><NavLink to={'/dashboard/user/addpost'}>Add Post</NavLink></li>
                                    <li className='mb-1 text-lg font-medium'><NavLink to={'/dashboard/user/myposts'}>My Posts</NavLink></li>
                                </div>
                        }
                        <div className="divider divider-info mr-6"></div>
                        <li className='mb-1 text-lg font-medium'><NavLink to={'/'}>Home</NavLink></li>
                        <li className='mb-1 text-lg font-medium'><NavLink to={'/'}>Membership</NavLink></li>
                    </ul>
                    <button onClick={handleTheme} className="flex text-neutral mt-5 cursor-pointer gap-2 ">
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
            </div>
        </div>
    );
};

export default UserDashboard;