import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );
      if (response.data.success) {
        alert("Success Login");
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        setError(error.response.data.error);
        console.log(error);
        console.log(error.response.data.error);
      } else {
        setError("Server error: ");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-600 to-gray-300 p-4">
      <h2 className="text-4xl font-bold text-white mb-6 font-pacific">
        Employee Management System
      </h2>
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-purple-800 mb-6 text-center">
          Login
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-purple-800 mb-1">
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
              className="w-full px-4 text-purple-800 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-purple-800 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="*********"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 text-purple-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4 flex items-center justify-between text-sm">
            <label className="inline-flex items-center text-gray-600">
              <input
                type="checkbox"
                className="form-checkbox text-purple-600"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="#" className="text-purple-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-purple-400 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>
        {/* <p className="text-center text-gray-600 text-sm">
          Don't have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p> */}
      </div>
    </div>
  );
};

export default Login;
