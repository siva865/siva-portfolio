import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#2D3250]/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          Sabapathi<span className="text-[#F8B179]">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="hover:text-[#F8B179] transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100vh" }}
            exit={{ height: 0 }}
            className="md:hidden bg-[#2D3250] text-white flex flex-col items-center justify-center gap-10"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                whileHover={{ scale: 1.1 }}
                className="text-2xl font-semibold"
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
