import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const CreatePosts = () => {
  const { register, control, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      slug: "",
      blogSlug: "",
      youtubeUrl: "",
      code: "",
      description: "",
      date: "",
      id: 0,
      images: [""],
      codeBreakdown: [""],
      howItWorks: [""],
      componentsUsed: [""],
      lessonsLearned: [""],
      wiringDiagram: {
        "Button Connection": [""],
        "LED Connection": [""],
      },
    },
  });

  // UseFieldArray for codeBreakdown array
  const { fields, append, remove } = useFieldArray({
    control,
    name: "codeBreakdown",
  });

  const onSubmit = async (data) => {
    try {
      await addDoc(collection(db, "arduino-blogposts"), {
        ...data,
        createdAt: serverTimestamp(),
      });
      alert("Post created successfully!");
      reset();
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  return (
    <section className="min-h-dvh bg-zinc-950 font-[Roboto] text-white">
      <div className="border-b border-b-gray-700 p-4">
        <h1 className="my-2 font-[Montserrat] text-4xl font-semibold">
          Create Posts
        </h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
        <input
          {...register("title")}
          className="input input-bordered w-full"
          placeholder="Title"
        />
        <input
          {...register("slug")}
          className="input input-bordered w-full"
          placeholder="Slug"
        />
        <input
          {...register("blogSlug")}
          className="input input-bordered w-full"
          placeholder="Blog URL"
        />
        <input
          {...register("youtubeUrl")}
          className="input input-bordered w-full"
          placeholder="YouTube Embed URL"
        />
        <input
          {...register("code")}
          className="input input-bordered w-full"
          placeholder="Code URL"
        />
        <textarea
          {...register("description")}
          className="textarea textarea-bordered w-full"
          placeholder="Description"
        />
        <input
          {...register("date")}
          className="input input-bordered w-full"
          placeholder="Date (e.g. June 15, 2025)"
        />
        <input
          {...register("id", { valueAsNumber: true })}
          type="number"
          className="input input-bordered w-full"
          placeholder="Project ID (Number)"
        />

        {/* Code Breakdown */}
        <label className="mt-4 block font-semibold text-white">
          Code Breakdown
        </label>
        {fields.map((field, index) => (
          <div key={field.id} className="mb-2 flex gap-2">
            <input
              {...register(`codeBreakdown.${index}`)}
              className="input input-bordered flex-grow"
              placeholder={`Code line ${index + 1}`}
            />
            <button
              type="button"
              className="btn btn-sm btn-error"
              onClick={() => remove(index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-sm btn-primary"
          onClick={() => append("")}
        >
          Add Code Line
        </button>

        {/* TODO: Add similar array inputs for images, howItWorks, componentsUsed, lessonsLearned */}

        <button className="btn btn-primary mt-6 w-full">Submit Post</button>
      </form>
    </section>
  );
};

export default CreatePosts;
