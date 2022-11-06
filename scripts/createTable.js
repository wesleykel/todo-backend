import pool from "../db/connections.js"


  
 const newTable = async ()=>{
      
        const query =`CREATE TABLE IF NOT EXISTS todo(
            id INT GENERATED ALWAYS AS IDENTITY,
           todo varchar(255));`

await pool.connect();

try{
 pool.query(query)
console.log("done")
}finally{
   // await pool.end()
}
    };


       newTable().then(()=> console.table("new table created"))
    .catch(error =>console.error(error.stack))
    export default newTable