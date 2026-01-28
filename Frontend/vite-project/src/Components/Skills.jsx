import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// SKILLS DATA
const frontendSkills = [
  { name: "HTML5 & CSS3", percent: 95 },
  { name: "JavaScript (ES6+)", percent: 90 },
  { name: "React.js", percent: 90 },
  { name: "Tailwind CSS", percent: 92 },
  { name: "Responsive Design", percent: 95 },
  { name: "UI / UX Implementation", percent: 88 },
  { name: "Framer Motion Animations", percent: 85 },
  { name: "Performance Optimization", percent: 80 },
];

const backendSkills = [
  { name: "Node.js", percent: 88 },
  { name: "Express.js", percent: 90 },
  { name: "MongoDB", percent: 85 },
  { name: "RESTful APIs", percent: 92 },
  { name: "Authentication & Authorization", percent: 85 },
  { name: "Database Design", percent: 80 },
  { name: "API Security", percent: 78 },
  { name: "Deployment & Server Basics", percent: 75 },
];

const Skills = () => {
  return (
    <section className="py-24 px-6 bg-white text-[#2D3250]" id="Skills">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* TITLE */}
        <motion.h2
          variants={cardVariants}
          className="text-3xl md:text-4xl font-extrabold text-center"
        >
          My Skills
        </motion.h2>

        <motion.p
          variants={cardVariants}
          className="mt-4 max-w-2xl mx-auto text-center text-[#2D3250]/70"
        >
          I am a Full Stack Developer who creates complete web solutions —
          handling everything from user-friendly interfaces to secure and
          scalable backend systems.
        </motion.p>

        {/* SKILLS GRID */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* FRONTEND */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -12 }}
            className="bg-[#2D3250] text-white p-10 rounded-3xl shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-[#F8B179] mb-6">
              Frontend Skills
            </h3>

            <div className="space-y-5">
              {frontendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>⚡ {skill.name}</span>
                    <span>{skill.percent}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percent}%` }}
                      transition={{ duration: 1 }}
                      className="h-full bg-[#F8B179] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* BACKEND */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -12 }}
            className="bg-[#2D3250] text-white p-10 rounded-3xl shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-[#F8B179] mb-6">
              Backend Skills
            </h3>

            <div className="space-y-5">
              {backendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>⚡ {skill.name}</span>
                    <span>{skill.percent}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percent}%` }}
                      transition={{ duration: 1 }}
                      className="h-full bg-[#F8B179] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
