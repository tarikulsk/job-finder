import React from 'react';

const Category = ({ category }) => {


    const { name, Available_jobs, icon } = category;
    return (
        <div className='border hover:bg-blue-200 hover:scale-125 rounded h-50 w-50 text-left p-7 h-48 w-64 bg-purple-100'>
            <img className='w-10 h-10' src={icon} alt="" />
            <br />
            <h1 className='text-2xl'>{name} </h1>
            <p> {Available_jobs}</p>

        </div>
    );
};

export default Category;