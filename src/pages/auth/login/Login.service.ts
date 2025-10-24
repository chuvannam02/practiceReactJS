import { axiosWithAbort } from "../../../_utilities/auth/axiosWithAbort";
import { BaseResponse } from "../../../_utilities/response/BaseResponse.model";
import { LoginRequest, LoginResponse } from "./Login.model";

/**
 * Login Service
 * TODO: implement API methods here
 */
const baseUrl = "http://localhost:8080";

export const LoginService = {
async login(data: LoginRequest): Promise<BaseResponse<any, LoginResponse>> {
    const res = await axiosWithAbort.post<BaseResponse<any, LoginResponse>, any>(
      `${baseUrl}/api/login`, {
        username: data?.username,
        password: data?.password
      }
    );
    return res.data;
  },

  abortAll() {
    axiosWithAbort.abortAll();
  },
};

