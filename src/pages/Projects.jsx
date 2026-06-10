import logo from "../assets/logo.png";

function Projects() {

  const projects = [
  {
    title: "Live Chat App",

    description:
      "Real-time chat application with admin dashboard and email notifications.",

    tech:
      "React • Node.js • MongoDB",

    liveDemo:
      "https://raje-portfolio-front.vercel.app/chat",
  },

  {
    title: "Shipment Tracking Website",

    description:
      "Shipment and package tracking platform with delivery updates and tracking system.",

    tech:
      "React • Express • MongoDB",

    liveDemo:
      "https://ship-three-beta.vercel.app",
  },

  {
    title: "Online Banking",

    description:
      "Secure online banking application with transfers and transaction management.",

    tech:
      "React • JWT • MongoDB",

    liveDemo:
      "https://front-end-rose-tau.vercel.app",
  },

  {
    title: "Management Dashboard",

    description:
      "Secure online banking application with transfers and transaction management.",

    tech:
      "React • JWT • MongoDB, Node.js",

    liveDemo:
      "https://yourwebsite.com",
  },

  {
    title: "Portfolio Website",

    description:
      "Modern responsive portfolio website with clean and professional UI.",

    tech:
      "React • Tailwind CSS",

    liveDemo:
      "https://raje-portfolio-front.vercel.app",
  },

  {
    title: "E-Commerce Store",

    description:
      "Responsive online shopping website with payment system and admin dashboard.",

    tech:
      "React • Stripe • MongoDB",

    liveDemo:
      "https://e-com-front-henna.vercel.app",
  },

  {
    title: "Business Website",

    description:
      "Professional business website with responsive design and contact integration.",

    tech:
      "React • Tailwind CSS",

    liveDemo:
      "https://ekpfront.vercel.app/",
  },

  {
  title: "Custom Web Applications",

  description:
    "Need a website, web app, dashboard, banking system, shipment platform or any custom digital solution? I can build it professionally based on your needs. Let us know  thanks.🙏"



  
},
];

  return (
    <div className="min-h-screen bg-linear-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1] text-black overflow-hidden relative">

      {/* GLOW EFFECTS */}
      <div className="absolute top-25 left-25 w-87.5 h-87.5 bg-blue-400/30 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-25 right-25 w-87.5 h-87.5 bg-purple-400/30 blur-[120px] rounded-full"></div>

      <div className="relative z-10 px-6 md:px-20 py-20">

        {/* HEADER */}
        <div className="text-center mb-20">

          <img
            src={logo}
            alt="Q-Tech"
            className="w-15 h-15 rounded-full bg-black mx-auto mb-6"
          />

          <p className="text-blue-600 uppercase tracking-[4px] font-semibold mb-4">
            My Work
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Featured

            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Projects
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-700 text-lg leading-relaxed">
            Here are some modern and scalable
            projects I have built using the
            latest web technologies and clean
            responsive design systems.
          </p>

        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl p-8 shadow-xl hover:scale-[1.02] transition duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-linear-to-r from-blue-500 to-purple-500 mb-6 flex items-center justify-center text-white text-2xl font-bold">
                {index + 1}
              </div>

              <h2 className="text-3xl font-bold mb-4">
                {project.title}
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="mb-8">
                <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium">
                  {project.tech}
                </span>
              </div>

              {/* LIVE DEMO BUTTON */}
              <div className="flex gap-4 flex-wrap">

                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-900 transition">
                    Live Demo
                  </button>
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Projects;