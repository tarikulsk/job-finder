import React from 'react';

const First = () => {
    return (
        <div className='grid md:grid-cols-2'>

            <div className='text-middle md:p-28 text-start text-5xl font-bold'>
                <h1>One Step </h1>
                <h1>Closer To Your </h1>
                <h1 className='text-purple-500'>Dream Job</h1>
                <br />
                <p className='text-sm'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <br />
                <button className="btn btn-primary">Get Started</button>

            </div>
            <div>
                <img src="/public/images/P3OLGJ1 copy 1.png" alt="" />

            </div>



        </div>
    );
};

export default First;