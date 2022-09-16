import React from 'react';

import './categories.scss'

const Categories = ({categories}) => {
    return (
        <>
        <div className="category">
            {categories.map ((category,idx)=>(
                    <span key={idx} className='element'>{category}</span>     
            ))}
        </div>
        </>        
    );
};

export default Categories;