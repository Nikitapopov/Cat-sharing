import {IsArray, IsBoolean, IsNotEmpty, IsNumber, IsString} from "class-validator";

export class UpdateItemDto {
  // @IsNumber()
  // id: number;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  color: string;
  @IsString()
  breed: string;
  @IsNumber()
  age: number;
  @IsArray()
  photos: string;
  @IsNumber()
  cost: number;
  @IsBoolean()
  isBooked: boolean;
}

export default UpdateItemDto;