import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Cart = ({ coffee }) => {
    const { pathname } = useLocation()

    const { id, nutrition_info, ingredients, category, image, rating, popularity, name } = coffee || {};
    return (
        <div className='relative'>
            {pathname === '/dashbord' &&
                <div className='absolute z-10 -top-5 -right-5'>
                    <p className='bg-red-400 text-black font-thin rounded-full cursor-pointer p-2'>Delete</p>
                </div>
            }
            <Link to={`/coffes/${id}`}>
                <div className="card bg-base-100 shadow-xl transition-transform duration-300 hover:scale-105">
                    <figure>
                        <img className='md:h-[296px]'
                            src={image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">
                            {name}
                        </h2>
                        <h2 className="font-thin underline">
                            {category}
                        </h2>
                        <div className='space-x-2' >
                            {
                                ingredients.map((ingre, idx) => <button key={idx} className='btn btn-sm btn-secondary btn-outline'>{ingre}</button>)
                            }
                        </div>
                        <div className='pl-9'>
                            <ul className='list-disc space-y-1'>
                                <li className='list-disc'>calories: {nutrition_info.calories}</li>
                                <li className='list-disc'>fat: {nutrition_info.fat}</li>
                                <li className='list-disc'>carbohydrates: {nutrition_info.carbohydrates}</li>
                                <li className='list-disc'>protein: {nutrition_info.protein}</li>
                            </ul>
                        </div>
                        <h4 className='font-medium text-base text-gray-500'>Rating: {rating}</h4>
                        <h4 className='font-medium text-base text-gray-500'>Popularity: {popularity}</h4>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Cart;