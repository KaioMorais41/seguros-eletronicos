import { InjectRepository } from '@nestjs/typeorm';
import { Seguro } from '../entities/seguro.entity';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ILike, Repository } from 'typeorm';
import { DeleteResult } from 'typeorm/browser';


@Injectable()
export class SeguroService {
    constructor (
        @InjectRepository(Seguro) 
        private seguroRepository: Repository<Seguro>
    ) { }

    async findAll(): Promise<Seguro[]> {
        return await this.seguroRepository.find();
    }

    async findById(id: number): Promise<Seguro> {
        const seguro = await this.seguroRepository.findOne({
            where: { id }
     });

     if (!seguro) {
        throw new HttpException('Seguro não encontrado!', HttpStatus.NOT_FOUND);
     }

     return seguro;
    }

    async findAllByCliente(cliente: string): Promise<Seguro[]>{
        return await this.seguroRepository.find({
            where:{
                cliente: ILike(`%${cliente}%`)
            }
        })
    }

    async create (seguro: Seguro): Promise<Seguro> {
        return await this.seguroRepository.save(seguro);
    }

    async delete (id: number): Promise<DeleteResult>{
        await this.findById(id)

        return await this.seguroRepository.delete(id)
    }

    



    }






