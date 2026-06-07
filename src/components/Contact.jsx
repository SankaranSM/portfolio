import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Contact() {
    const contactInfo = [
        {
            icon: FiMail,
            label: "Email",
            value: "sankaranmohan2001@gmail.com",
            link: "mailto:sankaranmohan2001@gmail.com",
            sublabel: "Drop me an email anytime"
        },
        {
            icon: FiPhone,
            label: "Phone",
            value: "+91 9361624279",
            link: "tel:+919361624279",
            sublabel: "Call or WhatsApp"
        },
        {
            icon: FiMapPin,
            label: "Location",
            value: "Namakkal, Tamil Nadu",
            link: null,
            sublabel: "India"
        }
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
        <section id="contact" className="section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                    Let's <span className="gradient-text">Connect</span>
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6" />
                <p className="text-lg text-slate-300 mt-4">
                    Feel free to reach out for collaborations or just a friendly hello. I'm always open to new opportunities and ideas.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-8 mt-12"
            >
                {contactInfo.map((info, idx) => {
                    const IconComponent = info.icon;
                    const content = (
                        <motion.div
                            variants={itemVariants}
                            className="card text-center group"
                        >
                            <div className="flex justify-center mb-4">
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                    className="p-3 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-lg"
                                >
                                    <IconComponent className="text-cyan-400 text-3xl" />
                                </motion.div>
                            </div>
                            <h3 className="text-lg font-bold text-cyan-400">{info.label}</h3>
                            <p className="text-slate-300 mt-2">{info.value}</p>
                            <p className="text-sm text-slate-400 mt-1">{info.sublabel}</p>
                        </motion.div>
                    );

                    return info.link ? (
                        <a key={idx} href={info.link} className="no-underline">
                            {content}
                        </a>
                    ) : (
                        <div key={idx}>{content}</div>
                    );
                })}
            </motion.div>
        </section>
    );
}