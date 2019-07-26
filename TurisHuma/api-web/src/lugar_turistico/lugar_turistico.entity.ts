import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {IsString} from "class-validator";

// @ts-ignore
@Entity('lugar_turistico')
export class Lugar_turisticoEntity {
 @PrimaryGeneratedColumn()
 id?:number;

 @Column(){

}

}
