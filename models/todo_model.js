import pool from "../db/connections.js"








/*const createUser = (body)=>{

    return new Promise(function (resolve, reject){
    
        const { firstname , surname , email, password , age , birth_date} = body
    
        pool.query('INSERT INTO  users (firstname, surname, email, password, age, birth_date) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *',[firstname,surname, email, password, age, birth_date],(error, results)=>{
    
    
            if(error){
                reject(error)
            }
        
            resolve(`a new user has been added: ${results}`)
        })
        
          }) 
        }*/