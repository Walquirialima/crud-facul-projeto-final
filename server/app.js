import express from "express";
import cors from "cors";
import { router } from "./src/routes/index.js";

const app = express();

app.use(cors());
app.use(router);
app.use(express.json());

app.listen(3001, () => {
  console.log("Backend rodando na porta 3001");
});
