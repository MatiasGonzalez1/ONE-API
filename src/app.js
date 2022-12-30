//archivo de configuraciones de express

import express from "express";
import charactersRoutes from './routes/characters.routes.js';
import indexRoutes from './routes/index.routes.js'


const app = express();

app.use(express.json())

//Conexion a la db
app.use(indexRoutes)

//Rutas
app.use('/api',charactersRoutes)

app.use((req, res, next)=>{
  res.status(404).json({
    message: 'Endpoint Not found'
  })

})

export default app