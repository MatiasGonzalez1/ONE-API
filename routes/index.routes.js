import {Router} from 'express';
import { ping } from '../controllers/index.controller.js';

const router = Router();


//Se realiza la consulta a la db
router.get('/ping', ping);

export default router;

//al hacer export default en el archivo donde se requiere se puede poner cualquier nombre para hacer referencia