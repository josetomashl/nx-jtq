import { Injectable } from '@nestjs/common';
import { CreateUpdateAccessCodeDto } from './dto/create-update-access-code.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccessCode } from './entities/access-code.entity';

@Injectable()
export class AccessCodeService {
  constructor(
    @InjectRepository(AccessCode)
    private visitorsRepository: Repository<AccessCode>
  ) {}

  create(createUpdateAccessCodeDto: CreateUpdateAccessCodeDto) {
    return 'This action adds a new accessCode';
  }

  findAll() {
    return `This action returns all accessCode`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accessCode`;
  }

  update(id: number, createUpdateAccessCodeDto: CreateUpdateAccessCodeDto) {
    return `This action updates a #${id} accessCode`;
  }

  remove(id: number) {
    return `This action removes a #${id} accessCode`;
  }
}
