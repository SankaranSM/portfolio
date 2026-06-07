import { Link } from "react-scroll";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "About", to: "about" },
        { name: "Skills", to: "skills" },
        { name: "Projects", to: "projects" },
        { name: "Contact", to: "contact" }
    ];

    return (
        <nav className="fixed top-0 w-full bg-slate-900/70 backdrop-blur-md z-50 border-b border-cyan-400/10">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="font-bold text-xl gradient-text"
                >
                    SANKARAN
                </motion.h2>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 text-sm">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            smooth
                            duration={500}
                            className="cursor-pointer hover:text-cyan-400 transition-colors text-slate-300"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-cyan-400"
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="md:hidden bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/10"
                >
                    <div className="flex flex-col gap-4 px-6 py-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                smooth
                                duration={500}
                                onClick={() => setIsOpen(false)}
                                className="cursor-pointer hover:text-cyan-400 transition-colors text-slate-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    )
}