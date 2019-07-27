import {IsEmpty, IsNotEmpty, IsString, IsNumber,IsOptional} from "class-validator"
import {Lugar_visitadoEntity} from "../../lugares_visitados/lugar_visitado.entity";
export class UsuarioCreateDto {
    @IsEmpty()
    id:number;

    @IsNotEmpty()
    @IsString()
    nombres_usuario:string;

    @IsNotEmpty()
    @IsString()
    apellidos_usuario:string;

    @IsNotEmpty()
    @IsString()
    constrasenia_usuario:string;

    @IsNotEmpty()
    @IsString()
    correo_electronico_usuario:string;

    @IsNumber()
    @IsOptional()
    lugares_visitados_ID:Lugar_visitadoEntity;

}