import React, { useState } from 'react';
import { storedCoffeeByLocalStorage } from '../Utils';
import Heading from '../components/Heading';
import Cart from '../components/Cart';

const Dashbord = () => {
    const [coffees, setCoffees] = useState([]);
    const allStoredCoffees = storedCoffeeByLocalStorage()
    console.log(allStoredCoffees)
    return (
        <div>
            <Heading title={'DashBord Introduction'} subTitle={'choice your coffee and oder your fevorite coffes'}></Heading>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    allStoredCoffees.map(coffee => <Cart key={coffee.id} coffee={coffee}></Cart>)
                }
            </div>
        </div>
    );
};

export default Dashbord;