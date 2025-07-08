import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js/mocks.routes.js';
import swagger from './docs/swagger.js';

// Configuracion de MongoDb
mongoose.set("strictQuery", false);
const app = express();
const PORT = process.env.PORT || 8080;
const connection = mongoose.connect(`mongodb://localhost:27017/adoptme`)
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error en la conexión a MongoDB:', err));

// Configuración de la App
app.use(express.json());
app.use(cookieParser());

// Rutas de la App
app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/mocks', mocksRouter)

// Documentación
app.use('/api-docs', swagger.serve, swagger.setup);
;

export default app;