
import { IsDateString, IsEnum, IsNotEmpty, IsNumber, IsOptional } from '@nestjs/class-validator';
import { Status } from '@prisma/client';
import {ApiProperty} from "@nestjs/swagger";
export class CreateAttendanceDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  date: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(Status)
  status: Status;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  longitude?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  latitude?: number;

}
