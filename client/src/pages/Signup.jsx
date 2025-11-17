import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { ADD_USER } from '../utils/mutations'
import Auth from '../utils/auth'

export default function SignUp () {
  const navigate = useNavigate('/products')
  const [userData, setUserData] = useState({})
  const [errorMessage, setErrorMessage] = useState('')

  const [addUser] = useMutation(ADD_USER)

  const handleInputChange = event => {
    const { id, value } = event.target
    setUserData({ ...userData, [id]: value })
  }

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      // Query database
      const { data } = await addUser({
        variables: { ...userData }
      })

      Auth.login(data.addUser.token)
    } catch (error) {
      setErrorMessage(error)
    }
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-[#fc2403] p-10'>
      <form
        className='
          flex flex-col
          bg-gray-100
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          w-75
          max-w-md
        '
        onSubmit={handleSubmit}
      >
        <p className='font-medium self-center text-xl sm:text-3xl text-gray-800'>
          Sign up
        </p>
        {errorMessage && <p>{errorMessage}</p>}
        <div className='mt-10'>
          <label
            className='mb-1 text-xs tracking-wide text-gray-600'
            htmlFor='firstName'
          >
            First Name:
          </label>
          <input
            className='text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-red-400'
            placeholder='First Name'
            type='text'
            id='firstName'
            onChange={handleInputChange}
          />

          <label
            className='mb-1 text-xs tracking-wide text-gray-600'
            htmlFor='lastName'
          >
            Last Name:
          </label>
          <input
            className='text-sm
                  placeholder-gray-500
                  pl-10
                  pr-4
                  border border-gray-400
                  w-full
                  py-2
                  focus:outline-none focus:border-red-400'
            placeholder='Last Name'
            type='text'
            id='lastName'
            onChange={handleInputChange}
          />

          <label
            className='mb-1 text-xs tracking-wide text-gray-600'
            htmlFor='email'
          >
            Email:
          </label>
          <input
            className='text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-red-400'
            placeholder='Email'
            type='email'
            id='email'
            onChange={handleInputChange}
          />

          <label
            className='mb-1 text-xs tracking-wide text-gray-600'
            htmlFor='username'
          >
            Username:
          </label>
          <input
            className='text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-red-400'
            placeholder='Username'
            type='text'
            id='username'
            onChange={handleInputChange}
          />

          <label
            className='mb-1 text-xs tracking-wide text-gray-600'
            htmlFor='password'
          >
            Password:
          </label>
          <input
            className='text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-red-400'
            placeholder='Password'
            type='password'
            id='password'
            onChange={handleInputChange}
          />

          <button
            className='flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-[#fc2403]
                  hover:bg-black
                  
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in'
            type='submit'
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  )
}
