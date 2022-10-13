export interface ILoginPayload {
  username: string;
  password: string;
}

export interface ILoginResponse {
  accessToken: string;
}

export interface IValidateTokenResponse {
  accessToken: string;
}
