import { motion } from "framer-motion";
import { FiCode, FiServer, FiTool, FiDatabase } from "react-icons/fi";

const skillsData = [
    {
        category: "Backend & Languages",
        icon: FiCode,
        skills: ["PHP", "Laravel", "CodeIgniter", "Livewire", "REST APIs", "JWT Authentication"]
    },
    {
        category: "Database & Optimization",
        icon: FiDatabase,
        skills: ["MySQL", "SQL Optimization", "Database Design", "Query Optimization", "Migrations", "RBAC"]
    },
    {
        category: "Frontend & UI",
        icon: FiCode,
        skills: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "JavaScript", "jQuery", "Ajax"]
    },
    {
        category: "DevOps & Architecture",
        icon: FiServer,
        skills: ["Docker", "Jenkins", "Git", "CI/CD", "API Security", "Multi-Tenant SaaS", "Payment Integration"]
    },
    {
        category: "Tools & Collaboration",
        icon: FiTool,
        skills: ["Postman", "GitHub", "Figma", "Problem Solving", "Team Leadership", "Code Review"]
    },
    {
        category: "Architecture & Systems",
        icon: FiServer,
        skills: ["Microservices", "API Design Patterns", "Database Sharding", "Load Balancing", "Security Best Practices"]
    }
];

export default function Skills() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="skills" className="section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                    Skills & <span className="gradient-text">Expertise</span>
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6" />
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8 mt-12"
            >
                {skillsData.map((category, idx) => {
                    const IconComponent = category.icon;
                    return (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="card group"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <IconComponent className="text-cyan-400 text-2xl" />
                                <h3 className="text-xl font-bold">{category.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIdx) => (
                                    <motion.span
                                        key={skillIdx}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: skillIdx * 0.05 }}
                                        viewport={{ once: true }}
                                        className="skill-tag"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}