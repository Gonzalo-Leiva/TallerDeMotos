import { IReparacion } from "../../domain/interfaces/IReparacion";
import { Cliente } from "../../domain/models/Cliente";
import { IMoto } from "../../domain/models/moto";
import { Orden } from "../../domain/models/Orden";
import { OrdenDetalle } from "../../domain/models/OrdenDetalle";
import { OrdenService } from "../../domain/services/OrdenService";


export class CreateOrderUseCase {


    public execute(cliente: Cliente, detalle: OrdenDetalle): Orden{

        const Orden1 = new OrdenService().create(cliente,detalle);
        return Orden1;


    }
}

