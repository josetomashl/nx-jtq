import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Visitor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  modificationCounter: number;

  @Column()
  phoneNumber: string;

  @Column()
  userType: string;
}
