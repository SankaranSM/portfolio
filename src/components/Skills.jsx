const skills = [

    "PHP",
    "Laravel",
    "Livewire",
    "MySQL",
    "REST APIs",
    "JWT",
    "Docker",
    "Git",
    "Jenkins",
    "Postman",
    "CI/CD",
    "RBAC"

]

export default function Skills() {

    return (

        <section
            id="skills"
            className="section"
        >

            <h1 className="text-4xl font-bold">

                Skills

            </h1>

            <div className="grid md:grid-cols-4 gap-5 mt-10">

                {skills.map((s) => (

                    <div className="card text-center">

                        {s}

                    </div>

                ))}

            </div>

        </section>

    )

}