import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { formValidation } from "../../utils/formValidation";
import { userLogin } from "../../services/api";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState(null);
  const [showPassword, setShowPassword] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = formValidation(formData);
    setErrors(validationErrors);
    const payload = {
      formData,
      expiresInMins: 30,
    };
    // const res = userLogin(payload);

    if (!errors) {
      Cookies.set("email", formData?.email);
      toast.success("Login successful! ✅");
      navigate("/dashboard");
    }
  };

  return (
    <div className="shadow-md p-[2rem]  w-[32rem] ">
      <div className="text-2xl text-center font-semibold ">Login </div>
      <form onSubmit={handleSubmit}>
        <div className="my-[2rem]">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email address{" "}
            </label>
            <input
              className="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-0 focus:border-gray-300 mt-2"
              name="email"
              id="email"
              type="email"
              placeholder="Please enter email address"
              onChange={handleChange}
              required
            />
            {errors?.email && (
              <p className="text-red-500 text-sm">{errors?.email}</p>
            )}
          </div>
          <div className="relative w-full mt-8">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              className="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-0 focus:border-gray-300 pr-10"
              name="password"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Please enter password"
              onChange={handleChange}
              required
            />
            <div
              className="absolute top-9 right-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </div>

            {errors?.password && (
              <p className="text-red-500 text-sm">{errors?.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-900 text-white  py-4 rounded-md hover:bg-blue-800 mt-8 w-full"
          >
            Login
          </button>
        </div>
      </form>

      <p className="text-center">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-800">
          {" "}
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
