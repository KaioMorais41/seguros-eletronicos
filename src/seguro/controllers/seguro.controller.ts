import { Seguro } from '../entities/seguro.entity';
import { SeguroService } from './../services/seguro.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";


@Controller ("/seguros")
export class SeguroController {
    constructor(private readonly seguroService: SeguroService){ }


    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Seguro[]>{
        return this.seguroService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe)id:number){
    return this.seguroService.findById(id);
    }


    @Get('/cliente/:cliente')
    @HttpCode(HttpStatus.OK)
    findAllByCliente(@Param('cliente') cliente:string): Promise<Seguro[]>{
    return this.seguroService.findAllByCliente(cliente);
    }

    @Post("")
    @HttpCode(HttpStatus.CREATED)
    create(@Body() seguro: Seguro): Promise<Seguro>{
    return this.seguroService.create(seguro);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() seguro: Seguro): Promise<Seguro> {
    return this.seguroService.update(seguro);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe)id:number){
    return this.seguroService.delete(id);
    }
    
}
