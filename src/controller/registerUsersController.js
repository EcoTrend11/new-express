const conn = require('../../db')
const serviceUser = require ('../service/registerUsuarioService')
const jwt = require('../../helper/jwt')
const registerUserController = {
    registarUsuario : async (req, res, next)=>{
        try{
            const data = req.body
            //console.log(conn)
            const existe = await serviceUser.validarExistente(conn, data)
            if(existe.contador == 0){
                await serviceUser.registarNuevoUsuario(conn ,data)
                return res.status(200).json({
                    message :"usuario creado con exito",
                    status : "200",
                    data : null
                })
            }else{
                return res.status(403).json({
                    message : "usuario ya registrado",
                    status : "403",
                    data : null
                })
            }
        }catch(error){
            next(error)
        }
    },
    loggin : async (req,res,next)=>{
        try{
            const data = req.body
            const loggin  = await serviceUser.loggina(conn , data)
            if(loggin){
                const tokenSecion = await jwt.serializer(loggin)
                return res.status(200).json({
                    message :"sesion iniciada con exito",
                    status :"200",
                    data : tokenSecion
                })
            }else{
                return res.status(401).json({
                    message : "correo o contraseña invalida",
                    status : "401",
                    data : null
                })
            }
        }
        catch(err){
            next(err);
        }
    }
}

module.exports = registerUserController