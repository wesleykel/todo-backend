import pool from "../db/connections.js"


export const getTodo =()=>{

return new Promise(function (resolve,reject){


pool.query('SELECT * FROM todo',(error, results)=>{

    if(error){
        reject(error)
    }

    resolve(results.rows)




})


})




}




export const createTodo = (body)=>{

    return new Promise(function (resolve, reject){
    
        const {todo} = body
    
        pool.query('INSERT INTO todo (todo) VALUES ($1) RETURNING *',[todo],(error, results)=>{
    
    
            if(error){
                reject(error)
            }
        
            resolve(`a new user has been added: ${results}`)
        })
        
          }) 
        }


   