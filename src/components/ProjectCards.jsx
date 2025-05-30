import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import projectsData from "../data/BlogPosts.json";

const ProjectCards = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(projectsData);
    }, []);

    return (
        <section className="py-10 px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...posts]
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .map((project) => (
                        <div key={project.id} className="card bg-zinc-800 shadow-sm">
                            <figure>
                                <img
                                    src={project.images[0]}
                                    alt={project.title}
                                />
                            </figure>
                            <div className="card-body">
                                <p>{project.date}</p>
                                <h2 className="card-title font-[Montserrat]">{project.title}</h2>
                                <p className="mb-4">{project.description?.slice(0, 100)}...</p>
                                <Link to={`/projects/${project.slug}`}>
                                    <button className="btn bg-zinc-400 text-black text-lg font-[Montserrat]">
                                        View Project
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default ProjectCards;
