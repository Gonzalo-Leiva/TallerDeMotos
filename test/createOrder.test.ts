import { Cliente } from "../src/domain/models/Cliente";
import { Moto } from "../src/domain/models/moto";
import { OrdenDetalle } from "../src/domain/models/OrdenDetalle";
import { ReparacionServicio } from "../src/domain/models/ReparacionServicio";
import { CreateOrderUseCase } from "../src/application/useCases/createOrderUC";

const assert = require("node:assert/strict");
const test = require("node:test");


test("createOrder crea una orden con un detalle", () => {
  const ordenDetalle = new OrdenDetalle(
    new Moto("R1", "YAMAHA", 110, 1000),
    [new ReparacionServicio(1000)]
  );

  const order = new CreateOrderUseCase().execute(
    new Cliente("WACHIN", "1212"),
    ordenDetalle
  );

  assert.equal(order.getCliente().nombre, "WACHIN");
  assert.equal(order.getCliente().contacto, "1212");
  assert.equal(order.calcTotal(), 1000);
});

test("createOrder agrega un detalle y calcula el total final", () => {
  const ordenDetalle1 = new OrdenDetalle(
    new Moto("R1", "YAMAHA", 110, 1000),
    [new ReparacionServicio(1000)]
  );
  const ordenDetalle2 = new OrdenDetalle(
    new Moto("R1", "YAMAHA", 160, 1000),
    [new ReparacionServicio(1000)]
  );

  const order = new CreateOrderUseCase().execute(
    new Cliente("WACHIN", "1212"),
    ordenDetalle1
  );

  assert.equal(order.detalles.length, 1);

  order.setDetalle(ordenDetalle2);

  assert.equal(order.detalles.length, 2);
  assert.equal(order.detalles[1].calcSubtotal(), 1200);
  assert.equal(order.calcTotal(), 2200);
});
