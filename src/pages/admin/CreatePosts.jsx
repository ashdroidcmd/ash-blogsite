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
      images: [{ value: "" }],
      codeBreakdown: [{ value: "" }],
      howItWorks: [{ value: "" }],
      componentsUsed: [{ value: "" }],
      lessonsLearned: [{ value: "" }],
      wiringDiagram: [
        {
          component: "",
          wirings: [""],
        },
      ],
    },
  });

  // Define field arrays
  const fieldArrays = {
    images: useFieldArray({ control, name: "images" }),
    codeBreakdown: useFieldArray({ control, name: "codeBreakdown" }),
    howItWorks: useFieldArray({ control, name: "howItWorks" }),
    componentsUsed: useFieldArray({ control, name: "componentsUsed" }),
    lessonsLearned: useFieldArray({ control, name: "lessonsLearned" }),
  };
  const {
    fields: wiringDiagramFields,
    append: appendWiringDiagram,
    remove: removeWiringDiagram,
  } = useFieldArray({
    control,
    name: "wiringDiagram",
  });
  

  // Flatten fields with { value } objects to plain arrays before Firestore submission
  const flattenFieldArray = (arr) => arr.map((item) => item.value);

  const onSubmit = async (data) => {
    const cleanedData = {
      ...data,
      images: flattenFieldArray(data.images),
      codeBreakdown: flattenFieldArray(data.codeBreakdown),
      howItWorks: flattenFieldArray(data.howItWorks),
      componentsUsed: flattenFieldArray(data.componentsUsed),
      lessonsLearned: flattenFieldArray(data.lessonsLearned),
      createdAt: serverTimestamp(),
    };
    

    try {
      await addDoc(collection(db, "arduino-blogposts"), cleanedData);
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
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Basic Inputs */}
          <input
            {...register("title")}
            placeholder="Title"
            className="input input-bordered w-full"
          />
          <input
            {...register("id", { valueAsNumber: true })}
            type="number"
            placeholder="ID"
            className="input input-bordered w-full"
          />
          <input
            {...register("date")}
            placeholder="Date"
            className="input input-bordered w-full"
          />
          <input
            {...register("slug")}
            placeholder="Slug"
            className="input input-bordered w-full"
          />
          <input
            {...register("blogSlug")}
            placeholder="Blog URL"
            className="input input-bordered w-full"
          />
          <input
            {...register("youtubeUrl")}
            placeholder="YouTube Embed URL"
            className="input input-bordered w-full"
          />
          <input
            {...register("code")}
            placeholder="Google Drive Link"
            className="input input-bordered w-full"
          />
        </div>

        <textarea
          {...register("description")}
          placeholder="Description"
          className="textarea textarea-bordered w-full"
        />

        {/* Dynamic Array Field Generator */}
        {Object.entries(fieldArrays).map(
          ([key, { fields, append, remove }]) => (
            <div key={key} className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <label className="block font-semibold text-white capitalize">
                  {key.replace(/([A-Z])/g, " $1")}
                </label>
                {fields.map((field, index) => (
                  <div
                    key={field.id}
                    className="mb-2 flex flex-row items-center gap-2"
                  >
                    <input
                      {...register(`${key}.${index}.value`)}
                      className="input input-bordered flex-grow"
                      placeholder={`${key} ${index + 1}`}
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
                  className="btn bg-zinc-400 font-[Montserrat] text-black"
                  onClick={() => append({ value: "" })}
                >
                  Add {key.replace(/([A-Z])/g, " $1")}
                </button>
              </div>
            </div>
          ),
        )}
        {/* Wiring Diagram */}
        <div>
          <label className="mt-6 block font-semibold text-white">
            Wiring Diagram
          </label>

          {wiringDiagramFields.map((field, componentIndex) => {
            const {
              fields: wiringFields,
              append: appendWiring,
              remove: removeWiring,
            } = useFieldArray({
              control,
              name: `wiringDiagram.${componentIndex}.wirings`,
            });

            return (
              <div
                key={field.id}
                className="mb-4 p-4"
              >
                {/* Component Name */}
                <div className="mb-2 flex gap-2">
                  <input
                    {...register(`wiringDiagram.${componentIndex}.component`)}
                    placeholder="Component Name (e.g. Button)"
                    className="input input-bordered w-full"
                  />
                  <button
                    type="button"
                    className="btn btn-error btn-sm"
                    onClick={() => removeWiringDiagram(componentIndex)}
                  >
                    Remove Component
                  </button>
                </div>

                {/* Wiring Lines */}
                {wiringFields.map((wiringField, wiringIndex) => (
                  <div key={wiringField.id} className="mb-2 flex gap-2">
                    <input
                      {...register(
                        `wiringDiagram.${componentIndex}.wirings.${wiringIndex}`,
                      )}
                      placeholder={`Wiring #${wiringIndex + 1}`}
                      className="input input-bordered flex-grow"
                    />
                    <button
                      type="button"
                      className="btn btn-sm btn-error"
                      onClick={() => removeWiring(wiringIndex)}
                    >
                      Remove Wiring
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  className="btn btn-sm btn-primary"
                  onClick={() => appendWiring("")}
                >
                  Add Wiring
                </button>
              </div>
            );
          })}

          <button
            type="button"
            className="btn btn-primary mt-2"
            onClick={() =>
              appendWiringDiagram({ component: "", wirings: [""] })
            }
          >
            ➕ Add Component
          </button>
        </div>

        <button className="btn w-full bg-zinc-400 font-[Montserrat] text-lg text-black">
          Submit Post
        </button>
      </form>
    </section>
  );
};

export default CreatePosts;
