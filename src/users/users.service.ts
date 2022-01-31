import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { Books } from 'src/entity/books.entity';
import { User } from 'src/entity/user.entity';
import { subscribeOn } from 'rxjs';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        @InjectRepository(Books)
        private booksRepository: Repository<Books>
    ) {}

    findAll(): Promise<User[]> {        // FIND ALL USERS
        return this.usersRepository.find({
            relations: ['books']
        }) // SELECT * from user * JOIN books
    }

    async findOne(id: number): Promise<User> {
        try{
            const user = await this.usersRepository.findOneOrFail(id, {relations: ['books'] }) // SELECT * from user WHERE user id = id;
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

        if(user.subscription === false){    // IF USER HAS NOT SUBSCRIPTION 
            user.subscription = true
            return this.usersRepository.save(user)
        }
        else {
            console.log("Your subscription is already activated") // IF USER HAS NOT SUBSCRIPTION   
            return this.usersRepository.save(user)
        }
    }

    async takeBook(id: number, bookName: string): Promise<User> {
        const book = await this.booksRepository.findOne(bookName)
        const user = await this.usersRepository.findOne(id, {relations: ['books'] })
        
        try{
            if(book.available == true && user.subscription == true && user.books.length < 5)  
            {
                user.books.push(book)  // Add books to user
                book.available = false   
                this.booksRepository.save(book) // save changes in library
                return this.usersRepository.save(user)
            }
        
            else {
                console.log("It's not available now or you have not subscription!")
            }
        }
        catch(err) {
            throw err
        }
    
    }

    async returnBook(id: number, bookName: string): Promise<User> {
        const book = await this.booksRepository.findOne(bookName)
        const user = await this.usersRepository.findOne(id, {relations: ['books']})
        console.log(user.books)
        console.log(book)
        const example = user.books.includes(book)
        console.log(example)

        try{
        const index = user.books.findIndex(el => el.bookName === bookName)
        
        if( index == -1){
            console.log('You have not this book')
        }
        else{
            user.books.splice(index, 1)
            book.available = true
            this.booksRepository.save(book)
            return this.usersRepository.save(user)
        }
    }

        catch (err) {
            throw err
        }
        
    }
    
}
