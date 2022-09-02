import { Router } from "express";

import { produtosRoutes } from "./produtos.routes";
import { fornecedoresRoutes } from "./fornecedores.routes";
import { clientesRoutes } from "./clientes.routes";

const router = Router();

router.use("/produtos", produtosRoutes);
router.use("/fornecedores", fornecedoresRoutes);
router.use("/clientes", clientesRoutes);

export { router };
