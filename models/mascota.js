const {Schema , model } = require('mongoose');

const mascotaSchema = Schema ({
    nombre: {
        type:String,
        require:[true, 'El nombre de la mascota es obligatorio']
    },
    edad: {
        type:Number,
        require:[true, 'La edad de la mascota es obligatoria']
    },
    raza: {
        type:String,
        require:[true, 'La raza de la mascota es obligatoria'],
    },
    sexo:{
        type: String,
        require:[true, 'El sexo de la mascota es obligatorio'],
    },
    peso:{
        type: String
    }, 
    fechaRescate:{
        type: Date,
        require:[true, 'La fecha de rescate de la mascota es obligatoria']
    },
    tamaño:{
        type: String,
        require:[true, 'El tamaño de la mascota es obligatoria']
    }
});

module.exports = model('Mascota', mascotaSchema);