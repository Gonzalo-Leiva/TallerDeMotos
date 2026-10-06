import assert from "node:assert/strict";
import test from "node:test";

import { formatGreeting } from "../src/greeting.js";

test("formatGreeting devuelve un saludo claro", () => {
  assert.equal(formatGreeting(), "¡Hola desde Node.js!");
});
