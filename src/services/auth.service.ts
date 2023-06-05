import { LoginType } from '../types/login.type';

const api: any = {}; // Replace this with your own API client

export class AuthService {
  async login(loginData: LoginType): Promise<any> {
    return api.post('/auth/login', loginData);
  }

  async loadUser(): Promise<any> {
    return api.get('/auth/me');
  }
}
