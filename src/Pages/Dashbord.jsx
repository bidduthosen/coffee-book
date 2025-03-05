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
        const allCoffeeByLocalStorage= storedCoffeeByLocalStorage()
        const remaining = allCoffeeByLocalStorage.filter(coffe => coffe.id !== id)
       setCoffees(remaining)
        
        // setCoffees(remainingCoffee)
    }
    return (
        <div>
            <Heading title={'DashBord Introduction'} subTitle={'choice your coffee and oder your fevorite coffes'}></Heading>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                {
                    coffees.map(coffee => <Cart key={coffee.id} coffee={coffee} handleRemoveFevoriteCoffee={handleRemoveFevoriteCoffee}></Cart>)
                }
            </div>
        </div>
    );
};

export default Dashbord;