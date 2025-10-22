import FormCheckbox from "../../../_utilities/form/FormCheckbox";
import FormGrid from "../../../_utilities/form/FormGrid";
import FormInput from "../../../_utilities/form/FormInput";
import FormSelect from "../../../_utilities/form/FormSelect";
import FormTextarea from "../../../_utilities/form/FormTextareaProps";
import "./Login.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginService } from "./Login.service";

type Inputs = {
  username: string;
  password: string;
  role: string;
  note: string;
  remember: boolean;
};

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    try {
      // Call login service here
      const response = LoginService.login(data);
    } catch (error) {
      console.error("Login error:", error);
    }
  };


  return (
    <>
      <div className="login">
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <legend>Đăng nhập</legend>

            {/* 👇 Form chia 2 cột, có thể đổi cols=3 */}
            <FormGrid cols={12}>
              <FormInput
                id="username"
                label="Tên đăng nhập"
                placeholder="Nhập tên đăng nhập"
                register={register("username", {
                  required: "Vui lòng nhập tên đăng nhập",
                })}
                error={errors.username}
                colSpan={6}
              />

              <FormInput
                id="password"
                type="password"
                label="Mật khẩu"
                placeholder="Nhập mật khẩu"
                register={register("password", {
                  required: "Vui lòng nhập mật khẩu",
                  minLength: {
                    value: 6,
                    message: "Mật khẩu tối thiểu 6 ký tự",
                  },
                })}
                error={errors.password}
                colSpan={6}
              />

              <FormSelect
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
              />
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

            <button type="submit">Đăng nhập</button>
          </fieldset>
        </form>
      </div>
      <div className="test"></div>
    </>
  );
};

export default Login;
