import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import CreateItemDto from './dto/createItem.dto';
import Post from './cat.entity';
import UpdateItemDto from './dto/updateItem.dto';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import ChangeBookStatusDto from "./dto/changeBookStatus.dto";

@Injectable()
export default class CatsService {
  constructor(
    @InjectRepository(Post)
    private itemsRepository: Repository<Post>
  ) {
  }

  // page - current page in pagination
  // amount - amount items on page
  //
  async getAllItems(page = 1, amount = 10) {
    return this.itemsRepository.find({
      skip: (page - 1) * amount,
      take: amount
    });
  }

  async getAllItemsWithBookedArg(isBooked, page = 1, amount = 10) {
    return this.itemsRepository.find({
      where: { isBooked },
      skip: (page - 1) * amount,
      take: amount
    });
  }

  async getItemById(id: number) {
    if (!Number.isInteger(id))
      throw new HttpException('Incorrect request', HttpStatus.BAD_REQUEST);
    const item = await this.itemsRepository.findOne(id);
    if (item) {
      return item;
    }
    throw new HttpException('Item not found', HttpStatus.NOT_FOUND);
  }

  async createItem(item: CreateItemDto) {
    const newItem = await this.itemsRepository.create(item);
    await this.itemsRepository.save(newItem);
    return newItem;
  }

  async updateItem(id: number, item: UpdateItemDto) {
    if (!Number.isInteger(id))
      throw new HttpException('Incorrect request', HttpStatus.BAD_REQUEST);
    await this.itemsRepository.update(id, item);
    const updatedItem = await this.itemsRepository.findOne(id);
    if (updatedItem) {
      return updatedItem;
    }
    throw new HttpException('Item not found', HttpStatus.NOT_FOUND);
  }

  async deleteItem(id: number) {
    if (!Number.isInteger(id))
      throw new HttpException('Incorrect request', HttpStatus.BAD_REQUEST);
    const deleteResponse = await this.itemsRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('Item not found', HttpStatus.NOT_FOUND);
    }
  }

  async changeItemBookingStatus(id: number, item: ChangeBookStatusDto) {
    if (!Number.isInteger(id))
      throw new HttpException('Incorrect request', HttpStatus.BAD_REQUEST);
    await this.itemsRepository.update(id, item);
    const updatedItem = await this.itemsRepository.findOne(id);
    if (updatedItem) {
      return updatedItem;
    }
    throw new HttpException('Item not found', HttpStatus.NOT_FOUND);
  }
}