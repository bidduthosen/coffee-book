import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Cart from './Cart';

const CoffeeCarts = () => {
    const navigete = useNavigate()
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
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    coffees.map(coffee => <Cart key={coffee.id} coffee={coffee}></Cart>)
                }
            </div>

            <button onClick={() => navigete('/coffes')} className='btn btn-outline btn-secondary mt-10'>View All</button>
        </div>
    );
};

export default CoffeeCarts;