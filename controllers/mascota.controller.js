const { response } = require('express');
const bcryptjs = require('bcryptjs');
const Mascota = require('../models/mascota');

const mascotaGet = async (req, res = response) => {
    const { limite, desde } = req.query;
    const query = { estado: true };

    const [total, mascotas] = await Promise.all([
        Mascota.countDocuments(query),
        Mascota.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);

    res.status(200).json({
        total,
        mascotas
    });
}

const getMascotaById = async(req, res) =>{
    const {id} = req.params;
    const mascota = await Mascota.findOne({_id: id});

    res.status(200).json({
        mascota
    });
}

const mascotasPost = async (req, res) => {
    const { nombre, edad, raza, sexo} = req.body;
    const mascota = new Mascota({ nombre, edad, raza, sexo});

    await mascota.save();
    res.status(200).json({
        mascota
    });
}


module.exports = {
    mascotasPost,
    mascotaGet,
    getMascotaById
}