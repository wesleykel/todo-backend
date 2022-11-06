import express, { response } from "express";
import { createTodo ,getTodo } from "../models/todo_model.js";

const router = express()
router.get('/', (req, res) => {
    getTodo()
    .then(response=>{

        res.status(200).send(response)
    }) .catch(error => {
        res.status(500).send(error);
      })
    
  })
.post('/', (req, res) => {
    let newTodo =req.body
    createTodo(newTodo)
    .then(response =>{
        res.status(200).send(response)
    
    })
    .catch(error => {
        res.status(500).send(error);
      })
    
  })
.put('/', (req, res) => {
    res.send('PUT request to the homepage')
  })
  .delete('/', (req, res) => {
    res.send('DELETE request to the homepage')
  })
  export default router 

  