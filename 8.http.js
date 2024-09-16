// Vamos a crear un servidor unicamente con node gracias a la dependencia nativa http, para recibir y devolver peticiones
const http = require('node:http')

const server = http.createServer((req, res) => {
    console.log('request recived');
    res.end('Hola mundo')
})

server.listen(8000, () => {
    console.log('server listening on port 3000');
})