import React, { useState, useEffect } from "react";
import { fetchBlogData, deleteBlog } from "../../services/api";
import ConfirmaModal from "../../components/ConfirmaModal";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useBlogStore } from "../../store/blogItem";
import parse from "html-react-parser";

const Blog = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState({
    loading: false,
    error: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  const { items, fetchItems, addItem, updateItem, deleteItem } = useBlogStore();

  useEffect(() => {
    if (items?.length === 0) {
      getBlog();
    }
  }, []);

  const getBlog = async () => {
    try {
      setBlogs((prev) => ({ ...prev, loading: true }));
      const res = await fetchBlogData();
      fetchItems(res);
      setBlogs((prev) => ({ ...prev, data: res }));
    } catch (err) {
      setBlogs((prev) => ({ ...prev, error: true }));
    } finally {
      setBlogs((prev) => ({ ...prev, loading: false }));
    }
  };

  const handleCreate = () => {
    navigate("/dashboard/blog/create");
  };
  const handleUpdate = (id) => {
    navigate(`/dashboard/blog/edit/${id}`);
  };

  const confirmDelete = async () => {
    try {
      setBtnLoading(true);
      const blogId = isModalOpen;
      const res = await deleteBlog(blogId);
      if (res) {
        deleteItem(blogId);
        setIsModalOpen(false);
        toast.success("Delete successful! ✅");
      }
    } catch {
    } finally {
      setBtnLoading(false);
    }
  };

  return (
    <>
      <div className="p-6 bg-white rounded-lg shadow">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">Blog Management</h1>
          <button
            onClick={handleCreate}
            className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            Create New Blog
          </button>
        </div>

        {blogs?.error ? (
          <spna>Something went wrong , try later</spna>
        ) : (
          <>
            {blogs?.loading ? (
              <span className="my-[1rem]">Loading data .... </span>
            ) : (
              <>
                {items?.length === 0 ? (
                  <p className="text-gray-500">No blogs available.</p>
                ) : (
                  <div className="space-y-4">
                    {items?.map((blog) => (
                      <div
                        key={blog.id}
                        className="border p-4 rounded-md bg-gray-50 shadow-sm"
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h2 className="text-lg font-semibold">
                              {blog.title}
                            </h2>
                            <p>{parse(blog?.body)}</p>
                          </div>
                          <div className="flex items-center gap-2 cursor-pointer">
                            <button
                              onClick={() => handleUpdate(blog.id)}
                              className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md text-sm cursor-pointer"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => setIsModalOpen(blog.id)}
                              className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm cursor-pointer"
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
              </>
            )}
          </>
        )}
      </div>
      {isModalOpen && (
        <ConfirmaModal
          showModal={isModalOpen}
          setShowModal={setIsModalOpen}
          handleOK={confirmDelete}
          btnLoading={btnLoading}
        />
      )}
    </>
  );
};

export default Blog;
