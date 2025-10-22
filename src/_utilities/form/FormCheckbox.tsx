import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
  register: UseFormRegisterReturn;
  colSpan?: number;
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({
  label,
  error,
  register,
  colSpan = 12,
  ...props
}) => (
  <div className={`form-group col-span-${colSpan}`}>
    <label className="checkbox-label">
      <input
        type="checkbox"
        {...register}
        {...props}
        className="form-checkbox"
      />
      {label && <span>{label}</span>}
    </label>
    {error && <p className="form-error">{error.message}</p>}
  </div>
);

export default FormCheckbox;
