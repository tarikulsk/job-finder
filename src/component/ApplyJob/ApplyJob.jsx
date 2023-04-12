import React from 'react';

const ApplyJob = ({ carts }) => {
    console.log(carts)
    const { id, job_title, description, responsibility, requirements, experiences, salary, location, phone, email, company_logo, company_name, jobs_type } = carts;
    return (
        <div className='border border-orange-300 rounded-md '>
            <div className='border text-left grid md:grid-cols-4  border-orange-300 p-10 '>
                <div><img src={company_logo} alt="" /></div>

                <div className='col-span-3'>
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
                </div>
                <br />

                {/* <button className="btn bg-purple-500 border-none text-white"> <Link to={`jobdetails/${id}`}

                >View Details</Link>  </button> */}
                <p></p>

            </div>


        </div>
    );
};

export default ApplyJob;