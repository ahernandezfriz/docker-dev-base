import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { pool } from "./db/connection.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.json({ message: "API funcionando correctamente", time: result.rows[0] });
});

const PORT = process.env.BACKEND_PORT || 4000;
app.listen(PORT, () => console.log(`Servidor backend escuchando en puerto ${PORT}`));
