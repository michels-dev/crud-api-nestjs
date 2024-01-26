import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController { // menggunakan dekorator untuk memberi tahu nestjs bahwa ini adalah sebuah kontroller, dan bahwa rutenya adalah "users"
    constructor(private readonly usersService: UsersService){} // mendefinisikan konstruktor kelas, dan memberi UserService

    // mendefinisikan 5 metode : findAll, findOne, create, update, delete dengan menggunakan HTTP yang digunakan dan menggunakan UserService untuk memanggil metode yang sesuai
    // get all users
    @Get()
    async findAll(): Promise<User[]>{
        return this.usersService.findAll();
    }

    // get user by id
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<User> {
        const user = await this.usersService.findOne(id);
        if(!user) {
            throw new NotFoundException('User does not exist');
        } else {
            return user;
        }
    }

    // create user
    @Post()
    async create(@Body() user: User): Promise<User> {
        return this.usersService.create(user);
    }

    // update user
    @Put(':id')
    async update(@Param('id') id: number, @Body() user: User): Promise<any> {
        return this.usersService.update(id, user);
    }

    // delete user
    @Delete(':id')
    async delete(@Param('id') id: number): Promise<any> {
        // handle error if user does not exist
        const user = await this.usersService.findOne(id);
        if(!user){
            throw new NotFoundException('User not does not exist!');
        }
        return this.usersService.delete(id);
    }
}
