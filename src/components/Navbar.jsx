import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  
  const navigate = useNavigate();

  const loggedOut = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <Link to="/home" className="text-2xl font-bold text-blue-600">
        VenueBook
      </Link>
      <div className="flex items-center gap-8 font-medium">
        <Link to="/home" className="hover:text-blue-600 transition">
          Home
        </Link>
        <Link to="/venues" className="hover:text-blue-600 transition">
          Venues
        </Link>
        <Link to="/my-bookings" className="hover:text-blue-600 transition">
          My Bookings
        </Link>
        <button
          onClick={loggedOut}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
