const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();

app.use(express.json());

//to get todos 
app.get("/todo", (req, res)=>{

})

//to create a todo
app.post("/todo", createTodo,  (req, res)=>{

});

//to update a todo
app.put("/completed", updateTodo, (req, res)=>{

})