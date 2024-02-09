const { Router } = require('express');
const { check } = require('express-validator');

const { mascotasPost, mascotaGet } = require('../controllers/mascota.controller');

const router = Router();

router.get("/", mascotaGet);

router.post(
    "/",
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("edad", "La edad es campo obligatorio").not().isEmpty(),
        check("raza", "La raza es un campo obligatorio").not().isEmpty(),
        check("sexo", "El sexo es un campo obligatorio").not().isEmpty()
        ],mascotasPost);

module.exports = router;