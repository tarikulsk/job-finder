import React from 'react';
import { Link } from 'react-router-dom';

const ApplyJob = ({ carts }) => {
    console.log(carts)
    const { id, job_title, salary, location, company_logo, company_name, jobs_type } = carts;
    return (
        <div className='border border-orange-300 rounded-md '>
            <div className='border grid md:grid-cols-5  border-orange-300 p-6 '>
                <div className='col-span-1 p-14'>
                    <img src={company_logo} alt="" />
                </div>

                <div className=' col-span-3'>
                    <div className='text-left'>
                        <h1 className='text-2xl font-bold mt-2 '> {job_title} </h1>
                        <h3 className='mt-1 '>{company_name} </h3>
                        <div className=' flex gap-5 mt-1 '>
                            <h1 className='border border-purple-500  text-purple-700 px-3 py-1 rounded' > {jobs_type[0]} </h1>
                            <h1 className='border border-purple-500  text-purple-700 px-3 py-1 rounded' > {jobs_type[1]} </h1>

                        </div>
                        <div className='  flex gap-5  mt-1 '>
                            <h3>{location}</h3>
                            <h3> Salary : {salary}</h3>
                        </div>
                    </div>
                </div>


                <div className=' p-12 col-span-1'>
                    <button className="btn bg-purple-500 border-none text-white"> <Link to={`/jobdetails/${id}`}

                    >View Details</Link>  </button>
                </div>



            </div>


        </div>
    );
};

export default ApplyJob;