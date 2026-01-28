import { motion } from "framer-motion";
import profileImg from "../assets/Hero.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 bg-[#2D3250] text-white"
    >
      {/* TEXT */}
      <div className="text-center md:text-left max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl mt-20 font-extrabold leading-tight"
        >
          Hi, I'm <br />
          <span className="text-[#F8B179]">Sabapathi</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-xl md:text-2xl font-semibold"
        >
          Fullstack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-4 text-white/80"
        >
          I am a passionate Full Stack Developer who builds modern,
          high-performance and interactive web applications with clean UI
          and scalable backend systems.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          {/* Explore Skills */}
          <a href="#skills">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-8 py-3 rounded-full bg-[#F8B179] text-[#2D3250] font-semibold"
            >
              Explore My Skills
            </motion.button>
          </a>

          {/* Contact Me - WhatsApp */}
          <a
            href="https://wa.me/918754615978?text=Hi%20Sabapathi,%20I%20want%20to%20work%20with%20you%20🙂"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-8 py-3 rounded-full border-2 border-[#F8B179] text-[#F8B179] font-semibold"
            >
              Contact Me
            </motion.button>
          </a>
        </motion.div>
      </div>

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative"
      >
        <div className="absolute inset-0 rounded-full bg-[#F8B179] blur-3xl opacity-30"></div>

        <motion.img
          whileHover={{ scale: 1.05 }}
          src={profileImg}
          alt="Sabapathi"
          className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-[#F8B179]"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
