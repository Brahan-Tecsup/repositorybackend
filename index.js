require('dotenv').config();
const http= require('http');

function requestController(req, res){
    console.log('Bienvenido al curso')
}

const server=http.createServer(requestController)

const PORT= process.env.PORT

server.listen(PORT,'0.0.0.0', function(){
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})