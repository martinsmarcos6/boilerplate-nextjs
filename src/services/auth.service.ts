import { traadApi } from '../config/api';
import { LoginDto } from './dto/login.dto';

export class AuthService {
  async login(loginDto: LoginDto): Promise<any> {
    return traadApi.post('/auth/login', loginDto);
  }
}
