import { Router } from "express";
import { methodHTTP as  categoriaController } from "../controllers/categorias.controllers.js";

/*creamos el enrutador*/
const router = Router();

/*xonfiguramos respuesta desde server metodo http get*/
router.get("/", categoriaController.getCategorias);

/*hacemos disponible el enrutador en toda la app*/
export default router;