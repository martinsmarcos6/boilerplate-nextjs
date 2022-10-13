import { AxiosResponse } from 'axios';

import { pdaJobsApi } from '../config/api';
import {
  ILoginPayload,
  ILoginResponse,
  IValidateTokenResponse,
} from './contracts/user';

export class UserService {
  apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

  async register(data: any): Promise<AxiosResponse<any, any>> {
    const response = await pdaJobsApi.request({
      method: 'POST',
      url: `/user/register`,
      data,
    });

    return response;
  }

  async login(
    data: ILoginPayload
  ): Promise<AxiosResponse<ILoginResponse, any>> {
    const response = await pdaJobsApi.request<ILoginResponse>({
      method: 'POST',
      url: `/user/login`,
      data,
    });

    return response;
  }

  async validateToken(
    token: string
  ): Promise<AxiosResponse<IValidateTokenResponse, any>> {
    const response = await pdaJobsApi.request<IValidateTokenResponse>({
      method: 'POST',
      url: `/user/me`,
      data: {
        token,
      },
    });

    return response;
  }
}
