const projects = [

    {
        title: "ERP SaaS Platform",
        desc: "Multi tenant ERP with HRMS, Payroll, CRM, Billing and Attendance"
    },

    {
        title: "Smart Meter IoT",
        desc: "Real time energy monitoring backend"
    },

    {
        title: "GIS Property Management",
        desc: "Location based backend workflows"
    },

    {
        title: "Notary Management",
        desc: "Secure document workflow system"
    }

]

export default function Projects() {

    return (

        <section
            id="projects"
            className="section"
        >

            <h1 className="text-4xl font-bold">

                Projects

            </h1>

            <div className="grid md:grid-cols-2 gap-8 mt-10">

                {projects.map((p) => (

                    <div className="card">

                        <h2 className="text-2xl font-bold">

                            {p.title}

                        </h2>

                        <p className="mt-4 text-slate-300">

                            {p.desc}

                        </p>

                    </div>

                ))}

            </div>

        </section>

    )

}