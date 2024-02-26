const { header } = require("express-validator")
const Usuario = require('../models/usuario')


const validarJWT = async(req, res, next) =>{
    const token  = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            msg:'No hay token'
        })
    }

    try {
        const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        
        const usuario = await Usuario.findOne(uid);

        if (!usuario) {
            return res.status(400).json({
                msg:'No existe'
            })
        }

        if(!usuario.estado){
            return res.estado(400).json({
                msg:'Token valido, usuario con estado false'
            })
        }
        req.usuario = usuario;
        next();
    } catch (e) {
        console.log(e);
        res.status(401).json({
            msg:'Token no valido'
        })
    }

}

module.export={
    validarJWT,
}