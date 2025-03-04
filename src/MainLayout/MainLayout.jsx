import React from 'react';
import Nav from '../Shared/Nav';
import Footer from '../Shared/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-5 md:px-16'>
            <div className='h-28'>
                <Nav></Nav>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;