import {Router} from 'express';

const router = Router()

router.get('/characters', (req, res)=> res.send('Obteniendo personajes'))

router.post('/characters', (req, res)=> res.send('Creando personajes'))

router.put('/characters', (req, res)=> res.send('Actualizando personajes'))

router.delete('/characters', (req, res)=> res.send('Eliminando personajes'))

export default router;