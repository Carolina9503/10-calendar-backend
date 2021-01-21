//seran las funciones que defini en mi routes/auth.js

//Esto linea es para que me muestre la ayuda y se lo coloco como valor por defecto a res
const { response } = require('express');
const { validationResult } = require('express-validator');


const crearUsuario = ( req, res = response ) => {
    // console.log(req.body)

    const { name, email, password } = req.body;


    //Manejo de errores
    const errors = validationResult( req )
    // console.log( errors );       
    if ( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });        
    }

    res.status(201).json({
        ok: true,
        msg: 'registro',
        name,
        email,
        password
    })

}

 const loginUsuario = ( req, res = response ) => {
    
     
     //manejo de errores
     const errors = validationResult( req );
     if ( !errors.isEmpty() ) {
         return res.json({
             ok: false,
             errors: errors.mapped()
            });        
        }
        
    const { email, password } = req.body;

    res.status(201).json({
        ok: true,
        msg: 'login',
        email,
        password
    })
 }

 const revalidarToken = (req, res = response) => {
     res.json({
         ok: true,
         msg: 'renew'
     })
 }





module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}