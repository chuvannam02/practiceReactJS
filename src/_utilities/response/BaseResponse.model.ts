interface BaseResponse<T = any, V = any> {
  data?: T; // optional, JSON mẫu không có data
  error_code?: string | number; // JSON là string, có thể parse ra number
  message?: string;
  timestamp: string;
  object?: V; // đúng kiểu object
}

// Class Model
class BaseResponseModel<T = any, V = any> implements BaseResponse<T> {
  constructor(
    public timestamp: string,
    public object?: V,
    public data?: T,
    public error_code?: string | number,
    public message?: string
  ) {}
}

export { BaseResponseModel };
export type { BaseResponse };
