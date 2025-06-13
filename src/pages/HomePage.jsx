import ProjectCards from "../components/common/ProjectCards";

const HomePage = () => {
  return (
    <>
      <section className="min-h-dvh bg-zinc-950 pt-22 font-[Roboto]">
        {/* Introduction */}
        <div className="border-b border-b-gray-700">
          <div className="mx-auto max-w-7xl p-4">
            <h1 className="mb-6 font-[Montserrat] text-4xl font-semibold">
              Hey there!
            </h1>

            <p className="mb-4">
              Welcome to my simple blog where I post breakdowns of my 3D art
              projects and Arduino builds. I share how I made each piece — from
              modeling and lighting in Blender to wiring and coding with
              Arduino. You’ll find project walkthroughs, breakdowns, lessons
              I’ve learned and maybe even some mistakes I’ve made.
            </p>

            <p className="mb-4">
              Whether you're into 3D design, electronics, or both I hope you
              find something helpful or inspiring here. Thanks for dropping by!
            </p>
          </div>
        </div>

        <ProjectCards />
      </section>
    </>
  );
};

export default HomePage;
