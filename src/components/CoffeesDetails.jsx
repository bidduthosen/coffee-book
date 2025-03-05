import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CoffeesDetails = () => {
    const data = useLoaderData();
    const [coffeeDetails, setCoffeeDetails] = useState({});
    const { id } = useParams()
    const parseIntId = parseInt(id)

    useEffect(() => {
        const perCoffeeDetails = data.find(coffe => coffe.id === parseIntId);
        setCoffeeDetails(perCoffeeDetails)

    }, [coffeeDetails, id])
    const { image,  name,making_process ,description } = coffeeDetails || {};
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-14">
                    <img
                        src={image}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6"> Making Proces: {making_process} </p>
                        <p className="py-6"> Discription: {description} </p>
                        <button className="btn btn-secondary btn-outline"> Add Favorite </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeesDetails;