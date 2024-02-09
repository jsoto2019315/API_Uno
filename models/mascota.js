const {Schema , model } = require('mongoose');

const mascotaSchema = Schema ({
    nombre: {
        type: String,
        required: [true, 'El nombre de la mascota es obligatorio']
    },
    edad: {
        type: String,
        required: [true, 'La edad de la mascota es obligatoria']
    },
    raza: {
        type: String,
        required: [true, 'La raza de la mascota es obligatoria'],
    },
    sexo:{
        type: String,
        required: [true, 'El sexo de la mascota es obligatorio'],
    }
});

module.exports = model('Mascota', mascotaSchema);