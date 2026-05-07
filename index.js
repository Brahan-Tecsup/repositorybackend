const http = require('http');
require('dotenv').config();

const requestController = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Mi App en Render</title>
            <style>
                body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f0f2f5; }
                .container { text-align: center; padding: 50px; background: white; border-radius: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
                h1 { color: #007bff; }
                p { color: #555; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🚀 ¡Frontend Desplegado!</h1>
                <p>Mi aplicación de Node.js está funcionando correctamente en Render.</p>
                <p><strong>Estado:</strong> Online</p>
            </div>
        </body>
        </html>
    `);
};

const server = http.createServer(requestController);
const PORT = process.env.PORT || 4000;

// Escuchar en 0.0.0.0 es clave para que Render lo detecte rápido
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});