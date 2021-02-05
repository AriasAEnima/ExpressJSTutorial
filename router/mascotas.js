const express= require('express');
const router =   express.Router();
const Mascota = require('../models/mascota');
const MascotaData = require('../router/mascotasdata');

router.get('/', async (req,res)=> {

    try{
        const arrayMascotasDB = await Mascota.find();
        console.log(arrayMascotasDB); 
        res.render('mascotas',{
            arrayMascotasDB
        })
    }catch(error){
        console.log(error);
    }
    
})

router.get('/data', MascotaData)


module.exports= router;
