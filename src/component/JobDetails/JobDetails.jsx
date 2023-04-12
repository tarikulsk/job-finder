import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';



const JobDetails = () => {

    const { jobdetailsId } = useParams()
    const jobdetails = useLoaderData();
    const [jobdata, setJobdata] = useState({});

    useEffect(() => {
        setJobdata(jobdetails.find(job => job.id == jobdetailsId))

    }, [jobdetailsId, jobdetails])
    console.log(jobdata.job_title);
    const { id, job_title, description, responsibility, requirements, experiences, salary, location, phone, email } = jobdata;


    return (
        <div className='grid md:grid-cols-3 text-left mt-16'>

            <div className='col-span-2'>
                <h3 className='  p-5 rounded '>
                    <span className='text-xl font-bold'>Job Description:</span>  {description}
                </h3>
                <h3 className='  p-5 rounded '>
                    <span className='text-xl font-bold'>Job Responsibility:</span>  {responsibility}
                </h3>
                <h3 className='  p-5 rounded '>
                    <span className='text-xl font-bold'>Educational Requirements:</span>
                    <p>{requirements}</p>
                </h3>
                <h3 className='  p-5 rounded '>
                    <span className='text-xl font-bold'>Experiences:</span>
                    <p>{experiences}</p>
                </h3>



            </div>
            <div >
                <div className='bg-purple-200 p-16 rounded '>
                    <h1>JOB Details </h1>
                    <br />
                    <hr />
                    <br />
                    <h1 >
                        <span className='text-bold'> Salary: </span>
                        {salary}
                    </h1>
                    <h1>
                        <span className='text-bold'> Job Title: </span>
                        {job_title}
                    </h1>

                    <br />

                    <h1 className='font-bold text-xl' >Contact Information</h1>
                    <br />
                    <hr />
                    <br />
                    <h1>
                        <span className='text-bold'>Phone: </span>
                        {phone}
                    </h1>
                    <h1>
                        <span className='text-bold'> Email: </span>
                        {email}
                    </h1
                    ><h1>
                        <span className='text-bold'> Address: </span>
                        {location}
                    </h1>

                </div>
                <div className='mt-5'>
                    <button className="px-40 bg-purple-400 text-white border-none btn ">Apply Now</button>
                </div>
            </div>

        </div>
    );
};

export default JobDetails;