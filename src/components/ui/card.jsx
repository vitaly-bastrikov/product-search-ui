import React from "react";

export const Card = ({ className = "", children }) => {
  return (
    <div className={`bg-white border border-gray-200 rounded-lg ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ className = "", children }) => {
  return <div className={className}>{children}</div>;
};
