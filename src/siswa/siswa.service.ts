import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSiswa } from './datasiswa.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SiswaService {
    constructor(
        @InjectRepository(DataSiswa)
        private siswaRepository: Repository<DataSiswa>,
    ) {}

    async findAll(): Promise<DataSiswa[]> {
        return this.siswaRepository.find();
    }

    async findOne(id: number): Promise<DataSiswa> {
        return this.siswaRepository.findOne({where: {id}});
    }

    async create(datasiswa: Partial<DataSiswa>): Promise<DataSiswa> {
        const newsiswa = this.siswaRepository.create(datasiswa);
        return this.siswaRepository.save(newsiswa);
    }

    async update(id: number, datasiswa: Partial<DataSiswa>): Promise<DataSiswa> {
        await this.siswaRepository.update(id, datasiswa);
        return this.siswaRepository.findOne({where:{id}});
    }

    async delete(id: number): Promise<void> {
        await this.siswaRepository.delete(id);
    }


}
