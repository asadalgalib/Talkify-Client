import React from 'react';
import NavBar from '../Components/Shared/NavBar';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer';

const MainLayout = () => {

    const handleTheme = () => {
        const htmlElement = document.documentElement;
        htmlElement.setAttribute('data-theme',
            htmlElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
        );
    };

    return (
        <div className="drawer">
            <input
                id="my-drawer-3"
                type="checkbox"
                className="drawer-toggle"
            />

            <div className="drawer-content flex flex-col">
                <NavBar></NavBar>
                <div className=''>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>

            <div className="drawer-side">
                <label
                    htmlFor="my-drawer-3"
                    aria-label="close sidebar"
                    className="drawer-overlay">
                </label>
                <div className='min-h-screen bg-base-100 px-4'>
                    <ul className="menu min-h-full w-60 flex flex-col gap-1 mt-5">
                        <li className=''><NavLink to={'/'}>Home</NavLink></li>
                        <li className=''><NavLink to={'/ry'}>Membership</NavLink></li>
                    </ul>
                    <button onClick={handleTheme} className="flex ml-4 text-neutral my-2 cursor-pointer gap-2 mt-4">
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

export default MainLayout;