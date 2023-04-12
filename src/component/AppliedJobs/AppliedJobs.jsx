import React from 'react';
import { CartesianAxis } from 'recharts';
import { getAppliedjobs } from '../../utils/fake';
import { useLoaderData } from 'react-router-dom';
import ApplyJob from '../ApplyJob/ApplyJob';

const AppliedJobs = () => {


    // const { jobdetailsId } = useParams()
    // const jobdetails = useLoaderData();
    // const [jobdata, setJobdata] = useState({});

    // useEffect(() => {
    //     setJobdata(jobdetails.find(job => job.id == jobdetailsId))

    // }, [jobdetailsId, jobdetails])

    // useEffect(() => {
    //     fetch('products.json')
    //         .then(res => res.json())
    //         .then(data => setJobdata(data))
    // }, []);







    const jobsData = useLoaderData()

    let cart = []


    const applied = getAppliedjobs()
    for (const id in applied) {
        const foundJobs = jobsData.find(job => job.id == id)
        if (foundJobs) {
            cart.push(foundJobs)
        }
    }

    // console.log(cart);
    return (
        <div className='grid gap-8 mt-16'>
            {
                cart.map(carts =>
                    <ApplyJob
                        key={carts.id}
                        carts={carts}
                    ></ApplyJob>)
            }

        </div>
    );
};

export default AppliedJobs;