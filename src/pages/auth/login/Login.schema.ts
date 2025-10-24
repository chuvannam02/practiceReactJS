// src/modules/login/Login.schema.ts
import { z } from "zod";


// Tất cả lỗi đều được lấy từ Zod schema, không cần viết lại trong register().
export const loginSchema = z.object({
  username: z.string().min(1, "Vui lòng nhập tên đăng nhập"),
  password: z.string().min(6, "Mật khẩu tối thiểu 6 ký tự"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
