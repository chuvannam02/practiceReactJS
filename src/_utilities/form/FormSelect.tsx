import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import FormGroup from "./FormGroup";

interface Option {
  label: string;
  value: string | number;
}

interface FormSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Option[];
  error?: FieldError;
  register: UseFormRegisterReturn;
  colSpan?: number;
}

const FormSelect: React.FC<FormSelectProps> = ({
  label,
  options,
  error,
  register,
  colSpan,
  ...props
}) => (
  <FormGroup label={label} error={error} colSpan={colSpan}>
    <select
      {...register}
      {...props}
      className={`form-select ${error ? "has-error" : ""}`}
    >
      <option value="">-- Chọn --</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </FormGroup>
);

export default FormSelect;
