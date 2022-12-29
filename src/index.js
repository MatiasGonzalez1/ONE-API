import express from "express";
import charactersRoutes from './routes/characters.routes.js';
import indexRoutes from './routes/index.routes.js'

const app = express();

app.use(express.json())

//Conexion a la db
app.use(indexRoutes)

//Rutas
app.use('/api',charactersRoutes)

app.listen(3000)

console.log('Server running on port 3000')