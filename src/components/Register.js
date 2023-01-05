import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleRegister = event => {
        event.preventDefault();
    }

    return (
        <section className='h-screen flex justify-center 
                            items-center bg-accent'>
            <div className="card
                w-full max-w-sm shadow-2xl 
                bg-base-100 mt-20">
                <h1 className='text-xl font-semibold
                            text-center pt-5'>Please Register</h1>
                <div className="card-body">
                    <form onSubmit={handleRegister}>

                        {/* ------input values --------------*/}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to='#' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">SignUp</button>
                        </div>
                    </form>

                    <p><small>Already have an account? <Link to='/login' className='text-secondary'>Please Login</Link></small></p>
                </div>
            </div>
        </section>

    );
};

export default Register;