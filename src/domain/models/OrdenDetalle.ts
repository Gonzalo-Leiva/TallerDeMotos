
import { v4 } from "uuid";
import { IMoto } from "./moto";
import { IReparacion } from "../interfaces/IReparacion";


export class OrdenDetalle{
    private _id: string;
    private moto: IMoto;
    private reparaciones: IReparacion[];


    constructor(moto: IMoto, reparaciones: IReparacion[]) {
        this._id = v4();
        this.moto = moto;
        this.reparaciones = reparaciones;
    }


    public calcSubtotal(): number {
        return this.reparaciones.reduce((total, reparacion) => total + reparacion.calcMonto(this.moto), 0);
    }

    public setReparacion(reparacion: IReparacion): void {
        this.reparaciones.push(reparacion);
    }

}