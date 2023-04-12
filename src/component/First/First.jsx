import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import Job from '../Job/Job';



const First = () => {

    const categories = useLoaderData();
    const [jobs, setJobs] = useState([]);


    const [show, setShow] = useState(true);

    const changeState = () => {
        setShow(!show);
    }


    useEffect(() => {
        fetch('/jobsfile.json')
            .then(res => res.json()
                .then(data => setJobs(data.slice(0, 4))))
    }, [])

    const seeMoreHandlers = () => {
        fetch('/jobsfile.json')
            .then(res => res.json())
            .then(data => setJobs(data))

    }
    const seeLessHandlers = () => {
        fetch('/jobsfile.json')
            .then(res => res.json())
            .then(data => setJobs(data.slice(0, 4)))

    }



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
                        <img src="P3OLGJ1 copy 1.png" alt="" />

                    </div>



                </div>
            </section>
            <br />
            <section>
                <h1 className='font-bold text-3xl'>Job Category List</h1>
                <br />
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <br />
                <div className='grid align-middle md:grid-cols-4 gap-6'>
                    {
                        categories.map(category => <Category
                            key={category.id}
                            category={category}
                        ></Category>)
                    }

                </div>

            </section>
            <br />
            <section>
                <div className='mt-10'>
                    <h1 className='font-bold  text-3xl'>Featured Jobs</h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    <br />
                    <div className='grid md:grid-cols-2 gap-8'>
                        {
                            jobs.map(job => <Job
                                key={job.id}
                                job={job}

                            ></Job>)
                        }

                    </div>
                </div>
            </section>


            <div className='mt-10'>
                {show ? (
                    <button onClick={() => { seeMoreHandlers(); changeState() }} className="btn bg-purple-500 border-none text-white">See More</button>
                ) : (
                    <button onClick={() => { seeLessHandlers(); changeState() }} className="btn bg-purple-500 border-none text-white">See Less</button>
                )}

            </div>
        </main>
    );
};

export default First;