const Usuario = require('../models/usuario');
const Mascota = require('../models/mascota');

const existenteEmail = async (correo = '') => {
    const existeEmail = await Usuario.findOne({correo});
    if(existeEmail){
        throw new Error(`El email ${ correo } ya fue registrado`);
    }
}

const existeUsuarioById = async ( id = '') => {
    const existeUsuario = await Usuario.findOne({id});
    if(existeUsuario){
        throw new Error(`El usuario con el ${ id } no existe`);
    }
}

const existeMascotaById = async ( id = '') => {
    const existeMascota = await Mascota.findOne({id});
    if(existeMascota){
        throw new Error(`La mascota con el id ${id} no existe`);
    }
}

// const existenteMascota = async(nombre = '') => {
//     const existenteMascota = await Mascota.findOne({nombre});
//     if (existenteMascota) {
//         throw new Error(`La mascota ${nombre} ya existe`);
//     }
// }
module.exports = {
    existenteEmail,
    existeUsuarioById,
    existeMascotaById
    // existenteMascota
}