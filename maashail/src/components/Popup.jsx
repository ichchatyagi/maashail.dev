import React from "react";

const Popup = ({ message, show }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed top-5 right-5 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg z-50">
      {message}
    </div>
  );
};

export default Popup;
