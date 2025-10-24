import FormCheckbox from "../../../_utilities/form/FormCheckbox";
import FormGrid from "../../../_utilities/form/FormGrid";
import FormInput from "../../../_utilities/form/FormInput";
import FormSelect from "../../../_utilities/form/FormSelect";
import FormTextarea from "../../../_utilities/form/FormTextareaProps";
import "./Login.scss";
import { useForm } from "react-hook-form";
import { LoginService } from "./Login.service";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import React from "react";
import { z } from "zod";
// pnpm add @hookform/resolvers zod
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData, loginSchema } from "./Login.schema";

// type Inputs = {
//   username: string;
//   password: string;
//   // role: string;
//   // note: string;
//   // remember: boolean;
// };

const Login: React.FC = () => {
  const [showingPassword, setShowingPassword] = React.useState(false);

  const userSchema = z.object({
    username: z.string().min(1, "Vui lòng nhập tên đăng nhập"),
    password: z.string().min(6, "Mật khẩu tối thiểu 6 ký tự"),
    // role: z.string().min(1, "Vui lòng chọn vai trò"),
    // note: z.string().optional(),
    // remember: z.boolean().optional(),
  });

  // const result = userSchema.safeParse(JSON.parse('{"name":"Nam"}'));

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm<Inputs>();

  // 👇 Tích hợp Zod vào React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur", // validate khi rời khỏi input
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await LoginService.login(data);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <div className="login">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <fieldset> */}
          {/* <legend>Đăng nhập</legend> */}

          {/* 👇 Form chia 2 cột, có thể đổi cols=3 */}
          <FormGrid cols={1}>
            <FormInput
              id="username"
              label="Tên đăng nhập"
              placeholder="Nhập tên đăng nhập"
              register={register("username")}
              error={errors.username}
              colSpan={12}
              required={true}
            />

            <FormInput
              id="password"
              type={showingPassword ? "text" : "password"} // thay đổi type
              label="Mật khẩu"
              placeholder="Nhập mật khẩu"
              register={register("password")}
              suffixAddon={
                <span
                  onClick={() => setShowingPassword(!showingPassword)}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {showingPassword ? (
                    <EyeIcon className="w-5 h-5" />
                  ) : (
                    <EyeSlashIcon className="w-5 h-5" />
                  )}
                </span>
              }
              error={errors.password}
              colSpan={12}
              required={true}
            />

            {/* <FormSelect
                id="role"
                label="Vai trò"
                options={[
                  { label: "Người dùng", value: "user" },
                  { label: "Quản trị viên", value: "admin" },
                ]}
                register={register("role", {
                  required: "Vui lòng chọn vai trò",
                })}
                error={errors.role}
                colSpan={6}
              />

              <FormTextarea
                id="note"
                label="Ghi chú"
                placeholder="Nhập ghi chú"
                register={register("note")}
                error={errors.note}
                colSpan={12}
              />

              <FormCheckbox
                id="remember"
                label="Ghi nhớ đăng nhập"
                register={register("remember")}
                colSpan={12}
              /> */}
          </FormGrid>

          {/* Ví dụ thêm Select */}
          {/* <FormSelect
            id="role"
            label="Vai trò"
            options={[
              { label: "Người dùng", value: "user" },
              { label: "Quản trị viên", value: "admin" },
            ]}
            register={register("role", { required: "Vui lòng chọn vai trò" })}
            error={errors.role}
          /> */}

          {/* Nút submit */}
          <div className="flex-center w-full">
            <button type="submit" className="btn btn-primary mw-full">
              Đăng nhập
            </button>
          </div>
          {/* </fieldset> */}
        </form>
      </div>
      {/* <div className="test"></div> */}
    </>
  );
};

export default Login;
