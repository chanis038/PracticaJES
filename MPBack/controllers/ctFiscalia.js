var Fs = require('../models/mdFiscalia').Fisca;


// recuperar todas las fiscalias
exports.findAllFiscalias = async (req, res) => {
  const fiscalias = await Fs.find();  
  res.jsonp(fiscalias);
};



//recuperar una fiscalia por id
exports.findFiscalia = (req, res) => {
	const id = req.params.id
	Fs.findById(id, (err, user) => {
		if (err) return res.status(500).jsonp({response: err.message})

		res.status(200).jsonp(user)
	})
}



//agregar una fiscalia
exports.addFiscalia = (req, res) => {
 nFiscalia= new Fs();
 nFiscalia.descripcion = req.body.descripcion;
 nFiscalia.direccion= req.body.direccion;
 nFiscalia.telefono=  req.body.telefono;
 
 nFiscalia.save((err, f) => {
    if (err) return res.status(500).jsonp({response: err.message})
    
    res.status(200).jsonp({response: 'Fiscalia creada con exito'})
    })
	  
  };



// actualizar una fiscalia
  exports.updateFiscalia = (req, res) => {
    const id = req.body.id
    
    Fs.findById(id, (err, fiscalia) => {
    		if (!fiscalia) return res.status(404).jsonp({response: 'Id de fiscalia no existe'})

			fiscalia.descripcion = req.body.descripcion;
			fiscalia.direccion= req.body.direccion;
			fiscalia.telefono=  req.body.telefono;

		fiscalia.save((err) => {
        	if (err)  return res.status(500).jsonp({response: err.message})
      		
			res.status(200).jsonp({response: 'Fiscalia Actualizada'})

        })

    })
}



//eliminar una fiscalia
exports.deleteFiscalia = (req, res) => {
    const id = req.params.id

    Fs.findById(id, (err, fiscalia) => {

    		if (!fiscalia) return res.status(404).jsonp({response: 'Id de fiscalia no existe'})

		fiscalia.remove( (err) => {
        	if (err) return res.status(500).jsonp({response: err.message})
      		
      		res.status(200).jsonp({response: 'Fiscalia borrada '})
        })
    })
}