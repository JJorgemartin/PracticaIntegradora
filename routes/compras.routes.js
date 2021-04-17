const router = require('express').Router();
const Compras = require('./../models/Compras');

router.route('/')
    .post( async (req, res) => {
        const { usuario_id, paquete_id } = req.body;
        const result = await Compras.crear(usuario_id, paquete_id);
        res.json(result);
    });

module.exports = router;