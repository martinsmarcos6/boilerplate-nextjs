import { AxiosResponse } from 'axios';

import { traadApi } from '../config/api';
import {
  ILoginPayload,
  ILoginResponse,
  IValidateTokenResponse,
} from './contracts/user';

export class UserService {
  apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

  async register(data: any): Promise<AxiosResponse<any, any>> {
    const response = await traadApi.request({
      method: 'POST',
      url: `/v1/user/register`,
      data,
    });

    return response;
  }

  async login(
    data: ILoginPayload
  ): Promise<AxiosResponse<ILoginResponse, any>> {
    const response = await traadApi.request<ILoginResponse>({
      method: 'POST',
      url: `/v1/user/login`,
      data,
    });

    return response;
  }

  async validateToken(
    token: string
  ): Promise<AxiosResponse<IValidateTokenResponse, any>> {
    const response = await traadApi.request<IValidateTokenResponse>({
      method: 'POST',
      url: `/user/me`,
      data: {
        token,
      },
    });

    return response;
  }
}
