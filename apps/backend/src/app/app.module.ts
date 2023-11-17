import { Module } from '@nestjs/common';
import { AccessCodeModule } from './access-code/access-code.module';
import { DailyQueueModule } from './daily-queue/daily-queue.module';
import { VisitorModule } from './visitor/visitor.module';
import { DataSource } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Visitor } from './visitor/entities/visitor.entity';
import { AccessCode } from './access-code/entities/access-code.entity';
import { DailyQueue } from './daily-queue/entities/daily-queue.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Visitor, AccessCode, DailyQueue],
      // synchronize: true,
    }),
    AccessCodeModule,
    DailyQueueModule,
    VisitorModule,
  ],
  exports: [TypeOrmModule],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
