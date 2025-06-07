import { useState } from "react";

const initialForm = {
  id: "",
  title: "",
  slug: "",
  date: "",
  description: "",
  youtubeUrl: "",
  howItWorks: [""],
  componentsUsed: [""],
  wiringDiagram: { "Ultrasonic Sensor": [""] },
  codeBreakdown: [""],
  lessonsLearned: [""],
  images: [""],
  code: "",
};

const AddBlog = () => {
  const [formData, setFormData] = useState(initialForm);

  const updateField = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updateArray = (key, i, value) => {
    const updated = [...formData[key]];
    updated[i] = value;
    setFormData({ ...formData, [key]: updated });
  };

  const addToArray = (key) => {
    setFormData({ ...formData, [key]: [...formData[key], ""] });
  };

  const updateNestedArray = (objKey, i, value) => {
    const updated = { ...formData.wiringDiagram };
    updated[objKey][i] = value;
    setFormData({ ...formData, wiringDiagram: updated });
  };

  const addToNestedArray = (objKey) => {
    const updated = { ...formData.wiringDiagram };
    updated[objKey].push("");
    setFormData({ ...formData, wiringDiagram: updated });
  };

  const copyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(formData, null, 2));
    alert("JSON copied to clipboard!");
  };

  return (
    <>
      <div className="p-4 pt-24 max-w-7xl mx-auto space-y-6 font-[Roboto]">
        <h1 className="text-4xl font-semibold font-[Montserrat]">
          Blog Post Creator
        </h1>

        <div className="grid gap-4">
          <input
            type="text"
            name="id"
            placeholder="ID"
            className="input input-bordered"
            onChange={updateField}
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="input input-bordered"
            onChange={updateField}
          />
          <input
            type="text"
            name="slug"
            placeholder="Slug"
            className="input input-bordered"
            onChange={updateField}
          />
          <input
            type="date"
            name="date"
            className="input input-bordered"
            onChange={updateField}
          />
          <textarea
            name="description"
            placeholder="Description"
            className="textarea textarea-bordered"
            onChange={updateField}
          />
          <input
            type="text"
            name="youtubeUrl"
            placeholder="YouTube Embed URL"
            className="input input-bordered"
            onChange={updateField}
          />
          <input
            type="text"
            name="code"
            placeholder="Code File URL"
            className="input input-bordered"
            onChange={updateField}
          />

          {/* Dynamic Fields */}
          {[
            "howItWorks",
            "componentsUsed",
            "codeBreakdown",
            "lessonsLearned",
            "images",
          ].map((key) => (
            <div key={key}>
              <h2 className="font-bold">{key}</h2>
              {formData[key].map((item, i) => (
                <input
                  key={i}
                  value={item}
                  onChange={(e) => updateArray(key, i, e.target.value)}
                  placeholder={`${key} ${i + 1}`}
                  className="input input-bordered mb-2"
                />
              ))}
              <button
                className="btn btn-sm btn-outline"
                onClick={() => addToArray(key)}
              >
                + Add
              </button>
            </div>
          ))}

          {/* Wiring Diagram */}
          <div>
            <h2 className="font-bold">Wiring Diagram: Ultrasonic Sensor</h2>
            {formData.wiringDiagram["Ultrasonic Sensor"].map((item, i) => (
              <input
                key={i}
                value={item}
                onChange={(e) =>
                  updateNestedArray("Ultrasonic Sensor", i, e.target.value)
                }
                placeholder={`Connection ${i + 1}`}
                className="input input-bordered mb-2"
              />
            ))}
            <button
              className="btn btn-sm btn-outline"
              onClick={() => addToNestedArray("Ultrasonic Sensor")}
            >
              + Add Wiring
            </button>
          </div>

          <button className="btn btn-primary" onClick={copyJSON}>
            📋 Copy JSON
          </button>
        </div>

        <div>
          <h2 className="text-xl font-semibold">📦 JSON Preview</h2>
          <pre className="bg-base-200 p-4 rounded overflow-x-auto">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
