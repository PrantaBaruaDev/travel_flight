import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="navbar bg-base-100">
            <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
            >
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                </div>
            </div>
            <div className="flex-1">
                <div className="grid ">
                    <a className="btn -mr-20 lg:mr-0 btn-ghost mb-0 pt-[20px]">
                        <span className=" font-extrabold  text-teal-700 text-xl">
                        FLYINGZONE
                        </span>
                        <span className="-mr-20 lg:mr-0 pt-[0px] text-Teal-700 -mt-4 text-[12px]">
                        all about your journey
                        </span>
                    </a>
                    {/* <a className="btn -mr-20 lg:mr-0 btn-ghost pt-[0px]   text-Teal-700 -mt-4 text-[12px]">
                        all about your journey
                    </a> */}
                </div>
            </div>
            <div className="flex-none  gap-2">
              <nav>
              <ul>
                <li>

              <Link to="/" >Home</Link>
                </li>
                <li>

              <Link to="/chooseflight">Flight</Link>
                </li>
              </ul>
              </nav>

                <button className="btn ml-[110px] lg:ml-[950px]  bg-teal-700 border-0  text-white btn-success">
                    Sign in
                </button>
            </div>
        </div>
    );
};

export default Navbar;
