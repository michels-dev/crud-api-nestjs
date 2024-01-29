import { Module } from '@nestjs/common';
import { SiswaController } from './siswa.controller';
import { SiswaService } from './siswa.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSiswa } from './datasiswa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DataSiswa])],
  controllers: [SiswaController],
  providers: [SiswaService]
})
export class SiswaModule {}
