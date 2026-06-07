import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const projects = [
    {
        title: "ERP SaaS Platform",
        desc: "Architected and delivered a comprehensive multi-tenant ERP system with HRMS, CRM, Payroll, Inventory, Billing, and Attendance modules. Implemented RBAC for secure role-based access, designed scalable REST APIs, built reporting dashboards, and optimized database architecture for high-performance queries.",
        tags: ["Laravel", "Multi-tenant", "RBAC", "REST APIs", "MySQL", "Scalable Architecture"],
        color: "from-cyan-500/20 to-blue-500/20",
        accentColor: "from-cyan-400 to-blue-400"
    },
    {
        title: "Smart Meter IoT Platform",
        desc: "Designed and developed backend services for real-time energy monitoring system with IoT smart meters. Built data ingestion pipelines for processing real-time energy consumption data, developed monitoring dashboards, and implemented automated billing workflows with accurate metering.",
        tags: ["IoT", "Real-time Data", "REST APIs", "Data Analytics", "Automation"],
        color: "from-purple-500/20 to-pink-500/20",
        accentColor: "from-purple-400 to-pink-400"
    },
    {
        title: "GIS Property Management System",
        desc: "Built comprehensive backend modules and database workflows for location-based GIS property management systems. Implemented geolocation-based data processing, developed mapping operation APIs, and designed efficient database structures supporting complex spatial queries.",
        tags: ["GIS", "Geolocation APIs", "Location-based", "Database Design", "REST APIs"],
        color: "from-emerald-500/20 to-teal-500/20",
        accentColor: "from-emerald-400 to-teal-400"
    },
    {
        title: "Notary Management & Service Connect",
        desc: "Developed secure role-based workflows, document management systems, and comprehensive API integrations for notary registration and tracking. Improved payment gateway services and REST API implementations to support digital transport and customer service workflows.",
        tags: ["Document Management", "Payment Integration", "API Security", "Workflows", "Role-based Access"],
        color: "from-orange-500/20 to-red-500/20",
        accentColor: "from-orange-400 to-red-400"
    }
];

export default function Projects() {
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
        <section id="projects" className="section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                    Featured <span className="gradient-text">Projects</span>
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
                {projects.map((p, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="card overflow-hidden group relative"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-16`} />

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-3">
                                <h2 className="text-2xl font-bold">{p.title}</h2>
                                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <a
                                        href="#"
                                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                                        title="View Project"
                                    >
                                        <FiExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <p className="mt-4 text-slate-300 leading-relaxed">
                                {p.desc}
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {p.tags.map((tag, tagIdx) => (
                                    <span
                                        key={tagIdx}
                                        className={`badge bg-gradient-to-r ${p.accentColor} text-white text-xs font-semibold px-3 py-1`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ delay: idx * 0.1 + 0.5 }}
                                viewport={{ once: true }}
                                className="mt-6 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full origin-left"
                            />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}