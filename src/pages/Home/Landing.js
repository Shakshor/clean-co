import React from 'react';
import landingPic from '../../assets/images/1st pic-min.png';

const Landing = () => {
    return (
        <section className='relative'>
            {/* ------ 1st part -------- */}
            <div className=" hero h-screen lg:h-[60vh] bg-accent z-10">
                <div className="hero-content flex-col lg:flex-row">

                    <div>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                            className='pl-1'>Best Quality</p>
                        <h1
                            data-aos="fade-up"
                            data-aos-delay="400"
                            data-aos-duration="1200"
                            className="text-5xl font-bold">Professional Cleaning <br /> Service</h1>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="600"
                            data-aos-duration="1300"
                            className="py-6 max-w-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button
                            data-aos="zoom-in-up"
                            data-aos-delay="1300"
                            // data-aos-duration="1000"
                            data-aos-easing="ease-in-cubic"
                            className="btn btn-primary">Get Started</button>
                    </div>
                    <div className='h-[60vh] shrink-0'>
                        <img src={landingPic} className="h-full" alt='landing pic' />
                    </div>
                </div>
            </div>

            {/* ------- 2nd Part -------- */}
            <div className='mt-[-50px] mx-auto relative shadow-lg rounded-xl bg-base-200  w-5/6 z-20 p-10'>
                <h1 className='text-2xl text-primary mb-5'>Get Free Estimate</h1>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <button className='btn btn-primary mt-5'>Get a Quote</button>
            </div>
        </section>


    );
};

export default Landing;