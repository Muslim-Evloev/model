const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())

const PORT = 3000;



// подключение к БД (MongoDB)

mongoose.connect("mongodb://localhost:27017/students").then(()=>{
    console.log("MongoDB Успешно подключен!");

    
}).catch((error)=>{
    console.log("Ошибка при подключении БД!" , error.message );
    process.exit(1)
});

app.post("/registration" , (req , res)=>{
const {name , age} =  req.body    
})

app.listen(PORT , ()=>{
    console.log("Сервер успешно запущен на порту: " + PORT);
    
})