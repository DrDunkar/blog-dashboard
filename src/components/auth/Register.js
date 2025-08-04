import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { formValidation } from "../../utils/formValidation";

const Register = () => {
  const [showPassword, setShowPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = formValidation(formData);
    setErrors(validationErrors);
  };

  return (
    <div className="register shadow-md p-[2rem]  w-[32rem] ">
      <div className="text-2xl text-center font-semibold ">
        Register Account{" "}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="my-[2rem]">
          <div>
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full name
            </label>
            <input
              className="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-0 focus:border-gray-300 mt-2"
              name="fullname"
              id="fullname"
              type="text"
              placeholder="Please enter full name"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mt-7">
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
              required
              onChange={handleChange}
            />
            {errors?.email && (
              <p className="text-red-500 text-sm">{errors?.email}</p>
            )}
          </div>
          <div className="relative w-full mt-7">
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
              required
              onChange={handleChange}
            />
            {errors?.password && (
              <p className="text-red-500 text-sm">{errors?.password}</p>
            )}
            <div
              className="absolute top-9 right-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </div>
          </div>
          <div className="relative w-full mt-7">
            <label
              htmlFor="confirmpassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm password
            </label>
            <input
              className="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-0 focus:border-gray-300 pr-10"
              name="confirmpassword"
              id="password"
              type={confirmpassword ? "text" : "password"}
              placeholder="Please enter password"
              required
              onChange={handleChange}
            />
            {errors?.confirmpassword && (
              <p className="text-red-500 text-sm">{errors?.confirmpassword}</p>
            )}
            <div
              className="absolute top-9 right-3 flex items-center cursor-pointer"
              onClick={() => setConfirmPassword((prev) => !prev)}
            >
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-900 text-white  py-4 rounded-md hover:bg-blue-800 mt-8 w-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
