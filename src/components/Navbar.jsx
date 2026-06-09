import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
  <img
    src={logo}
    alt="Q-Tech Logo"
    className="w-12 h-12 object-contain"
  />

  <h1 className="text-2xl font-bold">
    Q-Tech
  </h1>
</div>

        <div className="hidden md:flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/services">Services</Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <FaBars size={22} />
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-4 mt-4 px-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/chat">Chat</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;