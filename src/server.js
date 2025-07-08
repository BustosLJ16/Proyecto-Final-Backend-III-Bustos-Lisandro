import app from './app.js';

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`);
    console.log(`Documentación en http://localhost:${PORT}/api-docs`);
});
