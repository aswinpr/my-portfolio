import React from "react";

const Underconstruction = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm">
        <h2 className="text-2xl font-bold text-emerald-600 mb-4">🚧 Under Construction 🚧</h2>
        <p className="text-gray-700 mb-6">
          This project page is currently under development. Please check back soon!
        </p>
        <button
          onClick={onClose}
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Underconstruction;
