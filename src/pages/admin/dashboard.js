import { useEffect, useState } from "react";
import { useBlogStore } from "../../store/blogItem";
import { fetchBlogData } from "../../services/api";

const Dashboard = () => {
  const { items, fetchItems } = useBlogStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (items?.length === 0) {
      getBlog();
    }
  }, []);

  const getBlog = async () => {
    try {
      setLoading(true);
      const res = await fetchBlogData();
      fetchItems(res);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 h-screen flex">
      <div className="flex-1 flex flex-col">
        <main className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">Total BLog</h2>
              <p className="text-3xl font-bold">
                {loading ? "loading ...." : items?.length}
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
