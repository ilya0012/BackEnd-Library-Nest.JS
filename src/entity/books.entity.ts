import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ManyToMany, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Books {

  @PrimaryColumn()
  bookName: string

  @Column({default: true})
  available: boolean
  
  @ManyToOne(type=> User, user => user.books)
  owner: User
}
