import {Router} from 'express';

import {getCharacters, deleteCharacters,postCharacters, putCharacters} from '../controllers/characters.controller.js'

const router = Router()

router.get('/characters', getCharacters)

router.post('/characters', postCharacters)

router.put('/characters', putCharacters)

router.delete('/characters', deleteCharacters)

export default router;