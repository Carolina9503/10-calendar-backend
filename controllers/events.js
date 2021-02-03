const { response } = require('express');


const obtenerEventos = ( req, res = response ) => {
    res.json({
        ok: true,
        msg: 'getEventos' 
    })
}

const crearEvento = ( req, res = response ) => {
    //verificar que tenga el evento
    console.log( req.body );

    res.json({
        ok: true,
        msg: 'crearEvento'

    })

}

const actualizarEvento = ( req, res = response ) => {
    res.json({
        ok: true,
        msg: 'actualizarEvento',
        // id: '1233'
    })

}

const eliminarEvento = (req, res = response ) => {
    res.json({
        ok: true,
        msg: 'eliminarEvento',
        // id: '1234567'
    })
}


module.exports = {
    obtenerEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}