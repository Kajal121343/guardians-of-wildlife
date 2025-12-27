import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Guardians of Wildlife</div>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/wildlife" className="hover:text-yellow-300">Wildlife</Link>
        <Link to="/programs" className="hover:text-yellow-300">Programs</Link>
        <Link to="/join-team" className="hover:text-yellow-300 font-semibold">Join Our Team</Link>
        <Link to="/blogs" className="hover:text-yellow-300">Blog</Link>
        <Link to="/contact" className="hover:text-yellow-300">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
