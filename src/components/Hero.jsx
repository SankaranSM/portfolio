import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center px-6 pt-20">
            <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="mb-4"
                    >
                        <span className="text-cyan-400 font-semibold">Welcome to my portfolio</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold leading-tight mb-4"
                    >
                        Hi, I'm
                        <span className="block gradient-text">
                            Sankaran S M
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-xl md:text-2xl text-cyan-400 font-semibold h-16 flex items-center"
                    >
                        <TypeAnimation
                            sequence={[
                                "PHP Laravel Developer",
                                1500,
                                "Backend Engineer",
                                1500,
                                "REST API Architect",
                                1500,
                                "SaaS Developer",
                                1500
                            ]}
                            repeat={Infinity}
                            cursor={true}
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mt-6 text-lg text-slate-300 leading-relaxed max-w-lg"
                    >
                        Software Developer with 3+ years of experience architecting scalable backend systems,
                        designing enterprise REST APIs, and building multi-tenant SaaS applications. Specialized in
                        PHP/Laravel development, database optimization, payment gateway integration, and team leadership.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="mt-10 flex flex-col sm:flex-row gap-4"
                    >
                        <a
                            href="#projects"
                            className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            View My Projects
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="/sankaran_resume.pdf"
                            download
                            className="inline-flex items-center justify-center gap-2 border-2 border-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                        >
                            Download Resume
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right side - Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative flex justify-center items-center"
                >
                    {/* Animated background glow */}
                    <motion.div
                        animate={{
                            rotate: 360,
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full blur-3xl"
                    />

                    {/* Profile Image Container */}
                    <motion.div
                        animate={{
                            y: [0, -15, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative w-72 h-72 md:w-96 md:h-96 z-10"
                    >
                        {/* Outer glowing border */}
                        <div className="absolute inset-0 rounded-full border-2 border-cyan-400 glow shadow-lg shadow-cyan-400/50" />

                        {/* Image */}
                        <div className="absolute inset-2 rounded-full overflow-hidden border border-cyan-400/30">
                            <img
                                src="/profile_image.jpeg"
                                alt="Sankaran S M"
                                className="w-full h-half object-cover"
                            />
                        </div>

                        {/* Inner subtle accent ring */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border border-purple-500/30 pointer-events-none"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}