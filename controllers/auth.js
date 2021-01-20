//seran las funciones que defini en mi routes/auth.js

//Esto linea es para que me muestre la ayuda y se lo coloco como valor por defecto a res
const { response } = require('express');


const crearUsuario = ( req, res = response ) => {
    // console.log(req.body)

    const { name, email, password } = req.body;

    if ( name.length < 5 ) {
        return res.status(400).json({
            ok: false,
            msg: 'El nombre debe ser mayor a 5 letras'
        })        
    }

    res.json({
        ok: true,
        msg: 'registro',
        name,
        email,
        password
    })

}

 const loginUsuario = ( req, res = response ) => {
    
    const { email, password } = req.body
    res.json({
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