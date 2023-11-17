import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccessCodeService } from './access-code.service';
import { CreateUpdateAccessCodeDto } from './dto/create-update-access-code.dto';

@Controller('access-code')
export class AccessCodeController {
  constructor(private readonly accessCodeService: AccessCodeService) {}

  @Post()
  create(@Body() createUpdateAccessCodeDto: CreateUpdateAccessCodeDto) {
    return this.accessCodeService.create(createUpdateAccessCodeDto);
  }

  @Get()
  findAll() {
    return this.accessCodeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accessCodeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() createUpdateAccessCodeDto: CreateUpdateAccessCodeDto
  ) {
    return this.accessCodeService.update(+id, createUpdateAccessCodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accessCodeService.remove(+id);
  }
}
