import {Body, Controller, Delete, Get, Param, Patch, Post, Put, Query} from '@nestjs/common';
import ItemsService from './cats.service';
import CreateItemDto from './dto/createItem.dto';
import UpdateItemDto from './dto/updateItem.dto';
import ChangeBookStatusDto from "./dto/changeBookStatus.dto";

@Controller('cats')
export default class ItemsController {
  constructor(private readonly ItemsService: ItemsService) {}

  @Get()
  getAlltems(@Query() query) {
    const page = Number(query.page);
    const amount = Number(query.amount);
    if(page && amount)
      return this.ItemsService.getAllItems(page, amount);
    return this.ItemsService.getAllItems();
  }
  
  @Get('/isBooked')
  getAllBookedItems(@Query() query) {
    const page = Number(query.page);
    const amount = Number(query.amount);
    if(page && amount)
      return this.ItemsService.getAllItemsWithBookedArg(true, page, amount);
    return this.ItemsService.getAllItemsWithBookedArg(true);
  }

  @Get('/isFree')
  getAllFreeItems(@Query() query) {
    const page = Number(query.page);
    const amount = Number(query.amount);
    if (page && amount)
      return this.ItemsService.getAllItemsWithBookedArg(false, page, amount);
    return this.ItemsService.getAllItemsWithBookedArg(false);
  }

  @Get(':id')
  getItemById(@Param('id') id: string) {
    return this.ItemsService.getItemById(Number(id));
  }

  @Post()
  async createItem(@Body() item: CreateItemDto) {
    return this.ItemsService.createItem(item);
  }

  @Put(':id')
  async updateItem(@Param('id') id: string, @Body() item: UpdateItemDto) {
    return this.ItemsService.updateItem(Number(id), item);
  }

  @Delete(':id')
  async deleteItem(@Param('id') id: string) {
    return this.ItemsService.deleteItem(Number(id));
  }

  @Patch(':id')
  async changeItemBookingStatus(@Param('id') id: string, @Body() item: ChangeBookStatusDto) {
    return this.ItemsService.changeItemBookingStatus(Number(id), item);
  }
}