const express= require('express');
const router =   express.Router();


router.get('/', (req,res)=> {
    res.render('mascotas',{
        arrayMascotas: [
            {id:1 , nombre: "perro", tamano: "mediano"},
            {id: 2, nombre: "gato", tamano: "pequeño"}
        ]
    })
})

module.exports= router;
