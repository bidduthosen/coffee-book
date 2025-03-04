import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const Links = <>
    <NavLink to={'/'}><button className='btn btn-outline btn-secondary'>Home</button></NavLink>
    <NavLink to={'/coffes'}><button className='btn btn-outline btn-secondary'>Coffees</button></NavLink>
    <NavLink to={'/dashbord'}><button className='btn btn-outline btn-secondary'>DashBord</button></NavLink>
        
    </>
    return (
        <div className="navbar bg-white/70 z-50 fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1200px] backdrop-blur-2xl px-4 ">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gray-200 z-[1] mt-3 w-52 min-h-svh p-2 shadow flex space-y-2">
                        {Links}
                    </ul>
                </div>
                <h1 className='text-2xl font-semibold'>Coffee Book</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex space-x-2 ">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Nav;