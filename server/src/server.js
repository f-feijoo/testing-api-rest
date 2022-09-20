import * as dotenv from "dotenv";
dotenv.config();
import cluster from "cluster";
import os from "os";
import yargs from "yargs";
const args = yargs(process.argv.slice(2))
  .default({
    PORT: 8080,
    MODO: "FORK",
  })
  .alias({
    p: "PORT",
    m: "MODO",
  }).argv;

const PORT = process.env.PORT || args.PORT || 8080;

import http from "http";
import app from "./app.js";
const server = http.createServer(app);

const MODO_CLUSTER = args.MODO === "CLUSTER";

if (MODO_CLUSTER && cluster.isPrimary) {
  const cpus = os.cpus().length;
  console.log(`Primary PID ${process.pid}, port ${PORT}, modo ${args.MODO}`);
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
} else {
  server.listen(PORT, () => {
    console.log(
      `Servidor http escuchando en el puerto ${PORT}, process ID: ${process.pid}`
    );
  });
}
