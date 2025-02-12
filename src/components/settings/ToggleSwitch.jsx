import React from "react";

const ToggleSwitch = ({ label, isOn, onToggle }) => {
  return (
    <div className="flex items-center justify-between py-3">
      <span className="text-gray-300 font-medium">{label}</span>
      <button
        className={`
              relative inline-flex items-center h-6 rounded-full w-12 transition-all duration-300 ease-in-out 
              ${isOn ? "bg-indigo-600" : "bg-gray-600"}
            `}
        onClick={onToggle}
      >
        <span
          className={`inline-block w-6 h-6 transform transition-transform duration-300 ease-in-out bg-gray-300 rounded-full 
    ${isOn ? "translate-x-6" : "translate-x-1"}
  `}
        />
      </button>
    </div>
  );
};

export default ToggleSwitch;