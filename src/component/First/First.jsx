import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';

const First = () => {

    const categories = useLoaderData()
    // console.log(categories);
    return (
        <main>
            <section>
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
            </section>
            <br />
            <section>
                <h1 className='font-bold text-3xl'>Job Category List</h1>
                <br />
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <br />
                <div className='grid md:grid-cols-4 gap-6'>
                    {
                        categories.map(category => <Category
                            key={category.id}
                            category={category}
                        ></Category>)
                    }

                </div>

            </section>
        </main>
    );
};

export default First;