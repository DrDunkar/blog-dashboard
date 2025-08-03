import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Blogcreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here — send `title` and `content` to your backend
    console.log({ title, content });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter blog title"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Content</label>
          <CKEditor
            editor={ClassicEditor}
            data={content}
            onChange={(event, editor) => {
              const data = editor.getData();
              setContent(data);
            }}
            config={{
              placeholder: "Write your blog content here...",
            }}
            onReady={(editor) => {
              editor.ui.view.editable.element.style.height = "18rem";
            }}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          Publish
        </button>
      </form>
    </>
  );
};

export default Blogcreate;
