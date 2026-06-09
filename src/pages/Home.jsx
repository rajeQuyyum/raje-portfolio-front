import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1] text-black overflow-hidden relative">

  {/* BACKGROUND GLOW */}
  <div className="absolute top-25 left-25 w-87.5 h-87.5 bg-blue-400/30 blur-[120px] rounded-full"></div>

  <div className="absolute bottom-25 right-25 w-87.5 h-87.5 bg-purple-400/30 blur-[120px] rounded-full"></div>

  {/* HERO SECTION */}
  <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center">

    {/* LOGO */}
    <img
      src={logo}
      alt="Q-Tech"
      className="w-28 md:w-15 mb-8 object-contain bg-black rounded-full h-15"
    />

    {/* SMALL TEXT */}
    <p className="text-blue-600 font-semibold tracking-[4px] uppercase mb-4 text-sm md:text-base">
      Welcome To Q-Tech
    </p>

    {/* MAIN TITLE */}
    <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold leading-tight mb-6">

      Full Stack <br />

      <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Developer
      </span>

    </h1>

    {/* DESCRIPTION */}
    <p className="max-w-2xl text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
      I create modern, responsive and
      scalable web applications with
      beautiful frontend experiences and
      powerful backend systems.
    </p>

    {/* BUTTONS */}
    <div className="flex flex-col sm:flex-row items-center gap-4">

      <Link to="/projects" className="w-full sm:w-auto bg-black hover:bg-gray-900 transition text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl">
        View Projects
      </Link>

      <Link to="/chat" className="w-full sm:w-auto">
        <button className="w-full border border-gray-400 hover:bg-black hover:text-white transition px-8 py-4 rounded-2xl font-semibold">
          Live Chat
        </button>
      </Link>

    </div>

    {/* STATS */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-20 w-full max-w-5xl">

      <div className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl p-8 shadow-lg">
        <h2 className="text-4xl font-bold text-blue-600 mb-2">
          20+
        </h2>

        <p className="text-gray-600">
          Projects Completed
        </p>
      </div>

      <div className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl p-8 shadow-lg">
        <h2 className="text-4xl font-bold text-purple-600 mb-2">
          10+
        </h2>

        <p className="text-gray-600">
          Modern Technologies
        </p>
      </div>

      <div className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl p-8 shadow-lg">
        <h2 className="text-4xl font-bold text-pink-600 mb-2">
          24/7
        </h2>

        <p className="text-gray-600">
          Support & Availability
        </p>
      </div>

    </div>

  </div>
</div>
  );
}

export default Home;