import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../authentication/firebase.init';

const Login = () => {
    // get input value
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // Warning_Solving: Cannot update a component (`BrowserRouter`) while rendering a different component (`Login`))
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate, location]);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    // submit event handler
    const handleSubmit = (event) => {
        event.preventDefault();


        // const email = event.target.email.value;
        // const password = event.target.password.value;

        // console.log(email, password);
        signInWithEmailAndPassword(email, password);
        // event.target.reset();
    }


    return (
        <section className='h-screen bg-accent flex justify-center items-center'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className='text-2xl font-semibold text-center text-primary'>Login</h1>

                    <form onSubmit={handleSubmit}>

                        {/*------- input values ---------- */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input onChange={handleEmailChange} type="email" placeholder="email" className="input input-bordered" />

                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onChange={handlePasswordChange} type="password" placeholder="password" className="input input-bordered" />


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