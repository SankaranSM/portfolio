import { motion } from "framer-motion";
import { FiAward, FiCode, FiUsers, FiTrendingUp } from "react-icons/fi";

export default function About() {
    const stats = [
        { value: "3+", label: "Years Experience", icon: FiAward },
        { value: "20+", label: "APIs", icon: FiCode },
        { value: "6+", label: "Enterprise Apps", icon: FiTrendingUp },
        { value: "5", label: "Developers Led", icon: FiUsers }
    ];

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
        <section id="about" className="section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                    About <span className="gradient-text">Me</span>
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6" />
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-5 text-lg text-slate-300 leading-relaxed max-w-3xl"
            >
                I'm a dedicated <span className="text-cyan-400 font-semibold">Software Developer</span> with 3+ years of experience
                architecting scalable backend systems and designing enterprise REST APIs. I specialize in PHP/Laravel development,
                multi-tenant SaaS architectures, database optimization, and payment gateway integration. I thrive on solving complex
                backend challenges and building systems that scale across HRMS, CRM, IoT, and ERP platforms.
            </motion.p>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-4 gap-6 mt-12"
            >
                {stats.map((stat, idx) => {
                    const IconComponent = stat.icon;
                    return (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="card group"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <p className="text-4xl font-bold gradient-text">
                                        {stat.value}
                                    </p>
                                    <p className="text-slate-300 font-medium">{stat.label}</p>
                                </div>
                                <IconComponent className="text-cyan-400 text-2xl group-hover:scale-110 transition-transform" />
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}