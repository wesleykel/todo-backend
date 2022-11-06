import express, { response } from "express";
import { createTodo ,getTodo,getTodoById,deleteTodo ,updateTodo } from "../models/todo_model.js";

const router = express()
router.get('/', (req, res) => {
    getTodo()
    .then(response=>{

        res.status(200).json(response)
    }) .catch(error => {
        res.status(500).send(error);
      })
    
  })
  .get('/:id', (req, res) => {
      let id = req.params.id
    getTodoById(id)
    .then(response=>{

        res.status(200).send(response)
    }) .catch(error => {
        res.status(500).send(error);
      })
    
  })
  .post('/', (req, res) => {
    let newTodo =req.body;
    createTodo(newTodo)
    .then(response =>{
        res.status(200).send(response)
    
    })
    .catch(error => {
        res.status(500).send(error);
      })
    
  })
.put('/:id', (req, res) => {
    let id = req.params.id;
    let todoUpdate = req.body.todo;
    updateTodo(id, todoUpdate)
    .then(response =>{
        res.status(200).send(response)
    
    })
    .catch(error => {
        res.status(500).send(error);
      })
   
  })
  .delete('/:id', (req, res) => {
   let id = req.params.id
    deleteTodo(id)
    .then(response =>{
        res.status(200).send(response)
    
    })
    .catch(error => {
        res.status(500).send(error);
      })
   
  })
  export default router 

  