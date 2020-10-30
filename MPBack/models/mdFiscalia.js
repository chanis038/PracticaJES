
const mongoose = require('../db'),
  SchemaF = require('../db/schemas/schFiscalia').Fiscalia;

const models = {

Fisca: mongoose.model('Fiscalia', SchemaF)

};

module.exports = models;
