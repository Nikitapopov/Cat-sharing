import { Module } from '@nestjs/common';
import PostsController from './cats.controller';
import CatsService from './cats.service';
import Post from './cat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  controllers: [PostsController],
  providers: [CatsService],
})
export class CatsModule {}