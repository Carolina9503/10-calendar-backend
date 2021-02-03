const { response } = require('express');
const Evento = require('../models/Evento');


const obtenerEventos = async( req, res = response ) => {

    const eventos = await Evento.find()
                                .populate('user', 'name');


    res.json({
        ok: true,
        eventos
    })
}

const crearEvento = async( req, res = response ) => {
    //verificar que tenga el evento
    // console.log( req.body );
    const evento = new Evento( req.body );

    try {
      
        evento.user = req.uid;

        const eventoGuardado = await evento.save()
        
        res.json({
            ok: true,
            evento: eventoGuardado
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el  administrador'
        })
    }
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