import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {

    constructor(private readonly booksService: BooksService) {}
    
    @Post()
    async addBook() {
        return this.booksService.addBook("5th book") 
    }

    @Put()
    returnBook() {

    }

    @Get()
    async findAll() {
        return this.booksService.findAll()
    }
}
