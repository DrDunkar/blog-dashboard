import React from "react";
import CreateForm from "../../components/form/blogcreate";

const CreateBLog = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-8 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">Create Blog Post</h1>
      <CreateForm />
    </div>
  );
};

export default CreateBLog;
