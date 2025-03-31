import React from "react";

export const Button = ({ className = "", disabled, children, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
