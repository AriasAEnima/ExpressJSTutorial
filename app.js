const express = require('express');
const app = express();

const port = 3000;

app.use(express.static(__dirname+'/public'))

// motor plantillas

app.set('view engine','ejs');
app.set('views', __dirname+'/views');

app.get('/' ,(req,res)=> {
    res.render("index",{nombre: "Julian Arias"})
})

app.get('/servicios' ,(req,res)=> {
    res.render("servicios",{nombre: "Base de datos", descripcion: "Muestra los valores de una base de datos"})
})


//app.get('/',(req,res)=>{ res.send("Hello Word")})

app.listen(port,()=>{console.log('En espera')})

app.use((req,res,next)=>{
    res.status(400).sendFile(__dirname+"/public/404.html")
})