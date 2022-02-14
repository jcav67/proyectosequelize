const { request, response } = require("express");
const capitalizar = require("../helper/capitalizar_palabras");
const Song = require("../models/cancion");

const cancionUnica = async (req = request, res = response, next) => {
  let { artista, nombre_cancion, album } = req.body;
  artista = capitalizar(artista);
  nombre_cancion = capitalizar(nombre_cancion);
  album = capitalizar(album);

  const existeCancion = await Song.findOne({
    where: {
      artista,
      nombre_cancion,
      album,
    },
  });
  if (existeCancion) {
    return res.status(401).json({
      msg: "La cancion ya existe en la base de datos",
    });
  }
  next();
};

const existeCancion = async (id='')=>{
  console.log(id)
  const song=await Song.findByPk(id);
  console.log(song)
  if(!song){
    throw new Error('cancion con el id suminitrado no existe') 
  }
}

module.exports = {
  cancionUnica,
  existeCancion
};
