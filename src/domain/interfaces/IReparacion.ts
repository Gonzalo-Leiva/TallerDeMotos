import { IMoto } from "../models/moto";

export interface IReparacion {
    monto: number;
    calcMonto(moto: IMoto): number;
}