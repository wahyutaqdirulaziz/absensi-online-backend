import { Module } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { AttendanceController } from './attendance.controller';

@Module({
  controllers: [AttendanceController],
  providers: [AttendanceService, PrismaService],
  imports: [],
  exports: [],
})
export class AttendanceModule {}
