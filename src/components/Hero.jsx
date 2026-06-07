import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Hero() {

    return (

        <section className="min-h-screen flex items-center px-6">

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

                <div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl font-bold"
                    >

                        Hi, I'm

                        <span className="text-cyan-400">

                            Sankaran S M

                        </span>

                    </motion.h1>

                    <TypeAnimation
                        sequence={[
                            "Laravel Developer",
                            2000,
                            "Backend Engineer",
                            2000,
                            "API Engineer",
                            2000,
                            "SaaS Developer",
                            2000
                        ]}
                        repeat={Infinity}
                    />

                    <p className="mt-6 text-slate-300">

                        Building scalable APIs, SaaS applications,
                        and enterprise backend systems.

                    </p>

                    <div className="mt-8 flex gap-4">

                        <a
                            href="#projects"
                            className="bg-cyan-500 px-5 py-3 rounded"
                        >

                            Projects

                        </a>

                        <a
                            href="/resume.pdf"
                            download
                            className="border px-5 py-3 rounded"
                        >

                            Resume

                        </a>

                    </div>

                </div>

                <div className="flex justify-center">

                    <div className="w-80 h-80 rounded-full border border-cyan-400 glow" />

                </div>

            </div>

        </section>

    )

}