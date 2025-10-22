interface LoginRequest {
    username: string;
    password: string;
}

interface LoginResponse {
    access_token: string;
    exp: number;
}

class LoginRequestModel implements LoginRequest {
    constructor(
        public username: string,
        public password: string
    ) {};
}

class LoginResponseModel implements LoginResponse {
    constructor(
        public access_token: string,
        public exp: number
    ) {}
}

export { LoginRequestModel, LoginResponseModel };
export type { LoginResponse, LoginRequest };
