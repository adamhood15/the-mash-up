import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import Form from "../components/forms/Form";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import headphones from "../assets/images/headphones.png";

export default function Home() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [login, { loading }] = useMutation(LOGIN);

  // Define the form fields for the login form
  const loginFields = [
    {
      name: "email",
      label: "E-Mail Address:",
      type: "email",
      placeholder: "Enter your email",
      icon: (
        <i className="fas fa-at text-[#fc2403] absolute left-2 top-1/2 transform -translate-y-1/2" />
      ),
    },
    {
      name: "password",
      label: "Password:",
      type: "password",
      placeholder: "Enter your password",
      icon: (
        <i className="fas fa-lock text-[#fc2403] absolute left-2 top-1/2 transform -translate-y-1/2" />
      ),
    },
  ];

  // Handle form submission
  const handleLogin = async (values) => {
    try {
      const mutationResponse = await login({
        variables: { email: values.email, password: values.password },
      });

      const token = mutationResponse.data.login.token;
      Auth.login(token);
      navigate("/products");
    } catch (e) {
      setErrorMessage("Login failed. Please check your email and password.");
    }
  };

  return (
    <section
      className="w-full bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url(${headphones})`,
        height: "calc(100vh - 160px)",
      }}
    >
      <div className="border-4 rounded-md border-black bg-gray-100 shadow-md px-6 py-8 w-auto max-w-md">
        <Form
          headerProps={{
            title: "Welcome Back",
            subtitle: "Enter your credentials to access your account",
            align: "center",
          }}
          bodyProps={{
            fields: loginFields,
          }}
          footerProps={{
            buttonText: "Sign In",
            buttonVariant: "default",
            isLoading: loading,
            secondaryContent: (
              <p className="text-gray-800 text-sm text-center mt-4">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-[#fc2403] font-semibold ml-1"
                >
                  Register now
                </Link>
              </p>
            ),
          }}
          onSubmit={handleLogin}
        />

        {/* Error message display */}
        {errorMessage && (
          <p className="mt-4 text-red-600 text-sm font-medium text-center">
            {errorMessage}
          </p>
        )}
      </div>
    </section>
  );
}
