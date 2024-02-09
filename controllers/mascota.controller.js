const {response} = require('express');
const Mascota = require('../models/mascota');

const mascotasPost = async (req, res) => {
    const { nombre, edad, raza, sexo} = req.body;
    const mascota = new Mascota({ nombre, edad, raza, sexo});

    await mascota.save();
    res.status(200).json({
        mascota
    });
}


module.exports = {
    mascotasPost
}