import { IReparacion } from "../interfaces/IReparacion";
import { Cliente } from "../models/Cliente";
import { Orden } from "../models/Orden";
import { OrdenDetalle } from "../models/OrdenDetalle";

export class OrdenService {


    public create(cliente: Cliente, detalle?: OrdenDetalle): Orden {


        return new Orden(cliente, detalle as any);
    

}

    public addDetalle(orden: Orden, detalle: any): void {
        orden.setDetalle(detalle);
    }

    public calcTotal(orden: Orden): number {
        return orden.calcTotal();
    }

}