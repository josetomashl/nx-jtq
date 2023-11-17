import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { AccessCode } from '../../access-code/entities/access-code.entity';

@Entity()
export class DailyQueue {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  logo: string;

  @Column()
  modificationCounter: number;

  @Column()
  currentNumber: number;

  @Column()
  attentionTime: string;

  @Column()
  minAttentionTime: string;

  @Column()
  active: boolean;

  @Column()
  customers: number;

  @OneToMany(() => AccessCode, (accessCode) => accessCode.idQueue)
  queues: AccessCode[];
}
