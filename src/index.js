import http from "node:http";

const port = Number(process.env.PORT) || 3000;

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  response.end("¡Hola desde Node.js!\n");
});

server.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
