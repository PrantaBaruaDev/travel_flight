import React from 'react';

const Navbar = () => {


    const navui = () => {
        return (
                    <div >
         <div className="navbar flex-1 justify-between ">
          {/* <div className="w-10 mr-[-50px] lg:mr-0 rounded-2xl">
            <img 
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div> */}

<div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
    {/* <div className="grid ">
      <a className="btn -mr-20 lg:mr-0 btn-ghost mb-0 pt-[20px] font-extrabold  text-teal-700 text-xl">FLYINGZONE</a>
      <a className="btn -mr-20 lg:mr-0 btn-ghost pt-[0px]   text-Teal-700 -mt-4 text-[12px]">all about your journey</a>
    </div> */}
    
    <div className="flex-none  gap-2">
    <button className="btn ml-[110px] lg:ml-[950px]  bg-teal-700 border-0  text-white btn-success">Sign in</button>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div> 
  </div>
        );
    }

    return (

<div className="navbar bg-base-100">
<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
  <div className="flex-1">
  <div className="grid ">
      <a className="btn -mr-20 lg:mr-0 btn-ghost mb-0 pt-[20px] font-extrabold  text-teal-700 text-xl">FLYINGZONE</a>
      <a className="btn -mr-20 lg:mr-0 btn-ghost pt-[0px]   text-Teal-700 -mt-4 text-[12px]">all about your journey</a>
    </div>
  </div>
  <div className="flex-none  gap-2">
  <button className="btn ml-[110px] lg:ml-[950px]  bg-teal-700 border-0  text-white btn-success">Sign in</button>
  
  </div>
   
   
 </div>

        )
};

export default Navbar;