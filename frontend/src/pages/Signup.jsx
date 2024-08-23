import React, { useState } from 'react';
import GenderCheck from './GenderCheck';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  //submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };


  //gender
  const handleCheckboxChange = (gender)=>{
    setInputs({...inputs,gender})
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-700 mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center text-gray-400 mb-6">Sign Up</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-xs">
        <div className="mb-4">
          <label className="label p-2">
            <span className="text-base label-text text-gray-300">Fullname</span>
          </label>
          <input
            id="fullname"
            type="text"
            placeholder="fullname"
            className="input input-bordered input-error w-full"
            value={inputs.fullName}
            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
          />
        </div>

        <div className="mb-4">
          <label className="label p-2">
            <span className="text-base label-text text-gray-300">Username</span>
          </label>
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered input-error w-full"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          />
        </div>

        <div className="mb-4">
          <label className="label p-2">
            <span className="text-base label-text text-gray-300">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered input-error w-full"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
        </div>

        <div className="mb-4">
          <label className="label p-2">
            <span className="text-base label-text text-gray-300">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="confirmPassword"
            className="input input-bordered input-error w-full"
            value={inputs.confirmPassword}
            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
          />
        </div>

        <GenderCheck onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
        <button type="submit" className="btn btn-primary w-full mt-4">
          Sign Up
        </button>

        <Link to="/login" className="text-sm text-gray-300 hover:underline hover:text-blue-500 mt-4 inline-block">
          Already have an account?
        </Link>
      </form>
    </div>
  );
};

export default Signup;
