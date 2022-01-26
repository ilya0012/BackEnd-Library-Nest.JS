import { Injectable } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';

@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Welcome to my BackEnd Library!';
  }
}
