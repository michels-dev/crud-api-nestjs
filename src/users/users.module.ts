import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({ // menggunakan dekorator untuk memberi tahu nestjs bahwa ini adalah sebuah model
  // mengimpor TypeOrmModule dan entitas pengguna (UserController dan UserService sudah diimpor)
  imports: [TypeOrmModule.forFeature([User])], // menambahkan [User] ke larik impor untuk memberi tahu nestjs bahwa kita ingin menggunakan entitas User
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
