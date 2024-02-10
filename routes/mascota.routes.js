const { Router } = require('express');
const { check } = require('express-validator');

const { mascotasPost, mascotaGet, getMascotaById, mascotaPut } = require('../controllers/mascota.controller');
const { existeMascotaById } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get("/", mascotaGet);

router.get(
    "/:id",
    [
        check("id", "El id no es un formato valido de MongoDB").isMongoId(),
        check("id").custom(existeMascotaById),
        validarCampos
    ], getMascotaById);

router.put(
    "/:id",
    [
        check("id", "El id no es un formato valido de MongoDB").isMongoId(),
        check("id").custom(existeMascotaById),
        validarCampos
    ], mascotaPut);


router.post(
    "/",
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("edad", "La edad es campo obligatorio").not().isEmpty(),
        check("raza", "La raza es un campo obligatorio").not().isEmpty(),
        check("sexo", "El sexo es un campo obligatorio").not().isEmpty()
    ], mascotasPost);

module.exports = router;