const registerUsuarioService ={
    validarExistente : async (con, payload) =>{
        try{
            const {email , password} = payload
            let sql = `
            select count(*) contador 
            from users
            where password = '${password}'
            and email = '${email}'
            limit 1
            `
            return new Promise((resolve, reject)=>{
                con.query(sql, (err, result)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve(result.rows[0])
                    }
                })
            })

        }catch(error){
            throw error
        }
    },
    registarNuevoUsuario : async (con , payload)=>{
        try{
            const {email, password , name} = payload 
            let sql =`
            insert into users 
            (
                name,
                email,
                password
            )
            values
            (
                '${name}',
                '${email}',
                '${password}'
            );`
            return new Promise((resolve, reject)=>{
                con.query(sql, (err, result)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve(result)
                    }
                })
            })
        }catch(err){
            throw err
        }
    },
    loggina : async (con, payload) =>{
        try{
            const {email , password} = payload
            let sql = `
            select id
            from users
            where email = '${email}'
            and password = '${password}'
            limit 1;`
            return new Promise((resolve, reject)=>{
                con.query(sql, (err, result)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve(result.rows[0])
                    }
                })
            })
        }
        catch(error){
            throw error
        }
    }
}
module.exports = registerUsuarioService