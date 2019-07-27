import {Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";

@Entity('lugares-visitados')
export class Lugar_visitadoEntity{
    @PrimaryGeneratedColumn()
    id?:number;

    @ManyToOne(type => UsuarioEntity, usuario=>usuario.lugares_visitados)
    lugares_visitados_ID: Lugar_visitadoEntity

}