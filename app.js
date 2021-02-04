const express = require('express');
const app = express();

const port = 3000;

app.use(express.static(__dirname+'/public'))

// motor plantillas

app.set('view engine','ejs');
app.set('views', __dirname+'/views');



app.get('/',(req,res)=>{ res.send("Hello Word")})

app.use('/api',require('./router/Rutas'));
app.use('/api',require('./router/mascotas'));



app.use((req,res,next)=>{
    res.status(400).sendFile(__dirname+"/public/404.html")
})


app.listen(port,()=>{console.log('En espera')})