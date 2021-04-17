const sequelize = require('./../conexion');

const Compras = {};

Compras.crear = async (usuario_id, paquete_id, fecha_compra) => {
    try{
        const fecha = Date();
        const result = await sequelize.query('INSERT INTO compras (usuario_id, paquete_id, fecha_compra) VALUES (?,?,?)', {
        replacements: [usuario_id, paquete_id, fecha_compra]
    }); 
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}

module.exports = Compras;