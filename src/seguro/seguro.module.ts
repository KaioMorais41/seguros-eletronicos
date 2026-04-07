import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Seguro } from "./entities/seguro.entity";
import { SeguroService } from "./services/seguro.service";
import { SeguroController } from './controllers/seguro.controller';
 
@Module({
    imports: [TypeOrmModule.forFeature([Seguro])],  // Importa a postagem como uma entidade TypeORM
    providers: [SeguroService], // Define o PostagemService como um provedor 
    controllers: [SeguroController], // Define o PostagemController como um controlador 
    exports: [TypeOrmModule] // Exporta o TypeOrmModule
})

export class seguromodule {}