import React from 'react';

const Job = ({ job }) => {
    console.log(job)
    const { id, job_title, company_name, jobs_type, location, salary } = job;

    return (
        <div>

            <div className='border border-orange-300'>

                <h1> {job_title} </h1>
                <h3>{company_name} </h3>
                <h3>{location}</h3>
                <h3>{salary}</h3>

            </div>
        </div>
    );
};

export default Job;