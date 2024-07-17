import { Link, useNavigate } from "react-router-dom";

import React from "react";

const Navbar = () => {
  const handleLogout = () => {
    const navigate = useNavigate();
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="flex flex-row w-full justify-between pt-3 shadow-md ">
      <h2 className="text-2xl">Name</h2>
      <div className="flex flex-row gap-5 mr-5">
        <Link to={"/"}>Home</Link>
        <Link to={"/movie"}>Movie</Link>
        <Link to={"/tv-show"}>TV Show</Link>
        <div onClick={handleLogout}>Logout</div>
      </div>
    </div>
  );
};

export default Navbar;
