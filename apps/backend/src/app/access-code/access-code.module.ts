import { Module } from '@nestjs/common';
import { AccessCodeService } from './access-code.service';
import { AccessCodeController } from './access-code.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessCode } from './entities/access-code.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccessCode])],
  controllers: [AccessCodeController],
  providers: [AccessCodeService],
})
export class AccessCodeModule {}
