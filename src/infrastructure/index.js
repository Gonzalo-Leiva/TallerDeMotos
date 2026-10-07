const express = require("express");
const { port } = require("./config/environment.js");
const greetingRoutes = require("./routes/greetingRoutes.js");
const {
  errorMiddleware,
  notFoundMiddleware,
} = require("./middleware/errorMiddleware.js");
import createMoto from "../application/useCases/createOrderUC.ts";

const app = express();

app.use("/", greetingRoutes);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});


