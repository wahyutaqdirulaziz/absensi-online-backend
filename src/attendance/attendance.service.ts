import { Injectable } from '@nestjs/common';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AttendanceService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createAttendanceDto: CreateAttendanceDto,id: number) {
      return this.prisma.attendance.create({
        data: {
          date: createAttendanceDto.date,
          status: createAttendanceDto.status,
          longitude: createAttendanceDto.longitude,
          latitude: createAttendanceDto.latitude,
          userId:id,
        },
      });
    }
  
    async findAll() {
      return this.prisma.attendance.findMany({
        include: {
          user: true,
        },
      });
    }
  
    async findOne(id: number) {
      return this.prisma.attendance.findUnique({
        where: { id },
        include: {
          user: true,
        },
      });
    }
  
    async update(id: number, updateAttendanceDto: UpdateAttendanceDto) {
      return this.prisma.attendance.update({
        where: { id },
        data: {
          date: updateAttendanceDto.date,
          status: updateAttendanceDto.status,
          longitude: updateAttendanceDto.longitude,
          latitude: updateAttendanceDto.latitude,
          userId: id,
        },
      });
    }
  
    async remove(id: number) {
      return this.prisma.attendance.delete({
        where: { id },
      });
    }
}
