import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Patch, Post, Put } from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Post('createUser')
    async createNewUser(): Promise<User>{
        return this.usersService.createUser('Ilya', 'specialForTest') // userName and password  
    }
    
    @Put()
    async updateUser(): Promise<User> {
        return this.usersService.updateUser(1, 'Michael', 'specialForUpdate') // UPDATE NAME and PASS by ID
    }

    @Delete()
    async deleteUser(): Promise<User> {
        return this.usersService.deleteUser(1) // DELETE ONE by id
    }

    @Patch('sub')
    async alterSub(): Promise<User>{
        return this.usersService.buySubscription(13) // change sub from false to true
    }

    @Get()
    async findEveryone(): Promise<User[]>{
        return this.usersService.findAll() // massive of users
    }
 
    @Get('user')
    async findUser(): Promise<User> {
        return this.usersService.findOne(1) // SEARCH ONE by ID
    }

    @Post('takeABook')
    async takeBook(): Promise<User> {
        return this.usersService.takeBook(13, "5th book")
    }

    @Patch('returnBook')
    async returnBook(): Promise<User> {
        return this.usersService.returnBook(13, "5th book")
    }
    
    
    

}
