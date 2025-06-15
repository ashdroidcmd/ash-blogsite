import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { db } from "../../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const ListPosts = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = parseInt(searchParams.get("page")) || 1;
  const postsPerPage = 10;

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "arduino-blogposts"));
      const postData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postData);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?",
    );
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "arduino-blogposts", id));
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      console.log("Post deleted successfully");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirst, indexOfLast);

  const goToPage = (page) => {
    setSearchParams({ page: page.toString() });
  };

  return (
    <>
      <section className="px-4 py-5">
        <div className="overflow-x-auto rounded border border-gray-700">
          <table className="table w-full text-left text-gray-300">
            <thead className="bg-zinc-900">
              <tr>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-zinc-800">
              {currentPosts.map((project) => (
                <tr key={project.id} className="border-t border-zinc-700">
                  <td className="px-4 py-3 font-semibold">{project.title}</td>
                  <td className="px-4 py-3">{project.date}</td>
                  <td className="space-x-3 px-4 py-3">
                    
                    <Link to={`/projects/${project.slug}`}>
                      <button className="btn btn-sm bg-zinc-400 text-black">
                        View
                      </button>
                    </Link>
                    
                    <Link to={`/projects/edit/${project.slug}`}>
                      <button className="btn btn-sm bg-blue-500 text-white">
                        Edit
                      </button>
                    </Link>
                    
                    <button
                      className="btn btn-sm bg-red-500 text-white"
                      onClick={() => handleDelete(project.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => goToPage(i + 1)}
              className={`rounded px-4 py-2 font-semibold transition ${
                currentPage === i + 1
                  ? "bg-zinc-400 text-black"
                  : "bg-zinc-800 text-gray-300 hover:bg-zinc-600"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default ListPosts;
