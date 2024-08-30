import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { AttendanceModule } from './attendance/attendance.module';

@Module({
  imports: [AuthModule, UsersModule, PrismaModule, AttendanceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
