const { request, response } = require("express");
const capitalizar = require("../helper/capitalizar_palabras");
const Song = require("../models/cancion");

const consultarCanciones = async(req, res = response) => {
  try {
    const { limite = 10, desde = 0 } = req.query;

    const {rows,count}= await Song.findAndCountAll({limit:Number(limite),offset:Number(desde)});
    res.json({
      rows,
      msg: `la base de datos cuenta con un total de ${count} canciones`
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Error al consultar la base de datos",
    });
  }
};

const insertarCanciones = async (req = request, res = response) => {
  let { artista, nombre_cancion, duracion, album } = req.body;
  artista = capitalizar(artista);
  nombre_cancion = capitalizar(nombre_cancion);
  album = capitalizar(album);
  duracion = capitalizar(duracion);

  try {
    const song = new Song({ artista, nombre_cancion, duracion, album });
    await song.save();
    res.json({
      msg: "Cancion agregada con exito",
      song,
    });

  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Error al guardar la cancion en la base de datos",
    });
  }
};

const actualizarCancion=async(req=request,res)=>{
  const {id}=req.params;
  const { artista, nombre_cancion, duracion, album }=req.body;
  try {
    
    if(artista.length!=0){
      artista=song.artista;
    }
    if(nombre_cancion.length==0){
      nombre_cancion=song.nombre_cancion;
    }
    if(duracion.length==0){
      duracion=song.duracion;
    }
    if(album.length==0){
      album=song.album;
    }
    const cancionModificada = await Song.update({artista,nombre_cancion,duracion,album}, {
      where: {
        id
      }
    });
    console.log(cancionModificada)
    if(cancionModificada[0]>0){
      
      res.json({
        msg: "cancion modificada con los datos suministrados",
        artista,
        nombre_cancion,
        duracion,
        album
      });
    }
    else{
      res.status(401).json({
        msg: "Error al guardar la cancion en la base de datos",
      });
      
    }

  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Error al guardar la cancion en la base de datos",
    });
  }
}

const eliminarCancion=async (req=request,res=response)=>{
  const {id}=req.params;
  try {
    const song=await Song.findByPk(id);

    await song.destroy();
    res.json({
      msg: "cancion eliminada con exito",
      song
    });
    
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Error al eliminar la cancion en la base de datos",
    });
  }

}

module.exports = {
  consultarCanciones,
  insertarCanciones,
  actualizarCancion,
  eliminarCancion
  
};
