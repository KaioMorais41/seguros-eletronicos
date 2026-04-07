import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { seguromodule } from './seguro/seguro.module';
import { Seguro } from './seguro/entities/seguro.entity';
import { SeguroController } from './seguro/controllers/seguro.controller';
import { SeguroService } from './seguro/services/seguro.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_seguroseletronicos',
      entities: [Seguro],
      synchronize: true,
    }),
  seguromodule,
],
  controllers: [SeguroController],
  providers: [SeguroService],
})
export class AppModule {}
