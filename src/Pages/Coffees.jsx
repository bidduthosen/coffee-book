import React, { useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import Cart from '../components/Cart';
import Heading from '../components/Heading';

const Coffees = () => {
    const data = useLoaderData();
    const [coffees, setCoffees] = useState(data);
    const [isActive, setIsActive] = useState('')
    const handleSort = (sortType) => {

        // DSC
        if (sortType === 'ratting') {
            const sortRatting = coffees.sort((a, b) => b.rating - a.rating)
            setCoffees(sortRatting)
        }

        // ASC
        else if (sortType === 'popularity') {
            const sortPopularity = coffees.sort((a, b) => a.popularity - b.popularity)
            setCoffees(sortPopularity)
        }
    }

    return (
        <div className='my-10'>
            <div className=''>
                <Heading title={'All Coffees'} subTitle={"World best coffees, its my fav"}></Heading>
                <div className='flex justify-end space-x-3 mb-12'>
                    <NavLink onClick={() => setIsActive('rit')}>
                        <button onClick={() => handleSort('ratting')} className={`${isActive === 'rit' ? 'btn btn-secondary' : 'btn btn-outline hover:btn-secondary'}`}>Sort By Rattings (DSC) </button> 
                    </NavLink>
                    <NavLink onClick={() => setIsActive('pop')} >
                        <button onClick={() => handleSort('popularity')} className={`${isActive === 'pop' ? 'btn btn-secondary' : 'btn btn-outline hover:btn-secondary'}`}>Sort By Popularity (ASC) </button>
                    </NavLink>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    coffees.map(coffee => <Cart key={coffee.id} coffee={coffee}></Cart>)
                }
            </div>
        </div>
    );
};

export default Coffees;