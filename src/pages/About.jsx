import logo from "../assets/logo.png";

function About() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1] text-black overflow-hidden relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-25 left-25 w-87.5 h-87.5 bg-blue-400/30 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-25 right-25 w-87.5 h-87.5 bg-purple-400/30 blur-[120px] rounded-full"></div>

      <div className="relative z-10 px-6 md:px-20 py-20">

        {/* HEADER */}
        <div className="text-center mb-20">

          <img
            src={logo}
            alt="Q-Tech"
            className="w-15 h-15 bg-black rounded-full mx-auto mb-6"
          />

          <p className="text-blue-600 uppercase tracking-[4px] font-semibold mb-4">
            About Me
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">

            Who

            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              I Am
            </span>

          </h1>

          <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
            I am a passionate Full Stack Developer
            focused on building modern, scalable
            and professional digital experiences.
            I specialize in creating responsive
            websites, powerful backend systems,
            dashboards, APIs and custom web
            applications that solve real problems.
          </p>

        </div>

        {/* ABOUT CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl p-10 shadow-xl">

            <h2 className="text-4xl font-bold mb-6">
              My Journey
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              I started my development journey with
              a passion for technology and creating
              things that people can use in real life.
              Over time, I mastered frontend and
              backend development while building
              professional applications and systems.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              My goal is to help businesses,
              brands and individuals bring their
              ideas to life through clean design,
              smooth functionality and scalable
              technology solutions.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-xl font-medium">
                React
              </span>

              <span className="bg-purple-100 text-purple-700 px-5 py-2 rounded-xl font-medium">
                Node.js
              </span>

              <span className="bg-pink-100 text-pink-700 px-5 py-2 rounded-xl font-medium">
                MongoDB
              </span>

              <span className="bg-green-100 text-green-700 px-5 py-2 rounded-xl font-medium">
                Tailwind CSS
              </span>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl p-8 shadow-xl text-center">

              <h2 className="text-5xl font-bold text-blue-600 mb-3">
                20+
              </h2>

              <p className="text-gray-600">
                Projects Completed
              </p>

            </div>

            <div className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl p-8 shadow-xl text-center">

              <h2 className="text-5xl font-bold text-purple-600 mb-3">
                10+
              </h2>

              <p className="text-gray-600">
                Technologies Mastered
              </p>

            </div>

            <div className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl p-8 shadow-xl text-center">

              <h2 className="text-5xl font-bold text-pink-600 mb-3">
                24/7
              </h2>

              <p className="text-gray-600">
                Client Support
              </p>

            </div>

            <div className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl p-8 shadow-xl text-center">

              <h2 className="text-5xl font-bold text-green-600 mb-3">
                100%
              </h2>

              <p className="text-gray-600">
                Responsive Design
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default About;