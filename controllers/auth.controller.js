const { generarJWT } = require("../helpers/generar-jwt");
const Usuario = require("../models/usuario");
const bycriptjs = require("bcryptjs");

const login = async (req, res) =>{
    const {correo, password} = req.body;

    try {
        const usuario = await Usuario.findOne({correo});  
        if (!usuario) {
            return res.status(400).json({
                msg:'El correo no esta registrado'
            })
        }  

        //verificar si el usuario está activo
        if (!usuario.estado) {
            return res.status(400).json({
                msg:'El usuario no exixste en la base de datos'
            })
        }

        //verificar que la contraseña sea correcta
        const validPassword =bycriptjs.compareSync(password, usuario.password);
        if (!validPassword) {
            return res.status(400).json({
                msg:'Contraseña incorrecta'
            })
        }
        const token = await generarJWT(usuario.id);

        res.status(200).json({
            msg:'Login success',
            usuario,
            token
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            msg: 'Comuniquese con el admin'
        })
    }
}

module.exports = {
    login
}