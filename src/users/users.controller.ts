import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

    @Post()
    @HttpCode(HttpStatus.CREATED)
    addUser(@Body() createUserDto: CreateUserDto) {
        return `name: ${createUserDto.name} lastName: ${createUserDto.lastName}`
    }
    
    @Put('id')
    
    updateUser(@Body() updateUserDto: UpdateUserDto, @Param('id') id: string) {
        return 'Updated' + id
    }

    @Delete(':id') 
    @HttpCode(HttpStatus.ACCEPTED)
    deleteUser(@Param('id') id: string) {
        return 'Deleted' + id
    }

    @Get()
    hasBoughtOrNot(): boolean {
        return true
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    getAllUsers(): string {
        return 'getAllUsers'
    }

    @Get('id')
    @HttpCode(HttpStatus.OK)
    getInformation(@Param('id') id: string): string {
        return 'getOne' + id    
    }


}
