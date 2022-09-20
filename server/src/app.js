import compression from "compression";

import logeoRutas from "./middleware/logeo-rutas.js";

import cors from 'cors'
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import express from "express";
const app = express();

import productos from "./routes/productos.js";

app.use(cors())
app.use(compression());
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", productos);
app.use(logeoRutas);

export default app;
