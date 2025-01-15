import React from 'react';
import { NavLink } from 'react-router-dom';
import MyProfile from '../Components/Pages/Dashboard/MyProfile';

const UserDashboard = () => {

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
                    <MyProfile></MyProfile>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className='bg-secondary min-h-screen pl-4'>
                    <ul className="menu min-h-full w-60 lg:w-72 pt-5 text-white">
                        {/* Sidebar content here */}
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/user/dashboard/'}>My Profile</NavLink></li>
                    </ul>
                    <button onClick={handleTheme} className="flex ml-4 text-neutral my-2 cursor-pointer gap-2 ">
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