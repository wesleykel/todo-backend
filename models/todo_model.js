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

export const getTodoById =(id)=>{

    return new Promise(function (resolve,reject){
    
    
    pool.query(`SELECT * FROM todo WHERE id = ${id}`,(error, results)=>{
    
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

        

export const deleteTodo = (id)=>{

return new Promise(function (resolve, reject){
        
pool.query(`DELETE FROM todo WHERE id ='${id}'`, (error, results)=>{
        
if(error){
 reject(error)
 }
        
resolve(`user ${id} deleted from ${results}`)
        
        
        
        
})
        
        
        
})
}
   
export const updateTodo = (id, body)=>{

    return new Promise(function (resolve, reject){
            
    pool.query(`UPDATE todo SET todo ='${body}' WHERE id ='${id}'`, (error, results)=>{
            
    if(error){
     reject(error)
     }
            
    resolve(`user ${id} updated`)
            
            
            
            
    })
            
            
            
    })
    }
       