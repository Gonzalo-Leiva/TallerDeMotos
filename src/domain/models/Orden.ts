import { Cliente } from "./Cliente";
import { OrdenDetalle } from "./OrdenDetalle";
import { v4 } from "uuid";



export class Orden{
    


    private _id: string;
    private _cliente: Cliente;
    private _detalles: OrdenDetalle[];

    constructor(cliente: Cliente, detalle?: OrdenDetalle) {
        this._id = v4();
        this._cliente = cliente;
        this._detalles = detalle ? [detalle] : [];
    }


    public setDetalle(detalle: OrdenDetalle): void {    
        this._detalles.push(detalle);
    }

    public calcTotal(): number {
        return this._detalles.reduce((total, detalle) => total + detalle.calcSubtotal(), 0);
    }

    getCliente() {
      return this._cliente;
    }

    get detalles() {
      return this._detalles;
    }



}