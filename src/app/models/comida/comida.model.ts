import { Alimento } from "../alimentos/alimentos.model";

export class Comida{
    id!:number;
    fechaComida!:Date;
    tipoComida!:string;
    idUsuario!:number;
    alimentos!:Alimento[];
    kcal!:number;
    grasas!:number;
    hidratosCarbono!:number;
    proteinas!:number;
}