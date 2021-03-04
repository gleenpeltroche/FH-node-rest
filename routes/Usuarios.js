const { Router } = require('express');
const { 
    usuariosGet, 
    usuariosPut, 
    usuariosPost, 
    usuariosDelete, 
    usuariosPatch } = require('../controllers/usuarios');

const router = Router();

router.app.get('/', usuariosGet);
router.app.put('/:id', usuariosPut);
router.app.post('/', usuariosPost);
router.app.delete('/', usuariosDelete);
router.app.patch('/', usuariosPatch);

module.exports = router;