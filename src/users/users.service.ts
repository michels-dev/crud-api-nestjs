import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

// menggunakan dekorator untuk memberi tahu nestjs bahwa ini adalah sebuah layanan
@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) // menggunakan dekorator untuk memberi tahu nestjs bahwa kita ingin memberi repositori entitas pengguna
        private userRepository: Repository<User>, // menggunakan untuk memberi tahu nestjs bahwa kita ingin memberi repositori entitas pengguna
    ) {}

    // 5 metode UserService findAll, findOne, create, update, delete
    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findOne(id: number): Promise<User> {
        return this.userRepository.findOne({where: {id}});
    }

    async create(user: Partial<User>): Promise<User> {
        const newuser = this.userRepository.create(user);
        return this.userRepository.save(newuser);
    }

    async update(id: number, user: Partial<User>): Promise<User> {
        await this.userRepository.update(id, user);
        return this.userRepository.findOne({where:{id}});
    }

    async delete(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }
}
