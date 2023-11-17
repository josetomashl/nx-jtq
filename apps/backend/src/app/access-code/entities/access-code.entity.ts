import { DailyQueue } from '../../daily-queue/entities/daily-queue.entity';
import { Visitor } from '../../visitor/entities/visitor.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class AccessCode {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  ticketNumber: number;

  @Column()
  modificationCounter: number;

  @Column()
  creationTime: string;

  @Column()
  startTime: string;

  @Column()
  endTime: string;

  @OneToOne(() => Visitor)
  @JoinColumn()
  idVisitor: Visitor['id'];

  @ManyToOne(() => DailyQueue, (dailyQueue) => dailyQueue.id)
  idQueue: DailyQueue['id'];
}
