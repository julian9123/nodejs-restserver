const { Router, Response} = require('express');
const {usuariosGet, usuariosPost, usuariosPut, usuariosDelete, usuariosPatch, usuariosPut400} = require("../controllers/usercontroller");

const router = Router();

router.get('/', usuariosGet);
router.post('/', usuariosPost);
router.put('/', usuariosPut400);
router.put('/:id', usuariosPut);
router.delete('/', usuariosDelete);
router.patch('/', usuariosPatch);

/* Sin controlador
router.get('/', (req, res = Response) => {
    /* Manejo del estado de la respuesta
    res.status(404).json({
        id: 1,
        mensaje: 'mensaje de prueba get API'
    });
    res.json({
        id: 1,
        mensaje: 'mensaje de prueba get API'
    });
});
router.post('/', (req, res) => {
    res.json({
        id: 1,
        mensaje: 'mensaje de prueba post API'
    });
});
router.put('/', (req, res) => {
    res.status(400).json({
        id: 1,
        mensaje: 'Petición invalida'
    });
});
router.put('/:id', (req, res) => {
    res.json({
        id: 1,
        mensaje: 'mensaje de prueba put API'
    });
});
router.delete('/', (req, res) => {
    res.json({
        id: 1,
        mensaje: 'mensaje de prueba delete API'
    });
});
router.patch('/', (req, res) => {
    res.json({
        id: 1,
        mensaje: 'mensaje de prueba patch API'
    });
});*/

module.exports = router;