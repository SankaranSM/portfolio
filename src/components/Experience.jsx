import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin, FiCalendar } from "react-icons/fi";

const experiences = [
    {
        title: "Software Developer",
        company: "CARIFER Technologies",
        period: "Mar 2023 - Present",
        location: "Erode, India",
        achievements: [
            "Architected and delivered backend services for 6+ enterprise applications using PHP Laravel, improving API response performance and supporting scalable web and mobile platforms",
            "Implemented 20+ secure RESTful APIs using JWT/session authentication, CRUD workflows, and payment gateway integrations supporting multiple business domains",
            "Led a team of 5 developers through code reviews, enforced coding standards, and architecture discussions, reducing deployment defects and improving release quality",
            "Mentored 5+ junior developers on Laravel architecture, Git workflows, API design principles, and coding standards, reducing onboarding time by 30%",
            "Optimized database queries and architecture resulting in significant performance improvements across HRMS, CRM, IoT, and ERP platforms"
        ]
    }
];

export default function Experience() {
    return (
        <section className="section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                    Professional <span className="gradient-text">Experience</span>
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6" />
            </motion.div>

            <div className="mt-12">
                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Timeline dot */}
                        <div className="flex gap-8">
                            <div className="flex flex-col items-center">
                                <motion.div
                                    whileInView={{ scale: 1.2 }}
                                    transition={{ delay: 0.4 }}
                                    className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full glow"
                                />
                                <div className="w-1 h-64 bg-gradient-to-b from-cyan-400/50 to-purple-500/50 mt-4" />
                            </div>

                            {/* Content */}
                            <div className="card flex-1 mb-8">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h2 className="text-2xl font-bold gradient-text">
                                            {exp.title}
                                        </h2>
                                        <p className="text-lg text-slate-300 font-semibold mt-2">
                                            {exp.company}
                                        </p>
                                    </div>
                                    <FiBriefcase className="text-cyan-400 text-2xl" />
                                </div>

                                <div className="flex flex-col gap-2 text-sm text-slate-400 mb-4">
                                    <div className="flex items-center gap-2">
                                        <FiCalendar size={16} />
                                        <span>{exp.period}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FiMapPin size={16} />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <h3 className="font-semibold text-cyan-400 mb-3">Key Achievements:</h3>
                                    <ul className="space-y-2">
                                        {exp.achievements.map((achievement, idx) => (
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 + idx * 0.1 }}
                                                viewport={{ once: true }}
                                                className="text-slate-300 flex items-start gap-3"
                                            >
                                                <span className="text-cyan-400 font-bold mt-1">►</span>
                                                <span>{achievement}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}