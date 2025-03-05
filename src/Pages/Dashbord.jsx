import React, { useEffect, useState } from 'react';
import { removeCoffees, storedCoffeeByLocalStorage } from '../Utils';
import Heading from '../components/Heading';
import Cart from '../components/Cart';

const Dashbord = () => {
    const [coffees, setCoffees] = useState([]);

    // stored local storage coffee data
    useEffect(() => {
        const allStoredCoffees = storedCoffeeByLocalStorage();
        setCoffees(allStoredCoffees);
    }, [])

    const handleRemoveFevoriteCoffee = (id) => {
        removeCoffees(id)

        // romove id set remain coffees
        const allStoredCoffees = storedCoffeeByLocalStorage();
        setCoffees(allStoredCoffees);
    }
    return (
        <div>
            <Heading title={'DashBord Introduction'} subTitle={'choice your coffee and oder your fevorite coffes'}></Heading>
            {coffees.length ?
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                {
                    coffees.map(coffee => <Cart key={coffee.id} coffee={coffee} handleRemoveFevoriteCoffee={handleRemoveFevoriteCoffee}></Cart>)
                }
            </div>
            :
            <div className='text-center py-11'>
                <h3 className='font-semibold text-4xl text-red-600'>No Coffes Available. Plz add more Coffees</h3>
            </div> 
        }
        </div>
    );
};

export default Dashbord;