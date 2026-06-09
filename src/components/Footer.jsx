import React from 'react'
import logo from "../assets/logo.png";

export default function Footer() {
  return (
   <footer className="bg-black text-white px-6 md:px-20 py-14 mt-20">

  <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

    {/* LOGO & ABOUT */}
    <div>

      <div className="flex items-center gap-3 mb-5">

        <img
          src={logo}
          alt="Q-Tech"
          className="w-12 h-12 object-contain"
        />

        <h2 className="text-2xl font-bold">
          Q-Tech
        </h2>

      </div>

      <p className="text-gray-400 leading-relaxed">
        Building modern, responsive and
        scalable digital experiences with
        beautiful UI and powerful backend
        systems.
      </p>

    </div>

    {/* QUICK LINKS */}
    <div>

      <h3 className="text-lg font-semibold mb-5">
        Quick Links
      </h3>

      <div className="space-y-3 text-gray-400">

        <p className="hover:text-white transition cursor-pointer">
          Home
        </p>

        <p className="hover:text-white transition cursor-pointer">
          Projects
        </p>

        <p className="hover:text-white transition cursor-pointer">
          Services
        </p>

        <p className="hover:text-white transition cursor-pointer">
          Contact
        </p>

      </div>

    </div>

    {/* SERVICES */}
    <div>

      <h3 className="text-lg font-semibold mb-5">
        Services
      </h3>

      <div className="space-y-3 text-gray-400">

        <p>Web Development</p>

        <p>Frontend Design</p>

        <p>Backend Systems</p>

        <p>API Integration</p>

      </div>

    </div>

    {/* CONTACT */}
    <div>

      <h3 className="text-lg font-semibold mb-5">
        Contact
      </h3>

      <div className="space-y-3 text-gray-400">

        <p>Email: qtech@gmail.com</p>

        <p>Phone: +234 816 956 8398</p>
        <a
  href="https://wa.me/2348169568398"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white transition"
>
  WhatsApp: +234 8169568398
</a>

        <p>Benin City, Nigeria</p>

      </div>

    </div>

  </div>

  {/* BOTTOM */}
  <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

    <p className="text-gray-500 text-sm text-center md:text-left">
      © 2026 Q-Tech. All rights reserved.
    </p>

    <div className="flex items-center gap-5 text-gray-400">

      <p className="hover:text-white transition cursor-pointer">
        Instagram
      </p>

      <p className="hover:text-white transition cursor-pointer">
        GitHub
      </p>

      <p className="hover:text-white transition cursor-pointer">
        LinkedIn
      </p>

    </div>

  </div>

</footer>
  )
}
