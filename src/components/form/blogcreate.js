import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { createBlog } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { formValidation } from "../../utils/formValidation";
import { toast } from "react-toastify";

const Blogcreate = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const [btnLoading, setBtnLoading] = useState(false);
  const navigate = useNavigate();
  const [errors, setErrors] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = formValidation(formData);
    setErrors(validationErrors);
    if (errors === null) return;
    try {
      setBtnLoading(true);
      const payload = {
        title: formData?.title,
        body: formData?.content,
      };
      const res = await createBlog(payload);
      if (res) {
        toast.success("Create successful! ✅");
        setBtnLoading(false);
        navigate("/dashboard/blog");
      }
    } catch {
      setBtnLoading(false);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Title</label>
          <input
            type="text"
            value={formData?.title}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, title: e.target.value }))
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter blog title"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Content</label>
          <CKEditor
            editor={ClassicEditor}
            data={formData?.content}
            onChange={(event, editor) => {
              const data = editor.getData();
              setFormData((prev) => ({ ...prev, content: data }));
            }}
            config={{
              placeholder: "Write your blog content here...",
            }}
            required
          />
          {errors?.content && (
            <p className="text-red-500 text-sm">{errors?.content}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          {btnLoading ? "Posting ..." : "Publish"}
        </button>
      </form>
    </>
  );
};

export default Blogcreate;
