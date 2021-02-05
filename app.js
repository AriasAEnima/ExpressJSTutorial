const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';
const user = 'adminpets';
const password = 'mascotas';
const dbname ='AWSPrueba';
const uri = `mongodb+srv://${user}:${password}@uniwhellsback.vxj50.mongodb.net/${dbname}?retryWrites=true&w=majority`;


const mongoose = require('mongoose');
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).
then(()=> {console.log('Base de datos conectada')})
.catch(
    e => {console.log(e)}
)

app.use(express.static(__dirname+'/public'))

// motor plantillas

app.set('view engine','ejs');
app.set('views', __dirname+'/views');




app.use('/',require('./router/Rutas'));
app.use('/mascotas',require('./router/mascotas'));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);


app.use((req,res,next)=>{
    res.status(400).sendFile(__dirname+"/public/404.html")
})

module.exports=app;