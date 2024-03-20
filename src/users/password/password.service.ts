import { compare, hash } from 'bcrypt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PasswordService {
  bcryptSaltRounds = 10;

  hash(password: string): Promise<string> {
    return hash(password, this.bcryptSaltRounds);
  }

  compare(password: string, encrypted: string): Promise<boolean> {
    return compare(password, encrypted);
  }
}
