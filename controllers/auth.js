//seran las funciones que defini en mi routes/auth.js

//Esto linea es para que me muestre la ayuda y se lo coloco como valor por defecto a res
const { response } = require('express');


const crearUsuario = ( req, res = response ) => {
    res.json({
        ok: true,
        msg: 'registro'
    })

}

 const loginUsuario = ( req, res = response ) => {
    res.json({
        ok: true,
        msg: 'login'
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