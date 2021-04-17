const router = require('express').Router();
const validacionesUsuario = require('../middlewares/validacionesusuario');
const Usuario = require('./../models/Usuarios');


let usuariosRegistrados = [];

router.route('/')
    .get(async (req, res) => {
        const resultado = await Usuario.obtenerTodos();
        res.json(resultado);
    })
    .post(async (req, res) => {
        const {nombre, email, contrasena, telefono} = req.body;
        const result = await Usuario.crear(nombre, email, contrasena, telefono);
        console.log(result);
        res.json({
            status: '200',
            respuesta: 'Usuario Registrado exitosamente'
        });
    })
    .put(async (req, res) => {
        const { id } = req.query;
        const {nombre, email, contrasena, telefono} = req.body;
        const result = await Usuario.actualizar(id, nombre, email, contrasena, telefono);
        console.log(result);
        res.json({
            status: '200',
            respuesta: 'Usuario modificado exitosamente'
        });
    })
    .delete(async (req, res) => {
        const { id } = req.query;
        await Usuario.borrar(id)
        res.json('Usuario eliminado') 
    });
module.exports = router;