import React from "react";

const ConfirmaModal = (props) => {
  const { showModal, setShowModal, handleOK, btnLoading } = props;
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Confirm Deletion
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Are you sure you want to delete this blog?
            </p>

            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-sm rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleOK}
                className="px-4 py-2 text-sm rounded-md bg-red-600 text-white hover:bg-red-700"
              >
                {btnLoading ? "Processing ....." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmaModal;
