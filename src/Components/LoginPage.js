import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  
  });

  const handleChange = (e) => {
    const { name, value , } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  axios.post(" http://192.168.1.15:8000/user/login", formData)
    .then((response) => {
      console.log('Response Data:', response.data); 
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      } else {
        console.error('Token not found in the response data.');
      }
    })
    .catch((error) => {
      console.error('Error during login:', error);
    });
};


  return (
      <div>
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Log in to your account
                </h1>
                <form id="loginForm" onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                    
                  </div>
                 
  
                  <button
                    
                  
                    className="w-full text-white bg-blue-800 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  >
                    Login
                  </button>
                  <div>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            you want to create an account?<Link to="/SignUp" className="font-medium text-primary-600 hover:underline dark:text-primary-500">  Sign Up</Link>
                        </p>
                        </div>
                

                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
   export default LoginPage;
  