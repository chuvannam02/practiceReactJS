import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import FormGroup from "./FormGroup";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
  register: UseFormRegisterReturn;
  colSpan?: number;
  prefixAddon?: React.ReactNode; // icon/element bên trái
  suffixAddon?: React.ReactNode; // icon/element bên phải
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  error,
  register,
  colSpan,
  prefixAddon,
  suffixAddon,
  required = false,
  ...props
}) => (
  <FormGroup label={label} error={error} colSpan={colSpan} required={required}>
    <div className="input-wrapper">
      {prefixAddon && <span className="input-addon prefix">{prefixAddon}</span>}
      <input
        {...register}
        {...props}
        className={`form-input ${error ? "has-error" : ""}`}
      />
      {suffixAddon && <span className="input-addon suffix">{suffixAddon}</span>}
    </div>
  </FormGroup>
);

export default FormInput;
