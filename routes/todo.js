import express from "express";

const router = express()
router.get('/', (req, res) => {
    res.send('Hello World from router!')
  })



  export default router 