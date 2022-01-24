import { Body, Controller, Post, Put } from '@nestjs/common';

@Controller('books')
export class BooksController {

    @Post()
    addBook() {
        
    }

    @Post()
    addBookToUser(@Body() body) {

    }

    @Put()
    returnBook() {

    }
}
