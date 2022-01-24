import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { BooksController } from './books/books.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
     type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'library',
      entities: [],
     synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [AppController, UsersController, BooksController],
  providers: [AppService, UsersService],
})
export class AppModule {}
