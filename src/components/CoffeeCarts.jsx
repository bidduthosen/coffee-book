import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Cart from './Cart';

const CoffeeCarts = () => {
    const [coffees, setCoffees] = useState([]);
    const { categoryName } = useParams()
    const data = useLoaderData()

    useEffect(() => {
        if (categoryName) {
            const filteredByCoffee = [...data].filter(coffe => coffe.category === categoryName);
            setCoffees(filteredByCoffee)
        } else {
            setCoffees(data.slice(0, 6))
        }
    }, [categoryName, data])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                coffees.map(coffee => <Cart key={coffee.id} coffee={coffee}></Cart>)
            }
        </div>
    );
};

export default CoffeeCarts;