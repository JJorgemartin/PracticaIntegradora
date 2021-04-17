const express = require('express');
const server = express();

const validacionesUsuario = require('./middlewares/validacionesusuario')

server.use(express.static('public'));
server.use(express.json());

let usuariosRegistrados = [];

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});

server.use('/usuarios', require('./routes/usuarios.routes'));
server.use('/paquetes', require('./routes/paquetes.routes'));
server.use('/compras', require('./routes/compras.routes'));


server.post('/login', (req, res) => {
    const usuario = usuariosRegistrados.find(u => u.email === req.body.email && u.password === req.body.password)
    if(usuario) {
        res.json('Usuario logueado');
    } else {
        res.status(401).send('Usuario y/o contraseña invalido');
    }
});


