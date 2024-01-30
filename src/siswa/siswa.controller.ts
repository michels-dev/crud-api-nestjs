import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { SiswaService } from './siswa.service';
import { DataSiswa } from './datasiswa.entity';

@Controller('siswa')
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
        const siswa = await this.siswaService.findOne(id);
        if(!siswa){
            throw new NotFoundException('User does not exist');
        } else {
            return siswa;
        }
    }

    // create siswa
    @Post()
    async create(@Body() siswa: DataSiswa): Promise<DataSiswa> {
        return this.siswaService.create(siswa);
    }

    // update siswa
    @Put(':id')
    async update(@Param('id') id:number, @Body() siswa: DataSiswa): Promise<any> {
        return this.siswaService.update(id, siswa);
    }

    // delete siswa
    @Delete(':id')
    async delete(@Param('id') id:number): Promise<any> {
        // handle error if siswa does not exist
        const siswa = await this.siswaService.findOne(id);
        if(!siswa){
            throw new NotFoundException('Siswa does not exist');
        }
        return this.siswaService.delete(id);
    }


}
