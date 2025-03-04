import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({categories}) => {
    return (
        <div className='py-8'>
            <div role="tablist" className="tabs tabs-bordered">
                {
                    categories.map(category => <Link to={`/category/${category.category}`} key={category.id} role="tab" className="tab"> {category.category}</Link>)
                }
            </div>
        </div>
    );
};

export default Categories;