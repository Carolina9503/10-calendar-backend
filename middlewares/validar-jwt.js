const { response } = require('express');
const jwt = require('jsonwebtoken');


const validarJWT = ( req, res = response, next ) => {
    //??como voy a recibir el JWT x-token headers
    const token = req.header('x-token');
    // console.log(token);

    if ( !token ) {
        res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    try {

        const { uid, name } = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        );

        req.uid = uid;
        req.name = name;

        // console.log(payload) = {uid, name}
        
    } catch (error) {
        return res.status(401).json({
            OK: false,
            msg: 'Token no valido'
        });
        
    }



    next();


}


module.exports = {
    validarJWT
}
