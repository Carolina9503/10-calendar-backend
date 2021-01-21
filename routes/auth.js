/*
Rutas de usuarios  / Auth
host + /api/auth
*/
const { Router } = require('express');
const { check } = require('express-validator'); //El check se encarga de validar un elemento en particular lo va a hacer uno a la ves
const router = Router();

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

router.post(
    '/new',
    [//middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El correo es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6}),
    ],
     crearUsuario 
);

router.post(
    '/', 
    [

        check('email', 'El correo es obligatorio').isEmail(),
        check('password', 'debe de ser minimo 6 caracteres').isLength({ min:6 })
    ],
    loginUsuario 
);

router.get('/renew', revalidarToken );


module.exports = router;    
