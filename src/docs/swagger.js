// src/docs/swagger.js
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Usuarios',
      version: '1.0.0',
      description: 'Documentación de la API para la gestión de usuarios',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Cambiá si usás otro puerto
      },
    ],
  },
  apis: ['./src/routes/users.router.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default {
  serve: swaggerUi.serve,
  setup: swaggerUi.setup(swaggerSpec),
};
