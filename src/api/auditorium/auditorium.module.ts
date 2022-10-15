import { AuditoriumController } from './controller/auditorium.controller';
import { DatabaseModule } from './../../database/database.module';
import { Module } from '@nestjs/common';
import { AuditoriumService } from './service/auditorium.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AuditoriumController],
  providers: [AuditoriumService],
  exports: [AuditoriumService],
})
export class AuditoriumModule {}
