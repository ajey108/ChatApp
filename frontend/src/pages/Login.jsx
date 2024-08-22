import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-700 mx-auto p-4">
            <h1 className='text-3xl font-semibold text-center text-gray-400 mb-6'>Log In</h1>
            <form className='w-full max-w-xs'>
                <div className='mb-4'>
                    <label className='label p-2' htmlFor="username">
                        <span className='text-base label-text text-gray-300'>Username</span>
                    </label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-error w-full"
                    />
                </div>

                <div className='mb-4'>
                    <label className='label p-2' htmlFor="password">
                        <span className='text-base label-text text-gray-300'>Password</span>
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        className="input input-bordered input-error w-full"
                    />
                </div>

                <button type="submit" className='btn btn-primary w-full mt-4'>
                    Log In
                </button>

                <Link to={"/signup"} className='text-sm text-gray-300 hover:underline hover:text-blue-500 mt-4 inline-block'>
                    Don’t have an account?
                </Link>
            </form>
        </div>
    );
}

export default Login;
