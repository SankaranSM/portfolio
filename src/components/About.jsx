export default function About() {

    const stats = [

        ["3+", "Years"],

        ["20+", "APIs"],

        ["6+", "Web Applications"],

        ["5", "Developers"]

    ]

    return (

        <section
            id="about"
            className="section"
        >

            <h1 className="text-4xl font-bold">

                About Me

            </h1>

            <p className="mt-5 text-slate-300">

                Software Developer focused on Laravel,
                REST APIs, multi-tenant SaaS,
                database optimization and payment systems.

            </p>

            <div className="grid md:grid-cols-4 gap-6 mt-10">

                {stats.map((s) => (

                    <div className="card">

                        <h1 className="text-4xl text-cyan-400">

                            {s[0]}

                        </h1>

                        <p>{s[1]}</p>

                    </div>

                ))}

            </div>

        </section>

    )

}