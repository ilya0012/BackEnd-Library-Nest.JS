import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { User } from 'src/entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Books } from 'src/entity/books.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Books, User])],
    providers: [BooksService],
    controllers: [BooksController]
})
export class BooksModule {}
