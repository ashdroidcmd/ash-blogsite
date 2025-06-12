import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const ProjectCards = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = parseInt(searchParams.get("page")) || 1;
  const postsPerPage = 9;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "arduino-blogposts")
        );
        const postData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(postData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirst, indexOfLast);

  const goToPage = (page) => {
    setSearchParams({ page: page.toString() });
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "arduino-blogposts")
        );
        const postData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(postData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPosts.map((project) => (
          <div
            key={project.id}
            className="card bg-zinc-800 border border-gray-700 shadow-sm"
          >
            <figure>
              <img src={project.images[0]} alt={project.title} />
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

      {/* Pagination Controls */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => goToPage(i + 1)}
            className={`px-4 py-2 rounded font-semibold transition ${
              currentPage === i + 1
                ? "bg-zinc-400 text-black border-gray-700"
                : "bg-zinc-800 text-gray-300 border-gray-700 hover:bg-zinc-600"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ProjectCards;
