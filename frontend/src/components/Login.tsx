import { useState } from "react";
import { setIsLoginType } from "../store/types";
import { FaEye, FaEyeSlash } from "react-icons/fa";
function Login({ setIsLogin }: setIsLoginType) {
  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center text-gray-800">
          Login
        </h1>
        <form className="space-y-6">
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="mb-2 text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="mb-2 text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={isPasswordShow ? "text" : "password"} 
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                required
              />
              <div
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-600 select-none"
                onClick={() => setIsPasswordShow(!isPasswordShow)}
              >
                {isPasswordShow ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-purple-500 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            Submit
          </button>
          <p className="text-center text-[15px]">
            Don't have an account?{" "}
            <span
              className="text-blue-500 underline cursor-pointer"
              onClick={() => setIsLogin(false)}
            >
              Signup
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
