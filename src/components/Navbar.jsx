import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div>
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
                    <div className="w-44 h-fit">
                        <a className="btn -mr-20 lg:mr-0 btn-ghost" href="/">
                            <span className="font-extrabold text-teal-700 text-xl ">
                                FLYINGZONE
                            </span>
                            <span>all about your journey</span>
                        </a>
                    </div>
                </div>
                <div className="flex-none  gap-2">
                    <button onClick={() => navigate('/signin')}  className="btn ml-[110px] lg:ml-[950px]  bg-teal-700 border-0  text-white btn-success">
                        Sign in
                    </button>
                </div>
            </div>
            <nav>
                <ul className="flex items-center gap-4">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/chooseflight">Flight</Link>
                    </li>
                    <li>
                        <Link to="/travelerentery">traveller Entry details</Link>
                    </li>
                    <li>
                        <Link to="/travelerdetails">travellerdetails</Link>
                    </li>
                    <li>
                        <Link to="/Payment">Payment</Link>
                    </li>
                    <li>
                        <Link to="/account">create account</Link>
                    </li>
                    <li>
                        <Link to="/flight">flights</Link>
                        <Link to="/team">Team Member</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
