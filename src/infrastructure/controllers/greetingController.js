const { formatGreeting } = require("../../domain/services/greetingService.js");

function getGreeting(_request, response) {
  response.type("text/plain").send(formatGreeting());
}

module.exports = { getGreeting };
