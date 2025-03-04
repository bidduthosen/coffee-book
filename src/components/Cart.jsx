import React from 'react';

const Cart = ({ coffee }) => {

    const { nutrition_info, ingredients, category, image, rating, popularity } = coffee || {};
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img className='md:h-[296px]'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">
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
        </div>
    );
};

export default Cart;