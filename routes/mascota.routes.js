const { Router } = require('express');
const { check } = require('express-validator');

const { mascotasPost } = require('../controllers/mascota.controller');
const {existenteMascota} = require('../helpers/db-validators');

const router = Router();



router.post(
    "/",
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("edad", "La edad es campo obligatorio").not().isEmpty(),
        check("raza", "La raza es un campo obligatorio").not().isEmpty(),
        check("sexo", "El sexo es un campo obligatorio").not().isEmpty(),
        check("peso"),
        check("fechaRescate", "La fecha es un campo obligatorio").not().isEmpty(),
        check("tamaño", "El tamaño es un campo obligatorio").not().isEmpty(),
    ],mascotasPost);

module.exports = router;