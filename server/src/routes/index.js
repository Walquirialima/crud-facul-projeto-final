import { Router } from "express";

import { produtosRoutes } from "./produtos.routes.js";
import { fornecedoresRoutes } from "./fornecedores.routes.js";
import { clientesRoutes } from "./clientes.routes.js";

const router = Router();

router.use("/produtos", produtosRoutes);
router.use("/fornecedores", fornecedoresRoutes);
router.use("/clientes", clientesRoutes);

export { router };
