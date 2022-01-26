import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ManyToMany, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Books {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bookName: string;

  @ManyToOne(type=> User, user => user.books)
  owner: User
}
