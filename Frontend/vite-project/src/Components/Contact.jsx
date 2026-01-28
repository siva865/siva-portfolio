import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  const iconStyle =
    "w-14 h-14 flex items-center justify-center rounded-full text-xl";

  return (
    <section className="bg-[#FFFFFF] py-20">
      <h2 className="text-4xl font-bold text-center text-[#2D3250] mb-10">
        Contact <span className="text-[#F8B179]">Me</span>
      </h2>

      <div className="flex justify-center gap-6 flex-wrap">
        {/* Email */}
        <motion.a
          whileHover={{ scale: 1.15 }}
          href="mailto:siranjeevisabapathi@gmail.com"
          className={`${iconStyle} bg-[#2D3250] text-[#F8B179]`}
        >
          <FaEnvelope />
        </motion.a>

        {/* GitHub */}
        <motion.a
          whileHover={{ scale: 1.15 }}
          href="https://github.com/siva865"
          target="_blank"
          className={`${iconStyle} bg-[#2D3250] text-[#F8B179]`}
        >
          <FaGithub />
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          whileHover={{ scale: 1.15 }}
          href="https://www.linkedin.com/in/sabapathi-sivabalan-bab738241/"
          target="_blank"
          className={`${iconStyle} bg-[#2D3250] text-[#F8B179]`}
        >
          <FaLinkedin />
        </motion.a>

        {/* Phone */}
        <motion.a
          whileHover={{ scale: 1.15 }}
          href="tel:8754615978"
          className={`${iconStyle} bg-[#2D3250] text-[#F8B179]`}
        >
          <FaPhoneAlt />
        </motion.a>

        {/* WhatsApp */}
        <motion.a
          whileHover={{ scale: 1.15 }}
          href="https://wa.me/918754615978?text=Hi%20Sabapathi,%20I%20want%20to%20work%20with%20you%20🙂"
          target="_blank"
          className={`${iconStyle} bg-[#25D366] text-white`}
        >
          <FaWhatsapp />
        </motion.a>
      </div>
    </section>
  );
}
