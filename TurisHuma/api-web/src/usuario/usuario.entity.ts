import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Lugar_visitadoEntity} from "../lugares_visitados/lugar_visitado.entity";


@Entity('Usuario')
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    id?:number;

    @Column({
        type:"varchar",
        length: 70,
        name:'nombres_usuario'
    })
    nombres_usuario:string;

    @Column({
        type:"varchar",
        length: 70,
        name:'apellidos_usuario'
    })
    apellidos_usuario:string;

    @Column({
        type:"varchar",
        length: 16,
        name:'contrasenia_usuario'
    })
    contrasenia_usuario:string;

    @Column({
        type:"varchar",
        length:70,
        name:'correo_electronico_usuario'
    })
    correo_electronico_usuario:string;


   @OneToMany(type => Lugar_visitadoEntity,lugar_visitado=>lugar_visitado)
    lugares_visitados:Lugar_visitadoEntity[];





}