const { Router } = require("express");
const { check } = require("express-validator");
const {
  consultarCanciones,
  insertarCanciones,
  actualizarCancion,
  eliminarCancion,
} = require("../controllers/canciones.controllers");
const {
  cancionUnica,
  existeCancion,
} = require("../middlewares/validacionesdb");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

router.get("/consultar", consultarCanciones);

router.post(
  "/insertar",
  [
    check("artista", "El artista es obligatorio").not().isEmpty(),
    check("nombre_cancion", "El nombre de la cancion es obligatorio")
      .not()
      .isEmpty(),
    check("duracion", "El artista es obligatorio").not().isEmpty(),
    check("album", "El artista es obligatorio").not().isEmpty(),
    cancionUnica,
    validarCampos,
  ],
  insertarCanciones
);

router.put(
  "/actualizar/:id",
  [check("id").custom(existeCancion), validarCampos],
  actualizarCancion
);
router.delete(
  "/eliminar/:id",
  [check("id").custom(existeCancion), validarCampos],
  eliminarCancion
);

module.exports = router;
