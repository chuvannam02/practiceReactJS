import { axiosWithAbort } from "../../../_utilities/auth/axiosWithAbort";
import { LoginRequest } from "./Login.model";

/**
 * Login Service
 * TODO: implement API methods here
 */
const baseUrl = "http://localhost:8080";

export const LoginService = {
async login(data: LoginRequest): Promise<any> {
    const res = await axiosWithAbort.post<any>(
      `${baseUrl}/api/login`, {
        username: data?.username,
        password: data?.password
      }
    );
    return res?.data;
  },

  abortAll() {
    axiosWithAbort.abortAll();
  },
};

