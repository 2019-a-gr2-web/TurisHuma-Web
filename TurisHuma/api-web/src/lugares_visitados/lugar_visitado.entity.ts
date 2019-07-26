import {Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../../dist/interfaces/usuario.entity";

@Entity('lugares-visitados')
export class Lugar_visitadoEntity{
    @PrimaryGeneratedColumn()
    id?:number;

@ManyToOne(type => UsuarioEntity,usuario=>usuario.)
usuarioId:UsuarioEntity
}