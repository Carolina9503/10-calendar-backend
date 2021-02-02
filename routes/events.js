//Aqui vamos a hacer la creacion de todo el crud(crear eliminar actualizar)
/*
    Event Routes
    /api/events
*/
const { Router } = require('express');
const router = Router();

const { obtenerEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar-jwt');


//Todas tienen que pasar por la validacion del JWT
router.use( validarJWT );

//Obtener eventos
router.get('/', obtenerEventos) 

//Crear un nuevo evento
router.post('/', crearEvento )

//Actualizar evento
router.put('/:id', actualizarEvento );

//Borrar evento
router.delete('/:id', eliminarEvento )

module.exports = router;