import {IsEmpty, IsNotEmpty, IsString} from "class-validator"
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

}