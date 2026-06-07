import { motion } from "framer-motion";
import { FiAward, FiBook, FiCheckCircle } from "react-icons/fi";

const educationData = [
    {
        degree: "B.E - Computer Science And Engineering",
        institution: "Velalar College of Engineering And Technology",
        period: "Completed",
        highlights: ["CGPA: 8.5"],
        achievements: ["Strong foundation in software engineering principles", "Relevant coursework in backend systems and databases"]
    },
    {
        degree: "Principles Of Management",
        institution: "NPTEL (Indian Institute of Technology - Certified)",
        period: "Completed",
        highlights: ["IIT Certified"],
        achievements: ["Professional management and team leadership training"]
    }
];

export default function Education() {
    return (
        <section className="section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                    Education & <span className="gradient-text">Certifications</span>
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6" />
            </motion.div>

            <div className="mt-12 space-y-8">
                {educationData.map((edu, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="flex gap-8">
                            {/* Timeline dot */}
                            <div className="flex flex-col items-center">
                                <motion.div
                                    whileInView={{ scale: 1.2 }}
                                    transition={{ delay: idx * 0.2 + 0.3 }}
                                    className="p-3 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-lg"
                                >
                                    <FiAward className="text-cyan-400 text-2xl" />
                                </motion.div>
                                {idx < educationData.length - 1 && (
                                    <div className="w-1 h-32 bg-gradient-to-b from-cyan-400/50 to-purple-500/50 mt-4" />
                                )}
                            </div>

                            {/* Content */}
                            <div className="card flex-1 mb-4 md:mb-0">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h2 className="text-2xl font-bold gradient-text">
                                            {edu.degree}
                                        </h2>
                                        <p className="text-lg text-slate-300 font-semibold mt-2">
                                            {edu.institution}
                                        </p>
                                    </div>
                                    <FiBook className="text-cyan-400 text-2xl flex-shrink-0" />
                                </div>

                                <div className="flex gap-4 text-sm text-slate-400 mb-4 flex-wrap">
                                    {edu.highlights.map((highlight, idx) => (
                                        <span key={idx} className="badge">
                                            {highlight}
                                        </span>
                                    ))}
                                </div>

                                <div className="space-y-2">
                                    {edu.achievements.map((achievement, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 + idx * 0.1 }}
                                            viewport={{ once: true }}
                                            className="text-slate-300 flex items-start gap-3"
                                        >
                                            <FiCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
                                            <span>{achievement}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
