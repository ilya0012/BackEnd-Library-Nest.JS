import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Books } from 'src/entity/books.entity';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Books)
        private booksRepository: Repository<Books>,
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) {}

    async addBook(bookName: string): Promise<Books> {
        const newBook = this.booksRepository.create({bookName})
        return this.booksRepository.save(newBook)      
    }

    findAll(): Promise<Books[]> {
        return this.booksRepository.find() // SELECT ALL * From BOOKS
    }

    

}
