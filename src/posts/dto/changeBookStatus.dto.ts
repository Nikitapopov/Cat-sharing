import {IsNumber, IsBoolean} from 'class-validator';

export class ChangeBookStatusDto {
  @IsBoolean()
  isBooked: boolean;
}

export default ChangeBookStatusDto;