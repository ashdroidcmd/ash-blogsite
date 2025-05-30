import ProjectCards from "../components/ProjectCards"

const HomePage = () => {
    return (
        <>
            <section className="min-h-dvh pt-22 bg-zinc-950 font-[Roboto]">
                
                {/* Introduction */}
                <div className="border-b border-b-gray-700">
                    <div className="max-w-7xl mx-auto p-4">
                        <h1 className="text-4xl mb-6 font-[Montserrat] font-semibold">Hey there!</h1>

                        <p className="mb-4">
                            Welcome to my simple blog where I post breakdowns of my 3D art projects and Arduino builds. I share how I made each piece — from modeling and lighting in Blender to wiring and coding with Arduino. You’ll find project walkthroughs, breakdowns, lessons I’ve learned and maybe even some mistakes I’ve made.
                        </p>

                        <p className="mb-4">
                            Whether you're into 3D design, electronics, or both I hope you find something helpful or inspiring here. Thanks for dropping by!
                        </p>
                    </div>
                </div>

                <ProjectCards />
                
            </section>
        </>
    )
}

export default HomePage