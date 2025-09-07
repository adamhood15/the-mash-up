import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import { Button } from "../ui/Button.jsx";
import { Label } from "./Label.jsx";
import { InputField } from "./InputField.jsx";
import Auth from "../utils/auth";

export default function SignUpForm () {
  const navigate = useNavigate("/products");
  const [userData, setUserData] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const [addUser] = useMutation(ADD_USER);

  const formFields = [
    {
      id: 'firstName',
      label: 'First Name',
      type: 'text',
      icon: '<i class="fas fa-address-card text-[#fc2403]" aria-hidden="true"></i>',
      includeIn: ['signup']
    },
    {
      id: 'lastName',
      label: 'Last Name',
      type: 'text',
      icon: '<i class="fas fa-address-card text-[#fc2403]" aria-hidden="true"></i>',
      includeIn: ['signup']
    },
    {
      id: 'email',
      label: 'E-Mail Address',
      type: 'email',
      icon: '<i class="fas fa-at text-[#fc2403]" aria-hidden="true"></i>',
      includeIn: ['signup', 'login']
    },
    {
      id: 'userName',
      label: 'User Name',
      type: 'text',
      icon: '<i class="fas fa-user-o text-[#fc2403]" aria-hidden="true"></i>',
      includeIn: ['signup', 'login']
    },
    {
      id: 'password',
      label: 'Password',
      type: 'password',
      icon: '<i class="fas fa-lock text-[#fc2403]" aria-hidden="true"></i>',
      includeIn: ['signup', 'login']
    }
]

function createFields(formFields) {
 
}

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setUserData({ ...userData, [id]: value });

  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      // Query database
      const { data } = await addUser({
        variables: { ...userData },
      });
  
      Auth.login(data.addUser.token);

    } catch (error) {
      setErrorMessage(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fc2403] p-10">
      <form
        className="
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
        "
        action={submit}
        onSubmit={handleSubmit}
      >
        <p className="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Sign up
        </p>
        {errorMessage && (
          <p>
            {errorMessage}
          </p>
        )}
        <div className="mt-10">

          <Label />
          <InputField /> 

         <Button type="submit"/>
        </div>
      </form>
    </div>
  );
};


