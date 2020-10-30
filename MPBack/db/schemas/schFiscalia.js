const mongoose = require('../../db')
 Schema = mongoose.Schema


const schemas = {

   Fiscalia : new Schema({
        descripcion: { 
            type: String, 
            required: [true, 'descripcion requerida'], 
            trim: true 
        },
        direccion: { 
            type: String, 
            trim: true, 
            
        },
        telefono: { 
            type: Number, 
            required: true, 
            trim: true, 
            minlength: [8,'El Numero de telefono no es valido'],
        }
        }, 
        { timestamps: true } // automatically add createdAt and updatedAt fields to schema.
    )

};

module.exports = schemas;