import React from "react";
import { logo } from "../assests/index";
import { Link } from "react-router-dom";
import  {FaSignInAlt, FaUserAlt} from "react-icons/fa"

const Navbar = () => {
  return (
    <div className="h-auto  w-full fixed bg-slate-400 flex justify-evenly">
      <div>
        <Link to="/">
        <img className="h-16 w-42 object-cover pt-2 " src={logo} alt="Web Logo" />
        </Link>
      
      </div>
      <div className=" flex p-5  gap-8">
                  <Link to="/getimage" className="px-1  hover:text-white font-bold underline"> Photos</Link>
          <Link to="/signin" className="gap-2 hover:text-white font-bold underline">
            Sign In
          </Link>
        
          <Link to="/signup" className=" gap-2 hover:text-white font-bold underline">
            Sign Up
          </Link>
      </div>
    </div>
  );
};

export default Navbar;
