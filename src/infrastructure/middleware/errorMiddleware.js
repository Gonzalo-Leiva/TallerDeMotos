


notFoundMiddleware=(request, response) =>{
  response.status(404).json({ message: "Ruta no encontrada" });
}

errorMiddleware = (error, _request, response, _next) => {
  console.error(error);
  response.status(500).json({ message: "Error interno del servidor" });
}

module.exports = {
  notFoundMiddleware,
  errorMiddleware,
};