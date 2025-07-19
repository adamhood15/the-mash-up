import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';



export default function SignupForm(props) {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({ email: '', password: ''});
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try{
      
      const mutationResponse = await addUser({
        variables: { firstName: formState.firstName, lastName: formState.lastName, email: formState.email, username: formState.username, password: formState.password},
      });

      Auth.login(data.addUser.token);

      console.log('User Added!');

    } catch(e) {
      console.log(e);
    }
  }


  return (
    <>
        <div
          className="
          border-8
          rounded-md
          border-black
          bg-gray-400
          flex flex-col
          bg-gray-100
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          w-50
          max-w-md
        "
        >
          <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
            Welcome Back
          </div>
          <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
            Enter your credentials to access your account
          </div>

          <div className="mt-10">
            <form onSubmit={handleFormSubmit}>
              <div className="flex flex-col mb-5">
                <label
                  htmlFor="email"
                  className="mb-1 text-xs tracking-wide text-gray-600"
                >
                  E-Mail Address:
                </label>
                <div className="relative">
                  <div
                    className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                  >
                    <i className="fas fa-at text-[#fc2403]"></i>
                  </div>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-red-400
                  "
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="password"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  Password:
                </label>
                <div className="relative">
                  <div
                    className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                  
                  >
                    <span>
                      <i className="fas fa-lock text-[#fc2403]"></i>
                    </span>
                  </div>

                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-red-400
                  "
                  onChange={handleChange}
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div className="flex w-full">
                <button
                  type="submit"
                  className="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-[#fc2403]
                  hover:bg-red-600
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
                >
                  <span className="mr-2 uppercase">Sign In</span>
                  <span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        <div className="flex justify-center items-center mt-6">
          <p
            href="#"
            target="_blank"
            className="
            inline-flex
            items-center
            text-white
            font-medium
            text-xs text-center
          "
          >
            <span className="ml-2 text-lg">
              You don't have an account?
              <Link to="/signup" className="text-lg ml-2 text-[#fc2403] font-semibold">
                Register now
              </Link>
            </span>
          </p>
        </div>
      
        </div>

    </>
  );
}
