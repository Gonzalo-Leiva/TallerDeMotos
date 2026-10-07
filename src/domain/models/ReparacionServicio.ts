import { IReparacion } from "../interfaces/IReparacion";
import { IMoto } from "./moto";

export class ReparacionServicio implements IReparacion{
    monto: number;
    



    constructor(monto: number){
        
        this.monto=monto;

    }
    calcMonto(moto: IMoto): number {
       if (moto.cilindrada > 150)
         { return this.monto * 1.2; }
        else { return this.monto; }
    }};