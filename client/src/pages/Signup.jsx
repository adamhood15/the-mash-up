import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Form from "../components/forms/Form";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import headphones from "../assets/images/headphones.png";

export default function SignUp() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [addUser, { loading }] = useMutation(ADD_USER);

  // Signup fields
  const signupFields = [
    { name: "firstName", label: "First Name", type: "text", placeholder: "First Name" },
    { name: "lastName", label: "Last Name", type: "text", placeholder: "Last Name" },
    { name: "email", label: "E-Mail Address", type: "email", placeholder: "Email" },
    { name: "username", label: "User Name", type: "text", placeholder: "Username" },
    { name: "password", label: "Password", type: "password", placeholder: "Password" },
  ];

  const handleSignup = async (values) => {
    try {
      const { data } = await addUser({ variables: { ...values } });
      Auth.login(data.addUser.token);
      navigate("/products");
    } catch (error) {
      if (error.graphQLErrors && error.graphQLErrors.length > 0) {
        const gqlError = error.graphQLErrors[0];
        if (gqlError.extensions.code === "Email_ALREADY_EXISTS") {
          setErrorMessage("That email is already registered. Please log in.");
        } else {
          setErrorMessage(gqlError.message);
        }
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <section
      className="w-full bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${headphones})`, height: "100%" }}
    >
      <div className="border-4 rounded-md border-black bg-gray-100 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 w-auto max-w-md">
        <Form
          headerProps={{
            title: "Create Your Account",
            subtitle: "Fill in your details to sign up",
            align: "center",
          }}
          bodyProps={{
            fields: signupFields,
          }}
          footerProps={{
            buttonText: "Sign Up",
            buttonVariant: "default",
            isLoading: loading,
            secondaryContent: (
              <p className="text-gray-800 text-sm text-center mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-[#fc2403] font-semibold ml-1">
                  Log in
                </Link>
              </p>
            ),
          }}
          onSubmit={handleSignup}
        />

        {errorMessage && (
          <p className="mt-4 text-red-600 text-sm font-medium text-center">
            {errorMessage}
          </p>
        )}
      </div>
    </section>
  );
}
