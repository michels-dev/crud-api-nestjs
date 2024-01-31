import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { SiswaService } from './siswa.service';
import { DataSiswa } from './datasiswa.entity';

@Controller('sas_master_siswa')
export class SiswaController {
    constructor(private readonly siswaService: SiswaService ) {}

    // get all siswa
    @Get()
    async findAll(): Promise<DataSiswa[]> {
        return this.siswaService.findAll();
    }

    // get siswa by id
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<DataSiswa> {
        const sas_master_siswa = await this.siswaService.findOne(id);
        if(!sas_master_siswa){
            throw new NotFoundException('User does not exist');
        } else {
            return sas_master_siswa;
        }
    }

    // create siswa
    @Post()
    async create(@Body() sas_master_siswa: DataSiswa): Promise<DataSiswa> {
        return this.siswaService.create(sas_master_siswa);
    }

    // update siswa
    @Put(':id')
    async update(@Param('id') id:number, @Body() sas_master_siswa: DataSiswa): Promise<any> {
        return this.siswaService.update(id, sas_master_siswa);
    }

    // delete siswa
    @Delete(':id')
    async delete(@Param('id') id:number): Promise<any> {
        // handle error if siswa does not exist
        const sas_master_siswa = await this.siswaService.findOne(id);
        if(!sas_master_siswa){
            throw new NotFoundException('Siswa does not exist');
        }
        return this.siswaService.delete(id);
    }


}
