import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projectsData from "../data/BlogPosts.json"; // adjust path as needed

const PostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = projectsData.find((p) => p.slug === slug);
    if (foundPost) {
      setPost(foundPost);
    } else {
      setPost(null);
    }
  }, [slug]);

  if (!post) return <div>Loading or Post Not Found...</div>;

  return (
    <section className="min-h-dvh pt-22 bg-zinc-950 font-[Roboto]">
      <div className="max-w-7xl mx-auto p-4">
        {/* Title and Date */}
        <h1 className="text-4xl font-semibold font-[Montserrat]">
          {post.title}
        </h1>
        <p className="mb-4">{post.date}</p>

        {/* Optional Video Embed */}
        {post.youtubeUrl && (
          <div className="w-full max-w-4xl mb-8">
            <div className="aspect-video rounded-xl overflow-hidden shadow-md">
              <iframe
                className="w-full h-full"
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
        <h3 className="text-3xl font-[Montserrat] font-semibold">
          Components Used
        </h3>
        <ol className="mb-4 list-disc ps-7">
          {post.componentsUsed &&
            post.componentsUsed.map((item, i) => <li key={i}>{item}</li>)}
        </ol>

        {/* Wiring Diagram */}
        <h3 className="text-3xl font-[Montserrat] font-semibold">
          Wiring Diagram
        </h3>

        {post.images && post.images.length > 0 && (
          <figure>
            <img
              className="w-full max-w-4xl h-auto rounded-lg mb-8 object-cover"
              src={post.images[1]}
              alt={post.title}
            />
          </figure>
        )}

        {post.wiringDiagram && (
          <div className="mb-8">
            {Object.entries(post.wiringDiagram).map(([component, steps]) => (
              <div key={component} className="mb-6">
                <h3 className="text-3xl font-[Montserrat] font-semibold">
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
          <button className="btn bg-zinc-400 text-black text-lg font-[Montserrat] mb-6">
            Download Code (.ino) file
          </button>
        </a>

        {/* How it Works */}
        <h3 className="text-3xl font-[Montserrat] font-semibold">
          How it Works
        </h3>
        <ol className="mb-4 list-disc ps-7">
          {post.howItWorks &&
            post.howItWorks.map((item, i) => <li key={i}>{item}</li>)}
        </ol>

        {/* Code Breakdown */}
        <h3 className="text-3xl font-[Montserrat] font-semibold">
          Code Breakdown
        </h3>
        <ul className="mb-6 list-disc ps-7">
          {post.codeBreakdown &&
            post.codeBreakdown.map((item, i) => <li key={i}>{item}</li>)}
        </ul>

        {/* What I Learned */}
        <h3 className="text-3xl font-[Montserrat] font-semibold">
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
