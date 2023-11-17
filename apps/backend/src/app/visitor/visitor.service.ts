import { Injectable } from '@nestjs/common';
import { CreateUpdateVisitorDto } from './dto/create-update-visitor.dto';
import { Visitor } from './entities/visitor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VisitorService {
  constructor(
    @InjectRepository(Visitor)
    private visitorsRepository: Repository<Visitor>
  ) {}

  create(createUpdateVisitorDto: CreateUpdateVisitorDto) {
    return 'This action adds a new visitor';
  }

  findAll() {
    return `This action returns all visitor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} visitor`;
  }

  update(id: number, createUpdateVisitorDto: CreateUpdateVisitorDto) {
    return `This action updates a #${id} visitor`;
  }

  remove(id: number) {
    return `This action removes a #${id} visitor`;
  }
}
