//seran las funciones que defini en mi routes/auth.js

//Esto linea es para que me muestre la ayuda y se lo coloco como valor por defecto a res
const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');
const { JsonWebTokenError } = require('jsonwebtoken');


const crearUsuario = async( req, res = response ) => {
    // console.log(req.body)
    /*const { name, email, password } = req.body;*/

    const { email, password } = req.body;


    try {
        let usuario = await Usuario.findOne({ email });

        if ( usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'Un usuario ya existe con ese correo'
            });
            
        }
        
      usuario = new Usuario( req.body );

      //Encriptar contraseña
      const salt = bcrypt.genSaltSync();
      usuario.password = bcrypt.hashSync( password, salt );
    
        await usuario.save();

        //Generar JWT
        const token = await generarJWT( usuario.id, usuario.name );
    
        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
        
    }
}

 const loginUsuario = async( req, res = response ) => {
       
    const { email, password } = req.body;

    try {

        const usuario = await Usuario.findOne({ email });

        if ( !usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe con ese email'
            });
            
        }
        //confirmar los passwords
        const validPassword = bcrypt.compareSync( password, usuario.password );
        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            });
        }

        //Estamos listos para generar JWT
        const token = await generarJWT( usuario.id, usuario.name );


        res.json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
        
    }
 }

 const revalidarToken = async(req, res = response) => {
    
    const uid = req.uid;
    const name = req.name;

    //Generar un nuevo JWT y retornarlo en esta peticion
    const token = await generarJWT(uid, name)
    

     res.json({
         ok: true,
         token
     })
 }





module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}