const { Response } = require('express');

const usuariosGet = (req, res = Response) => {
    //const query = req.query;
    const {q, nombre = 'Sin nombre', edad, pagina = '1', limite = '10'} = req.query;
    res.json({
        mensaje: 'mensaje API controlador get',
        q,
        nombre,
        edad,
        pagina,
        limite
    });
}

const usuariosPost = (req, res = Response) => {
    //const body = req.body;
    const {nombre, edad, direccion} = req.body;
    res.json({
        id: 1,
        mensaje: 'mensaje API controlador post',
        nombre,
        edad,
        direccion
    });
}

const usuariosPut = (req, res = Response) => {
    const id = req.params.id;
    if (id) {
        res.json({
            mensaje: 'mensaje API controlador put',
            id
        });
    }
}

const usuariosPut400 = (req, res = Response) => {
    res.status(400).json({
        mensaje: 'Petición invalida'
    });
}

const usuariosDelete = (req, res = Response) => {
    res.json({
        id: 1,
        mensaje: 'mensaje API controlador delete'
    });
}

const usuariosPatch = (req, res = Response) => {
    res.json({
        id: 1,
        mensaje: 'mensaje API controlador patch'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch,
    usuariosPut400
}