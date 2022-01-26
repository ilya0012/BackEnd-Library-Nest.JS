import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}

    findAll(): Promise<User[]> {
        return this.usersRepository.find() // SELECT * from user * JOIN books
    }    

    async findOne(id: number): Promise<User> { 
        try{
            const user = await this.usersRepository.findOneOrFail(id, {
                relations: ['books']
            }) // SELECT * from user WHERE user id = id;
            return user
        }
        catch(err){
            throw err
        } 
    }
    
    async createUser(userName: string, password: string): Promise<User> {
        const newUser = this.usersRepository.create({ userName, password}) // const newUser = new User(); newUser.userName = userName; 
        return this.usersRepository.save(newUser) // INSERT 
    }

    async updateUser(id: number, userName: string, password: string): Promise<User> {
        const user = await this.findOne(id) 

        user.userName = userName
        user.password = password 
        
        return this.usersRepository.save(user) // RENAME and SAVE
    }

    async deleteUser(id: number): Promise<User> {
        const user = await this.usersRepository.findOne(id)

        return this.usersRepository.remove(user) // REMOVE from users
    }

    async buySubscription(id: number): Promise<User> {
        const user = await this.usersRepository.findOne(id)

        user.subscription = true

        return this.usersRepository.save(user)
    }

}
        
