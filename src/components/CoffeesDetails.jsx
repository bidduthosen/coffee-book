import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { setFevoriteCoffeByLocalStore, storedCoffeeByLocalStorage } from '../Utils';

const CoffeesDetails = () => {
    const data = useLoaderData();
    const [coffeeDetails, setCoffeeDetails] = useState({});
    const [active, setActive] = useState(false);
    const { id } = useParams()
    const parseIntId = parseInt(id)

    useEffect(() => {
        const perCoffeeDetails = data.find(coffe => coffe.id === parseIntId);
        setCoffeeDetails(perCoffeeDetails)
        
        // localt storage get coffee array
        const allCoffeeByLocalStorage = storedCoffeeByLocalStorage();
        const findSingleCoffeeLocalStorage = allCoffeeByLocalStorage.find(sCoffee => sCoffee.id === parseIntId)
        if(findSingleCoffeeLocalStorage){
            setActive(true)
        }

    }, [coffeeDetails, id]);




    // handle click this button set this local storege
    const handleSaveByLocalStorege = (coffee)=>{
        setFevoriteCoffeByLocalStore(coffee);
        setActive(true)
    }



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
                        <button disabled={active} onClick={()=> handleSaveByLocalStorege(coffeeDetails)} className="btn btn-secondary btn-outline"> Add Favorite </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeesDetails;