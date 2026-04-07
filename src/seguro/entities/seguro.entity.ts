import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity ({name: 'tb_seguros'})
export class Seguro {

        @PrimaryGeneratedColumn()
        id!: number;

        @IsNotEmpty()
        @Column({ length: 255, nullable: false })
        cliente!: string;

        @IsNotEmpty()
        @Column({ length: 255, nullable: false })
        aparelho!: string;

        @IsNotEmpty()
        @Column("decimal", { precision: 10, scale: 2, nullable: false })
        valor_apolice!: number;

        @IsNotEmpty()
        @Column({ length: 20, nullable: false })
        imei!: string;
    
}
