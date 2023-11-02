import { Alimento } from "../alimentos/alimentos.model";

export class InformacionComida{
    tipoComida!:String;
    fechaComida!:Date;
    email!:string;
    alimentos!:Alimento[];
}