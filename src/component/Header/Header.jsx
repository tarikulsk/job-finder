import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='grid  md:grid-cols-3 mb-5 gap-5'>
            <div><h1 className='text-4xl font-bold '>JOB FINDER</h1></div>
            <div className='mt-4'>
                <Link className='ms-4' to=' '> Home </Link>
                <Link className='ms-4' to='statistics'>Statistics</Link>
                <Link className='ms-4' to='appliedjobs' >Applied Jobs</Link>
                <Link className='ms-4' to='/blog'> Blog </Link>

            </div>
            <div>
                <button className="btn btn-primary">Star Applying</button>

            </div>
        </div>
    );
};

export default Header;