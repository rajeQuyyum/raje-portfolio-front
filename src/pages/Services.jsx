import logo from "../assets/logo.png";

function Services() {

  const services = [
    {
      title: "Full Stack Development",

      description:
        "Complete frontend and backend web application development with modern technologies.",

      icon: "💻",
    },

    {
      title: "Frontend Development",

      description:
        "Beautiful, responsive and modern user interfaces using React and Tailwind CSS.",

      icon: "🎨",
    },

    {
      title: "Backend Development",

      description:
        "Secure and scalable backend systems, APIs and server-side applications.",

      icon: "⚙️",
    },

    {
      title: "Responsive Website Design",

      description:
        "Mobile-friendly websites that work perfectly across all devices and screen sizes.",

      icon: "📱",
    },

    {
      title: "API Integration",

      description:
        "Integration of payment gateways, third-party APIs and external services.",

      icon: "🔗",
    },

    {
      title: "Admin Dashboard Development",

      description:
        "Professional admin panels for analytics, management and system control.",

      icon: "📊",
    },

    {
      title: "Database Management",

      description:
        "Efficient database architecture and management using MongoDB and modern systems.",

      icon: "🗄️",
    },

    {
      title: "Website Maintenance",

      description:
        "Bug fixing, updates, optimization and long-term website support services.",

      icon: "🛠️",
    },
  ];

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
            className="w-15 mx-auto mb-6 bg-black rounded-full h-15 "
          />

          <p className="text-blue-600 uppercase tracking-[4px] font-semibold mb-4">
            Professional Solutions
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">

            My

            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Services
            </span>

          </h1>

          <p className="max-w-2xl mx-auto text-gray-700 text-lg leading-relaxed">
            I provide high-quality development
            services focused on performance,
            modern design and scalable digital
            experiences.
          </p>

        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl p-8 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >

              <div className="w-20 h-20 rounded-2xl bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center text-4xl mb-6 text-white shadow-lg">
                {service.icon}
              </div>

              <h2 className="text-2xl font-bold mb-4">
                {service.title}
              </h2>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Services;