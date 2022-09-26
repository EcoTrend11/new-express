const jwt = require("../../helper/jwt")
module.exports =  (req,res,next)=>{
    try{
        const access = req.headers['x-access-token']
        var validate =  jwt.deserializar(access)
        if(access.length != 0){
            next()
        }
        else{
            return res.status(200).json({
            message : "no autorizado",
            status : "403",
            data: null
            })
        }
    }catch(error){
        console.log(error)
        next(error)
    }
}