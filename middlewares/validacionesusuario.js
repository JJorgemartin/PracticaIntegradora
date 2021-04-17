let validarUsuario = (req, res, next) => {
    console.log(req.body);
    let usuario = req.body;
    if(!usuario.nombre || !usuario.email || !usuario.password) {
        res.json({
            status: '500',
            respuesta: 'Usuario debe tener un nombre, email y password valido'
        })
    }else {
        next();
    }
};

let validarUsuarioExiste = (req, res, next) => {
    let usuario = usuariosRegistrados.find( u => u.email === req.body.email);
    if(usuario) {
        res.json('El usuario existe en el sistema');
    } else {
        next();
    }  
};



module.exports = {validarUsuario, validarUsuarioExiste};