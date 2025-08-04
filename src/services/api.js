import axios from "axios";

export const userLogin = async (payload) => {
  const contentType = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_AUTH_API}`,
      payload,
      contentType
    );
    return res.data;
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
  } finally {
  }
};

export const fetchBlogData = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API}/posts`);
    return res?.data;
  } catch {
  } finally {
  }
};

export const createBlog = async (payload) => {
  const contentType = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API}/posts`,
      payload,
      contentType
    );
    return res;
  } catch {
  } finally {
  }
};

export const updateBlog = async (id) => {
  try {
    const res = await axios.put(`${process.env.REACT_APP_API}/posts/${id}`);
    return res;
  } catch {
  } finally {
  }
};

export const deleteBlog = async (id) => {
  try {
    const res = await axios.delete(`${process.env.REACT_APP_API}/posts/${id}`);
    return res;
  } catch {
  } finally {
  }
};
