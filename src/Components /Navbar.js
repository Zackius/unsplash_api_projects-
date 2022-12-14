import React from "react";
import { logo } from "../assests/index";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[80px] w-full fixed bg-slate-400 flex justify-between">
      <img className="h-16 w-42 object-cover pt-2" src={logo} alt="Web Logo" />

      <ul className="flex  pt-4 p-8">
        <li>
          <Link to="/" className="px-12 hover:text-white font-bold">
            {" "}
            Home
          </Link>
        </li>
        <li>
                  <Link to="/getimage" className="px-12 hover:text-white font-bold"> Photos</Link>
              </li>

        <li>
          <Link to="/signin" className="px-12 hover:text-white font-bold">
            {" "}
            Sign In
          </Link>
        </li>
        <li>
          <Link to="/signup" className="px-12 hover:text-white font-bold">
            {" "}
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
