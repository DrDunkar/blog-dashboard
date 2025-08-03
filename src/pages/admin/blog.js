import React, { useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "First Blog", content: "This is the first blog post." },
    { id: 2, title: "Second Blog", content: "This is the second blog post." },
  ]);

  const handleCreate = () => {};
  const handleUpdate = () => {};
  const handleDelete = () => {};

  return (
    <>
      <div className="p-6 bg-white rounded-lg shadow">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">Blog Management</h1>
          <button
            onClick={handleCreate}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            Create New Blog
          </button>
        </div>

        {blogs.length === 0 ? (
          <p className="text-gray-500">No blogs available.</p>
        ) : (
          <div className="space-y-4">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="border p-4 rounded-md bg-gray-50 shadow-sm"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">{blog.title}</h2>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleUpdate(blog.id)}
                      className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <p className="text-gray-700 mt-2">{blog.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Blog;
