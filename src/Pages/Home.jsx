import React from 'react';
import Banner from '../components/banner';
import Heading from '../components/Heading';
import Categories from '../components/Categories';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const categories = useLoaderData()
    return (
        <div className='mb-10'>
           <Banner></Banner>
           <Heading title={'Coffee Book'} subTitle={'This is a coffee books'}></Heading>
           <Categories categories={categories}></Categories>
           <Outlet></Outlet>
        </div>
    );
};

export default Home;