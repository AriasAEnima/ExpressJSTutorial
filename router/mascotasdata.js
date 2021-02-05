const Mascota = require('../models/mascota');

async function getMascotadata(req,res){

    try{
        const arrayMascotasDB = await Mascota.find();
        
        res.send(arrayMascotasDB);
    }catch(error){
        console.log(error);
    } 
}

module.exports= getMascotadata;