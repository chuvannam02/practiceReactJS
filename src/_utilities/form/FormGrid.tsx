import React from "react";

interface FormGridProps {
  children: React.ReactNode;
  className?: string;
  cols?: number;
}

const FormGrid: React.FC<FormGridProps> = ({
  children,
  className = "",
  cols = 12,
}) => {
  return (
    <div
      className={`form-grid ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
    >
      {children}
    </div>
  );
};

export default FormGrid;
