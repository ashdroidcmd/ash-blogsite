import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const PostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, "arduino-blogposts", slug);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPost(docSnap.data());
        } else {
          setPost(null);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        setPost(null);
      }
    };

    fetchPost();
  }, [slug]);
  if (!post) return <div>Loading or Post Not Found...</div>;

  return (
    <section className="min-h-dvh bg-zinc-950 pt-22 font-[Roboto]">
      <div className="mx-auto max-w-7xl p-4">
        {/* Title and Date */}
        <h1 className="font-[Montserrat] text-4xl font-semibold">
          {post.title}
        </h1>
        <p className="mb-4">{post.date}</p>

        {/* Optional Video Embed */}
        {post.youtubeUrl && (
          <div className="mb-8 w-full max-w-4xl">
            <div className="aspect-video overflow-hidden rounded-xl shadow-md">
              <iframe
                className="h-full w-full"
                src={post.youtubeUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* Description */}
        <p className="mb-6">{post.description}</p>

        {/* Components Used */}
        <h3 className="font-[Montserrat] text-3xl font-semibold">
          Components Used
        </h3>
        <ol className="mb-4 list-disc ps-7">
          {post.componentsUsed &&
            post.componentsUsed.map((item, i) => <li key={i}>{item}</li>)}
        </ol>

        {/* Wiring Diagram */}
        <h3 className="font-[Montserrat] text-3xl font-semibold">
          Wiring Diagram
        </h3>

        {post.images && post.images.length > 0 && (
          <figure>
            <img
              className="mb-8 h-auto w-full max-w-4xl rounded-lg object-cover"
              src={post.images[1]}
              alt={post.title}
            />
          </figure>
        )}

        {post.wiringDiagram && (
          <div className="mb-8">
            {Object.entries(post.wiringDiagram).map(([component, steps]) => (
              <div key={component} className="mb-6">
                <h3 className="font-[Montserrat] text-3xl font-semibold">
                  {component}
                </h3>
                <ul className="mb-4 list-disc ps-7">
                  {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Code Download */}
        <a href={post.code} target="_blank">
          <button className="btn mb-6 bg-zinc-400 font-[Montserrat] text-lg text-black">
            Download Code (.ino) file
          </button>
        </a>

        {/* How it Works */}
        <h3 className="font-[Montserrat] text-3xl font-semibold">
          How it Works
        </h3>
        <ol className="mb-4 list-disc ps-7">
          {post.howItWorks &&
            post.howItWorks.map((item, i) => <li key={i}>{item}</li>)}
        </ol>

        {/* Code Breakdown */}
        <h3 className="font-[Montserrat] text-3xl font-semibold">
          Code Breakdown
        </h3>
        <ul className="mb-6 list-disc ps-7">
          {post.codeBreakdown &&
            post.codeBreakdown.map((item, i) => <li key={i}>{item}</li>)}
        </ul>

        {/* What I Learned */}
        <h3 className="font-[Montserrat] text-3xl font-semibold">
          What I Learned
        </h3>
        <ul className="mb-6 list-disc ps-7">
          {post.lessonsLearned &&
            post.lessonsLearned.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    </section>
  );
};

export default PostPage;
