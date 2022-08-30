const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
import { router } from "./src/routes";

app.use(cors());
app.use(router);
app.use(express.json());

app.listen(3001, () => {
  console.log("Backend rodando na porta 3001");
});
