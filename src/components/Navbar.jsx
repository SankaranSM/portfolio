import { Link } from "react-scroll";

export default function Navbar() {

    return (

        <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur z-50">

            <div className="max-w-6xl mx-auto flex justify-between px-6 py-5">

                <h2 className="font-bold text-cyan-400">

                    SANKARAN

                </h2>

                <div className="flex gap-6 text-sm">

                    <Link to="about">About</Link>

                    <Link to="skills">Skills</Link>

                    <Link to="projects">Projects</Link>

                    <Link to="contact">Contact</Link>

                </div>

            </div>

        </nav>

    )

}