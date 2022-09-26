var jwt = require('jsonwebtoken');
const secret = "password"
const jwtHelper = {
    serializer : async (obj)=>{
        try{
            const token = await 
            jwt.sign({
              data: obj
            }, secret, { expiresIn: '1h' });
            return token
        }catch(error){
            throw error
        }
    },
    deserializar : (token)=>{
        try{
            const data = jwt.verify(token, secret, function (error, decoded) {
                if (error) {
                    console.log("error token:" + error)
                    throw error;
                }
                var data =  decoded.data      
                return data;
            });
            return data
        }catch(error){
            throw error
        }
    },
    solo :  ()=>{
        return "valores"
    }
}

module.exports = jwtHelper