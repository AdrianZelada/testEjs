import sequelizeHandlers from "sequelize-handlers";
// var xlstojson = require("xls-to-json-lc");
// var xlsxtojson = require("xlsx-to-json-lc");

module.exports = app => {
  const catalogo = app.src.db.models.catalogo;
  app.route('/api/v1/catalogos')
    // Descomentar la siguiente linea para implementar autenticacion JWT
    //.all(app.auth.authenticate())
    /**
    * @api {post} /api/v1/catalogos Crea catalogo
    * @apiVersion 0.1.0
    * @apiName Postcatalogo
    * @apiGroup catalogo
    *
    * @apiSuccess {Number} code  Código 0 conforme todo ha ido bien.
    * @apiSuccess {Nuumber} catalogoId   Id catalogo registrado.
    *
    * @apiSuccessExample Success-Response:
    *     HTTP/1.1 200 OK
    *     {
    *        "code": 0,
    *        "response": catalogoId
    *     }
    *
    * @apiError catalogoBadResponse: catalogo no ha podido crearse
    *
    * @apiError BaD-Response:
    *     HTTP/1.1 400 Bad Response
    *     {
    *       "error": "BadResponse"
    *     }
    */
    .post(sequelizeHandlers.create(catalogo))
    /**
    * @api {get} /api/v1/catalogos Obtiene la información de catalogo
    * @apiVersion 0.1.0
    * @apiName Getcatalogo
    * @apiGroup catalogo
    *
    *
    * @apiSuccess {Number} code  Código 0 conforme todo ha ido bien.
    * @apiSuccess {Bool} true/false  True o false dependiendo del resultado.
    *
    * @apiSuccessExample Success-Response:
    *     HTTP/1.1 200 OK
    *     {
    *       "code": 0,
    *       "response": true
    *     }
    *
    * @apiError catalogoNotFound datos de  catalogo no fueron encontrados.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 404 Not Found
    *     {
    *       "error": "catalogoNotFound"
    *     }
    */
    .get(sequelizeHandlers.query(catalogo));
  app.route('/api/v1/catalogos/:id')
    // Descomentar la siguiente linea para implementar autenticacion JWT
    //.all(app.auth.authenticate())
    /**
    * @api {get} /api/v1/catalogos/:id Obtiene la información de catalogo
    * @apiVersion 0.1.0
    * @apiName Getcatalogo
    * @apiGroup catalogo
    *
    * @apiParam {Number} id catalogo unique ID.
    *
    * @apiSuccess {Number} code  Código 0 conforme todo ha ido bien.
    * @apiSuccess {Bool} true/false  True o false dependiendo del resultado.
    *
    * @apiSuccessExample Success-Response:
    *     HTTP/1.1 200 OK
    *     {
    *       "code": 0,
    *       "response": true
    *     }
    *
    * @apiError catalogoNotFound Id de catalogo no fue encontrado.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 404 Not Found
    *     {
    *       "error": "catalogoNotFound"
    *     }
    */
    .get(sequelizeHandlers.get(catalogo))
    /**
    * @api {delete} /api/v1/catalogos/:id Elimina catalogo
    * @apiVersion 0.1.0
    * @apiName Deletecatalogo
    * @apiGroup catalogo
    *
    * @apiParam {Number} id catalogo unique ID.
    *
    * @apiSuccess {Number} code  Código 0 conforme todo ha ido bien.
    * @apiSuccess {Bool} true/false True o false dependiendo del resultado.
    *
    * @apiSuccessExample Success-Response:
    *     HTTP/1.1 200 OK
    *     {
    *       "code": 0,
    *       "response": true
    *     }
    *
    * @apiError catalogo NotFound Id de catalogo no fue encontrado.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 404 Not Found
    *     {
    *       "error": "catalogoNotFound"
    *     }
    */
    .delete(sequelizeHandlers.remove(catalogo))
    /**
    * @api {put} /catalogo/:id Actualiza la información de catalogo
    * @apiVersion 0.1.0
    * @apiName Putcatalogo
    * @apiGroup catalogo
    *
    * @apiParam {Number} id catalogo unique ID.
    *
    * @apiSuccess {Number} code  Código 0 conforme todo ha ido bien.
    * @apiSuccess {Bool} true/false True o false dependiendo del resultado.
    *
    * @apiSuccessExample Success-Response:
    *     HTTP/1.1 200 OK
    *     {
    *       "code": 0,
    *       "response": true
    *     }
    *
    * @apiError catalogo NotFound Id de catalogo no fue encontrado.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 404 Not Found
    *     {
    *       "error": "catalogoNotFound"
    *     }
    */
    .put(sequelizeHandlers.update(catalogo));
};