import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

    @Post()
    addUser(@Body() createUserDto: CreateUserDto) {
        return `name: ${createUserDto.name} lastName: ${createUserDto.lastName}`
    }
    
    @Put()
    updateUser(@Body() updateUserDto: UpdateUserDto, @Param('id') id: string) {

    }

    @Delete(':id') 
    deleteUser(@Param('id') id: string) {
      return 'Deleted' + id
    }

    @Get()
    hasBoughtOrNot(): boolean {
        return true
    }

    @Get()
    getAllUsers(): string {
        return 'getAllUsers'
    }

    @Get('id')
    getInformation(@Param('id') id: string): string {
        return 'getOne' + id    
    }


}
