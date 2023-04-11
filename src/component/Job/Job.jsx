import React from 'react';

const Job = ({ job }) => {
    // console.log(job)
    // const jobs = job.slice(0, 4)
    // console.log(jobs);
    const { id, job_title, company_name, jobs_type, location, salary, company_logo } = job;

    return (
        <div>

            <div className='border text-left border-orange-300 p-20'>
                <img src={company_logo} alt="" />

                <h1 className='text-2xl font-bold mt-2 '> {job_title} </h1>
                <h3 className='mt-1 '>{company_name} </h3>
                <div className='flex gap-5 mt-1 '>
                    <h1 className='border border-purple-500  text-purple-700 px-3 py-1 rounded' > {jobs_type[0]} </h1>
                    <h1 className='border border-purple-500  text-purple-700 px-3 py-1 rounded' > {jobs_type[1]} </h1>

                </div>
                <div className='flex gap-6 mt-1 '>
                    <h3>{location}</h3>
                    <h3> Salary : {salary}</h3>
                </div>
                <br />

                <button className="btn bg-purple-500 border-none text-white">View Details</button>

            </div>
        </div>
    );
};

export default Job;