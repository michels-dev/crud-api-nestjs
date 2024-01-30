import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SiswaModule } from './siswa/siswa.module';

@Module({
  imports: [ // mengimport ConfigModule, UsersModule, TypeOrmModule
    ConfigModule.forRoot(), // mengimport ConfigModule, UsersModule, TypeOrmModule dalam array
    UsersModule,
    SiswaModule,
    TypeOrmModule.forRoot({ // menggunakan forRoot untuk memberitahu nestjs menggunakan koneksi default, mendefinisikan variabel untuk menyambungkan ke basis data
      type: process.env.DB_TYPE as any, // mengatur dalam berkas docker-compose.yml
      host: process.env.PG_HOST,
      port: parseInt(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      entities:[__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // true untuk membuat skema basis data secara otomatis diperbarui ketika aplikasi dimulai
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
