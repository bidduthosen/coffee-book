import React from 'react';
import {NavLink } from 'react-router-dom';

const Categories = ({categories}) => {
    return (
        <div className='py-8'>
            <div role="tablist" className="tabs tabs-bordered">
                {
                    categories.map(category => <NavLink to={`/category/${category.category}`} 
                        key={category.id} 
                        role="tab" 
                        className={({isActive}) =>  isActive ? ` tab tab-active underline text-red-700 font-bold text-base `: 'tab '}> {category.category}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;