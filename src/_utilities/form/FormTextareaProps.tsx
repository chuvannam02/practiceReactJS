import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: FieldError;
  register: UseFormRegisterReturn;
  colSpan?: number;
}

const FormTextarea: React.FC<FormTextareaProps> = ({ label, error, register, colSpan = 12, ...props }) => (
  <div className={`form-group col-span-${colSpan}`}>
    {label && <label htmlFor={props.id}>{label}</label>}
    <textarea {...register} {...props} className={`form-textarea ${error ? "has-error" : ""}`} />
    {error && <p className="form-error">{error.message || "Trường này là bắt buộc"}</p>}
  </div>
);

export default FormTextarea;
