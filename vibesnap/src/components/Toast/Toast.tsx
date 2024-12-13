
import React from "react";

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-4 py-2 rounded shadow-lg">
      {message}
      <button onClick={onClose} className="ml-4 text-gray-400 hover:text-white">
        ✕
      </button>
    </div>
  );
};

export default Toast;
 