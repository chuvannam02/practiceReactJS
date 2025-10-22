import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import FormGroup from "./FormGroup";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
  register: UseFormRegisterReturn;
  colSpan?: number;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  error,
  register,
  colSpan,
  ...props
}) => (
  <FormGroup label={label} error={error} colSpan={colSpan}>
    <input
      {...register}
      {...props}
      className={`form-input ${error ? "has-error" : ""}`}
    />
  </FormGroup>
);

export default FormInput;
