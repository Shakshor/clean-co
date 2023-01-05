import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    // get input value
    const emailRef = useRef('');
    const passwordRef = useRef('');


    // submit event handler
    const handleSubmit = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password);

        event.target.reset();
    }


    return (
        <section className='h-screen bg-accent flex justify-center items-center'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className='text-2xl font-semibold text-center text-primary'>Login</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input ref={emailRef} type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input ref={passwordRef} type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>

                    <p><small>New to Clean Co? <Link to='/register' className='text-secondary'>Create new account</Link></small></p>

                    {/* -----divider -------- */}
                    <div className="divider">OR</div>

                    <div className="form-control mt-6">
                        <button className="btn btn-accent">Sign in with google</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;