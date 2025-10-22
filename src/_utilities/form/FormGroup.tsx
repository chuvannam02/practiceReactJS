import React, { useEffect, useState } from "react";
import { FieldError } from "react-hook-form";

interface FormGroupProps {
  label?: string;
  error?: FieldError;
  colSpan?: number;
  children: React.ReactNode;
  required?: boolean;
}

const FormGroup: React.FC<FormGroupProps> = ({
  label,
  error,
  colSpan = 12,
  children,
  required = false,
}) => {
  const [fadeClass, setFadeClass] = useState<"visible" | "hidden">("hidden");
  const [displayedError, setDisplayedError] = useState<string | undefined>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const newErrorMsg = error?.message;

    // 🟢 Khi có lỗi mới
    if (newErrorMsg && newErrorMsg !== displayedError) {
      if (!displayedError) {
        // ✅ Lần đầu có lỗi → mount ẩn, rồi fade-in thật mượt
        setDisplayedError(newErrorMsg);
        setMounted(true);
        setFadeClass("hidden");

        // 👇 Double RAF để chắc chắn DOM đã render ở trạng thái "hidden"
        const raf1 = requestAnimationFrame(() => {
          const raf2 = requestAnimationFrame(() => setFadeClass("visible"));
          return () => cancelAnimationFrame(raf2);
        });
        return () => cancelAnimationFrame(raf1);
      } else {
        // 🔁 Có lỗi cũ → fade-out trước, rồi fade-in lỗi mới
        setFadeClass("hidden");
        const timeout = setTimeout(() => {
          setDisplayedError(newErrorMsg);
          requestAnimationFrame(() => setFadeClass("visible"));
        }, 300);
        return () => clearTimeout(timeout);
      }
    }

    // 🔴 Khi lỗi bị xoá → fade-out rồi remove khỏi DOM
    if (!newErrorMsg && displayedError) {
      setFadeClass("hidden");
      const timeout = setTimeout(() => {
        setDisplayedError(undefined);
        setMounted(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [error?.message]);

  return (
    <div className={`form-group col-span-${colSpan}`}>
      {/* {label && <label className={required ? "formfield-required" : ""}>{label}</label>} */}
      <label className="formfield-required">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
      {/* Render chỉ khi có lỗi hoặc đang fade-out */}
      {mounted && (
        <p className={`form-error ${fadeClass}`}>{displayedError || ""}</p>
      )}
    </div>
  );
};

export default FormGroup;
