import React from 'react';
import Nav from '../Shared/Nav';
import Footer from '../Shared/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='max-w-screen-2xl mx-auto px-5 md:px-16'>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;