import {IsNumber, IsBoolean, IsString, IsArray, IsNotEmpty} from 'class-validator';

export class CreateItemDto {
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

export default CreateItemDto;