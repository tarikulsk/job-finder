import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div className='grid  md:grid-cols-3 mb-5'>
            <div><Link to=' '><h1 className='text-4xl font-bold '>JOB FINDER</h1></Link></div>
            <div className='mt-4  flex justify-between'>

                <ActiveLink className='ms-4' to=' '> Home </ActiveLink>
                <ActiveLink className='ms-4' to='statistics'>Statistics</ActiveLink>
                <ActiveLink className='ms-4' to='appliedjobs' >Applied Jobs</ActiveLink>
                <ActiveLink className='ms-4' to='/blog'> Blog </ActiveLink>


            </div>
            <div>
                <button className="btn btn-primary">Star Applying</button>

            </div>
        </div>
    );
};

export default Header;