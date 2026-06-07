import { motion } from "framer-motion";
import { FiArrowUp, FiHeart } from "react-icons/fi";
import { Link } from "react-scroll";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="border-t border-cyan-400/20 bg-gradient-to-t from-slate-900/50 to-transparent">
            <div className="section pb-12">
                {/* Main footer content */}
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-bold gradient-text mb-3">SANKARAN</h2>
                        <p className="text-slate-400 leading-relaxed">
                            Crafting elegant backend solutions and scalable APIs with a passion for clean code and performance.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-bold mb-4 text-cyan-400">Quick Links</h3>
                        <ul className="space-y-2">
                            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item.toLowerCase()}
                                        smooth
                                        duration={500}
                                        className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-bold mb-4 text-cyan-400">Get In Touch</h3>
                        <div className="space-y-2 text-slate-400">
                            <p>Email: <a href="mailto:sankaranmohan2001@gmail.com" className="text-cyan-400 hover:text-cyan-300">sankaranmohan2001@gmail.com</a></p>
                            <p>Phone: <a href="tel:+919361624279" className="text-cyan-400 hover:text-cyan-300">+91 9361624279</a></p>
                            <p>Location: Namakkal, India</p>
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent mb-8" />

                {/* Bottom footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <p className="text-slate-400 text-center md:text-left flex items-center gap-2">
                        © 2026 Sankaran S M. Made with <FiHeart className="text-red-500 inline" /> and passion.
                    </p>

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 rounded-lg border border-cyan-400/30 hover:border-cyan-400/60 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                        title="Scroll to top"
                    >
                        <FiArrowUp size={20} />
                    </motion.button>
                </motion.div>
            </div>
        </footer>
    );
}