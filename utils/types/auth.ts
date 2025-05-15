export interface LoginResponse {
  email: string;
  password: string;
}
export interface resetPasswordResponse {
  newPassword: string;
  confirmPassword: string;
}
export interface forgotPasswordResponse {
  email: string;
}
