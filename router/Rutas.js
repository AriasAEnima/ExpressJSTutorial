const express= require('express');
const router =   express.Router();



router.get('/servicios' ,(req,res)=> {
    res.render("servicios",{nombre: "Base de datos", descripcion: "Muestra los valores de una base de datos"})
})

module.exports= router;
