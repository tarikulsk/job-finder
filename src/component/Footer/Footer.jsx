import React from 'react';

const Footer = () => {
    return (
        <div className='text-white    text-left   w-fit  p-28 mt-20 bg-blue-900'>
            <div className=' grid md:grid-cols-6 gap-8 '>
                <div className='col-span-2'>
                    <h1 className='text-3xl font-bold'>Job Finder</h1>
                    <br />
                    <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>

                </div>

                <div>
                    <h1 className='font-bold'>Company</h1>
                    <a href="#"><h2>About Us</h2></a>
                    <a href="#"><h2>Work</h2></a>
                    <a href="#"><h2>Latest News</h2></a>
                    <a href="#"><h2>Careers</h2></a>

                </div>
                <div>
                    <h1 className='font-bold'>Product</h1>
                    <a href="#"><h2>Prototype</h2></a>
                    <a href="#"><h2>Plans & Pricing</h2></a>
                    <a href="#"><h2>Customers</h2></a>
                    <a href="#"><h2>Integrations</h2></a>

                </div>
                <div>
                    <h1 className='font-bold'>Support</h1>
                    <a href="#"><h2>Help Desk</h2></a>
                    <a href="#"><h2>Sales</h2></a>
                    <a href="#"><h2>Become a Partner</h2></a>
                    <a href="#"><h2>Developers</h2></a>

                </div>
                <div>
                    <h1 className='font-bold'>Contact</h1>
                    <p>524 Broadway , NYC
                        +1 777 - 978 - 5570</p>

                </div>





            </div>
            <br />
            <hr />
            <br />
            <br />


            <div className='flex justify-between'>
                <p>@2023 JobFinder. All Rights Reserved</p>
                <p>
                    Powered by CareerHub
                </p>
            </div>
        </div>

    );
};

export default Footer;