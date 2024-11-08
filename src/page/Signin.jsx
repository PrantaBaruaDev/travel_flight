import React from 'react';
import planeim from "src/assets/logback.jpg";

const Signin = () => {
    return (
        <div 
            className="w-full h-[950px] sm:h-[550px] xs:h-[850px] lg:h-[490px] mb-8 rounded-xl shadow-xl flex items-center justify-center"
            style={{
                backgroundImage: `url(${planeim})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="card glass w-[550px] h-[500px] flex flex-col p-8 rounded-xl shadow-xl space-y-6 bg-opacity-80">
                {/* Email Address */}
                <div className="flex flex-col text-left">
                    <label className="mb-2 font-medium text-white">Email Address</label>
                    <div className="input input-bordered flex items-center gap-2 p-2 rounded-lg border border-gray-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-100 text-white">
                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" className="grow bg-transparent outline-none text-white" placeholder="Email" />
                    </div>
                </div>

                {/* Password */}
                <div className="flex flex-col text-left">
                    <label className="mb-2 font-medium text-white">Password</label>
                    <div className="input input-bordered flex items-center gap-2 p-2 rounded-lg border border-gray-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-100 text-white">
                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="password" className="grow bg-transparent outline-none text-white" placeholder="Password" />
                    </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                    <label className="flex items-center text-white">
                        <input type="checkbox" className="mr-2 form-checkbox text-red-600" />
                        Remember me
                    </label>
                    <a href="#" className="text-red-600 text-sm font-medium">Forgot Password?</a>
                </div>

                {/* Sign In Button */}
                <button className="w-full bg-red-600 text-white font-medium py-2 rounded-lg hover:bg-red-700">
                    Sign in
                </button>

                {/* Divider */}
                <div className="flex items-center my-4">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-2 text-white">or Sign in with</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                {/* Social Login Buttons */}
                <div className="flex justify-center gap-4">
                    {/* Facebook button */}
                    <button className="flex items-center justify-center w-1/2 px-4 py-2 border border-gray-300 rounded-lg text-white hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                            <path d="M22.675 0H1.325C.593 0 0 .6 0 1.332v21.336C0 23.4.593 24 1.325 24h11.495v-9.294H9.69V11.27h3.13V8.41c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.1 2.797.143v3.24l-1.92.001c-1.506 0-1.797.717-1.797 1.77v2.316h3.587l-.467 3.436h-3.12V24h6.116c.73 0 1.323-.6 1.323-1.332V1.332C24 .6 23.405 0 22.675 0z"/>
                        </svg>
                        Facebook
                    </button>
                    {/* Google button */}
                    <button className="flex items-center justify-center w-1/2 px-4 py-2 border border-gray-300 rounded-lg text-white hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor" className="w-5 h-5 mr-2">
                            <path d="M24 9.5c3.8 0 6.8 1.2 8.9 3.5l6.6-6.6C34.6 3.1 29.9 1 24 1 14.1 1 6.1 7.6 2.8 16.5l7.9 6.2C12.2 13.8 17.5 9.5 24 9.5zM24 37c-6.5 0-11.8-4.3-13.3-10.5l-7.9 6.2C6.1 40.4 14.1 47 24 47c6.2 0 11.6-2.3 15.3-6.3l-7.2-6C30.8 36 27.7 37 24 37z"/>
                            <path d="M46.5 24.5H24v-9h12.9c-.4-1-1-2-1.7-2.8L31 6.9c-2.3 2.2-5.3 3.6-9 3.6-6.5 0-12-4.3-13.6-10.4L1.5 10.7c2.8 8.9 10.8 15.5 20.7 15.5 4.6 0 9-.6 13-2.7v1.1C37.6 35 29.9 43 20 43c-4.2 0-8.3-1.2-11.6-3.4L1.7 37.4c4.7 5.7 12 9.1 20.3 9.1 7.9 0 15-3.1 20.3-8.6 4.7-5.4 7.4-12.7 7.7-20.4V24.5z"/>
                        </svg>
                        Google
                    </button>
                </div>

                {/* Create Account Link */}
                <p className="text-center text-white text-sm mt-4">
                    Don't have a Flight Expert Account yet? 
                    <a href="#" className="text-red-600 font-medium ml-1">Create an Account</a>
                </p>
            </div>
        </div>
    );
};

export default Signin;
