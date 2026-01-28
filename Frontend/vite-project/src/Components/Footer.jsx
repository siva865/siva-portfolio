import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2D3250] text-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Name */}
        <h3 className="text-2xl font-bold">
          Sabapathi <span className="text-[#F8B179]">.</span>
        </h3>

        <p className="mt-2 text-white/70">
          Full Stack Developer — Building modern & scalable web apps
        </p>

        {/* Icons */}
        <div className="flex justify-center gap-5 mt-6">
          <motion.a
            whileHover={{ scale: 1.15 }}
            href="mailto:siranjeevisabapathi@gmail.com"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#2D3250]"
          >
            <FaEnvelope />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.15 }}
            href="https://github.com/siva865"
            target="_blank"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#2D3250]"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.15 }}
            href="https://www.linkedin.com/in/sabapathi-sivabalan-bab738241/"
            target="_blank"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#2D3250]"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.15 }}
            href="https://wa.me/918754615978?text=Hi%20Sabapathi,%20I%20want%20to%20work%20with%20you%20🙂"
            target="_blank"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#25D366] text-white"
          >
            <FaWhatsapp />
          </motion.a>
        </div>

        {/* Bottom text */}
        <p className="mt-8 text-sm text-white/50">
          © {new Date().getFullYear()} Sabapathi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
