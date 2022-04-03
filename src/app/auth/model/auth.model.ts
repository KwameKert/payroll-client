export class LoginParams {
  username!: string;
  password!: string;
}

export class SignupParams {
  firstName!: string;
  lastName!: string;
  emailAddress!: string;
  password!: string;
}

export interface LoginResponseData {
  user: User;
  token: string;
}

export interface LoginResponse {
  data: LoginResponseData;
  message: string;
}

export interface User {
  id: number;
  username: string;
  lastName: string;
  otherNames: string;
  email: string;
  phoneNumber: string;
  picture?: string;
}
