import React from 'react';
import { MdNotificationsActive } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {

    const handleTheme = () => {
        const htmlElement = document.documentElement;
        htmlElement.setAttribute('data-theme',
            htmlElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
        );
    };

    return (
        <div className="xl:px-28 lg:px-20 px-4 navbar sticky top-0 bg-base-100 w-full">
            <div className="flex-none lg:hidden">
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
                <div className='ml-10 hidden lg:flex'>
                    <ul className="flex text-neutral items-center">
                        <li className='px-4'><NavLink to={'/'}>Home</NavLink></li>
                        <li className='px-4'><NavLink >Membership</NavLink></li>
                        <li className='px-4'><NavLink to={'/login'}>Join Us</NavLink></li>
                    </ul>
                </div>
            </div>

            <div className="flex gap-1 lg:gap-3 items-center">
                <div>
                    <button onClick={handleTheme} className="lg:flex ml-3 text-neutral my-2 cursor-pointer gap-2 hidden ">
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
                <div className='text-3xl text-accent p-2 rounded cursor-pointer'>
                <p><MdNotificationsActive /></p>
                </div>
                <div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;