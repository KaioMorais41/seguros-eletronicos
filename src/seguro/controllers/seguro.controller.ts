import { Seguro } from '../entities/seguro.entity';
import { SeguroService } from './../services/seguro.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post } from "@nestjs/common";


@Controller ("/seguros")
export class SeguroController {
    constructor(private readonly SeguroService: SeguroService){ }


    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Seguro[]>{
        return this.SeguroService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe)id:number){
    return this.SeguroService.findById(id);
    }


    @Get('/cliente/:cliente')
    @HttpCode(HttpStatus.OK)
    findAllByCliente(@Param('cliente') cliente:string): Promise<Seguro[]>{
    return this.SeguroService.findAllByCliente(cliente);
    }

    @Post("")
    @HttpCode(HttpStatus.CREATED)
    create(@Body() seguro: Seguro): Promise<Seguro>{
    return this.SeguroService.create(seguro);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe)id:number){
    return this.SeguroService.delete(id);
    }
    
}
