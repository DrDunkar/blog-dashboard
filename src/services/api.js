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
    console.log("Login success:", res);
    return res.data;
  } catch (error) {
    console.log("err", error);
    console.error("Login failed:", error.response?.data || error.message);
  } finally {
  }
};
