import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Access } from './access.entity';
import { AccessDto } from './access.dto';

@Injectable()
export class AccessService {
  constructor(
    @InjectRepository(Access)
    private accessRepository: Repository<Access>,
  ) { }

  async store(data: AccessDto) {
    return await this.accessRepository.save(data);
  }
}
