import { useEffect } from "react";
import {
  Code,
  Award,
  Globe,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => (
  <div className="text-center lg:mb-8 mb-2 px-[5%]">
    <div className="inline-block relative group">
      <h2
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        data-aos="zoom-in-up"
        data-aos-duration="600"
      >
        About Me
      </h2>
    </div>
    <p
      className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <Sparkles className="w-5 h-5 text-purple-400" />
      Transforming ideas into digital experiences
      <Sparkles className="w-5 h-5 text-purple-400" />
    </p>
  </div>
);

const ProfileImage = () => (
  <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
      <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />
      </div>
    </div>
  </div>
);

const StatCard = ({ icon: Icon, color, value, label, description, animation }) => (
  <div data-aos={animation} data-aos-duration={1300} className="relative group">
    <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between">
      <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
      <div className="flex items-center justify-between mb-4">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <span className="text-4xl font-bold text-white" data-aos="fade-up-left" data-aos-duration="1500">
          {value}
        </span>
      </div>
      <div>
        <p className="text-sm uppercase tracking-wider text-gray-300 mb-2" data-aos="fade-up" data-aos-duration="800">
          {label}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-400" data-aos="fade-up" data-aos-duration="1000">
            {description}
          </p>
          <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
        </div>
      </div>
    </div>
  </div>
);

const AboutPage = () => {
  // const { totalProjects, totalCertificates, YearExperience } = useMemo(() => {
  //   const storedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
  //   const storedCertificates = JSON.parse(localStorage.getItem("certificates") || "[]");
  //   const startDate = new Date("2021-11-06");
  //   const today = new Date();
  //   const experience = today.getFullYear() - startDate.getFullYear() - (today < new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate()) ? 1 : 0);
  //   return {
  //     totalProjects: storedProjects.length,
  //     totalCertificates: storedCertificates.length,
  //     YearExperience: experience,
  //   };
  // }, []);

  useEffect(() => {
    const initAOS = () => AOS.init({ once: false });
    initAOS();
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initAOS, 250);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  const statsData =[
      { icon: Code, color: "from-[#6366f1] to-[#a855f7]", value: 0, label: "Projects", description: "Completed projects" },
      { icon: Award, color: "from-[#f59e0b] to-[#ef4444]", value: 1, label: "Certificates", description: "Earned certifications" },
      { icon: Globe, color: "from-[#10b981] to-[#3b82f6]", value: "1.5+", label: "Years", description: "Experience in the industry" },
    ]

  return (
    <div>
      <Header />
      <ProfileImage />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-5 py-5">
        {statsData.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            color={stat.color}
            value={stat.value}
            label={stat.label}
            description={stat.description}
            animation="fade-up"
          />
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
