import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../authentication/firebase.init';
import { useEffect } from 'react';



const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    // Warning_Solving: Cannot update a component (`BrowserRouter`) while rendering a different component (`Register`)
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, location, navigate]);

    const handleRegister = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(name, email, password);
        createUserWithEmailAndPassword(email, password);
        event.target.reset();
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
                            <input name='name' type="text" placeholder="Name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />

                            <label className="label">
                                <Link to='#' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary"> SignUp</button>
                        </div>
                    </form>

                    <p><small>Already have an account? <Link to='/login' className='text-secondary'>Please Login</Link></small></p>
                </div>
            </div >
        </section >

    );
};

export default Register;