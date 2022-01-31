import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Patch, Post, Put } from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Post()
    async createNewUser(): Promise<User>{
        return this.usersService.createUser('Ilya', 'specialForTest')
    }
    @Put()
    async updateUser(): Promise<User> {
        return this.usersService.updateUser(2, 'Michael', 'specialForUpdate') // UPDATE NAME and PASS by ID
    }

    @Delete()
    async deleteUser(): Promise<User> {
        return this.usersService.deleteUser(2) // DELETE ONE by id
    }

    @Patch()
    async alterSub(): Promise<User>{
        return this.usersService.buySubscription(1) // change sub from false to true
    }

    @Get()
    async findEveryone(): Promise<User[]>{
        return this.usersService.findAll() // massive of users
    }
 
    @Get('user')
    async findUser(): Promise<User> {
        return this.usersService.findOne(1) // SEARCH ONE by ID
    }

    @Post('book')
    async takeBook(): Promise<User> {
        return this.usersService.takeBook(1, "second book")
    }

    @Delete('book')
    async returnBook(): Promise<User> {
        return this.usersService.returnBook(1, "first book")
    }
    
    
    

}
