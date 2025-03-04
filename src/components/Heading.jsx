import React from 'react';

const Heading = ({title, subTitle}) => {
    return (
        <div className='flex items-center w-full flex-col space-y-4 py-9'>
            <h2 className='text-3xl font-bold '>{title}</h2>
            <p className='font-thin text-base'>{subTitle}</p>
        </div>
    );
};

export default Heading;