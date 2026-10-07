const assert = require("node:assert/strict");
const test = require("node:test");

const { formatGreeting } = require("../src/domain/services/greetingService.js");

test("formatGreeting devuelve un saludo claro", () => {
  assert.equal(formatGreeting(), "¡Hola desde Node.js!");
});
