import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Cat } from 'src/interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  constructor(
    @Inject('CAT_MODEL')
    private catModel: Model<Cat>,
  ) {}
  
  create(createCatDto: CreateCatDto) {
    return this.catModel.create(createCatDto);
  }

  findAll() {
    return this.catModel.find({});
  }

  findOne(id: string) {
    return this.catModel.findById(id);
  }
}
