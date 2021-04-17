const sequelize = require('./../conexion');

const Usuario = {};

Usuario.crear = async (nombre, email, contrasena, telefono) => {
    try{
        const result = await sequelize.query('INSERT INTO usuarios (nombre, email, contrasena, telefono) VALUES ( ?,?,?,?)', {
        replacements: [nombre, email,contrasena, telefono]
    }); 
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
};

Usuario.obtenerTodos = async () => {
    const result = await sequelize.query('SELECT id, nombre, email, telefono FROM usuarios', 
        { type: sequelize.QueryTypes.SELECT });
    console.log(result);
    return result;
};

Usuario.actualizar = async (id, nombre, email, telefono) => {
    try{
        const result = await sequelize.query('UPDATE usuarios SET nombre = ?, email = ?, contrasena = ?, telefono = ? WHERE id = ?', {
        replacements: [nombre, email, telefono, id]
    }); 
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}

Usuario.borrar = async (id) => {
    const result = await sequelize.query('DELETE FROM usuarios WHERE id = ?', {replacements: [id]
    });
    return result;
}

module.exports = Usuario;