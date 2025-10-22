interface BaseResponse<T> {
  data: T;
  error_code?: number;
  message?: string;
  timestamp: string;
  object: string;
}

class BaseResponseModel<T> implements BaseResponse<T> {
  constructor(
    public data: T,
    public timestamp: string,
    public object: string,
    public error_code?: number,
    public message?: string
  ) {}
}

export { BaseResponseModel };
export type { BaseResponse };
