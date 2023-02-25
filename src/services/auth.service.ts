import axios from 'axios';

import { traadApi } from '../config/api';
import { variables } from '../config/variables';
import { LoginDto } from './dto/login.dto';

export class AuthService {
  async login(loginDto: LoginDto): Promise<any> {
    return traadApi.post('/auth/login', loginDto);
  }

  async loadUser(): Promise<any> {
    return traadApi.get('/auth/me');
  }

  async loadUserSSR(token: string): Promise<any> {
    return axios.get(`${variables.apiUrl}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
