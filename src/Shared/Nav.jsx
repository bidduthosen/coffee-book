import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const Links = <>
    <NavLink to={'/'}><button className='btn btn-outline btn-secondary'>Home</button></NavLink>
    <NavLink to={'/dashbord'}><button className='btn btn-outline btn-secondary'>DashBord</button></NavLink>
    <NavLink><button className='btn btn-outline btn-secondary'>Blogs</button></NavLink>
        
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow flex space-x-2">
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