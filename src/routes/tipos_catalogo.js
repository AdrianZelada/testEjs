import sequelizeHandlers from "sequelize-handlers";
module.exports = app => {
  const tipos_catalogo = app.src.db.models.tipos_catalogo;
  app.route('/api/v1/tipos_catalogos')
    // Descomentar la siguiente linea para implementar autenticacion JWT
    //.all(app.auth.authenticate())
    /**
    * @api {post} /api/v1/tipos_catalogos Crea tipos_catalogo
    * @apiVersion 0.1.0
    * @apiName Posttipos_catalogo
    * @apiGroup tipos_catalogo
    *
    * @apiSuccess {Number} code  Código 0 conforme todo ha ido bien.
    * @apiSuccess {Nuumber} tipos_catalogoId   Id tipos_catalogo registrado.
    *
    * @apiSuccessExample Success-Response:
    *     HTTP/1.1 200 OK
    *     {
    *        "code": 0,
    *        "response": tipos_catalogoId
    *     }
    *
    * @apiError tipos_catalogoBadResponse: tipos_catalogo no ha podido crearse
    *
    * @apiError BaD-Response:
    *     HTTP/1.1 400 Bad Response
    *     {
    *       "error": "BadResponse"
    *     }
    */
    .post(sequelizeHandlers.create(tipos_catalogo))
    /**
    * @api {get} /api/v1/tipos_catalogos Obtiene la información de tipos_catalogo
    * @apiVersion 0.1.0
    * @apiName Gettipos_catalogo
    * @apiGroup tipos_catalogo
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
    * @apiError tipos_catalogoNotFound datos de  tipos_catalogo no fueron encontrados.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 404 Not Found
    *     {
    *       "error": "tipos_catalogoNotFound"
    *     }
    */
    .get(sequelizeHandlers.query(tipos_catalogo));
  app.route('/api/v1/tipos_catalogos/:id')
    // Descomentar la siguiente linea para implementar autenticacion JWT
    //.all(app.auth.authenticate())
    /**
    * @api {get} /api/v1/tipos_catalogos/:id Obtiene la información de tipos_catalogo
    * @apiVersion 0.1.0
    * @apiName Gettipos_catalogo
    * @apiGroup tipos_catalogo
    *
    * @apiParam {Number} id tipos_catalogo unique ID.
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
    * @apiError tipos_catalogoNotFound Id de tipos_catalogo no fue encontrado.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 404 Not Found
    *     {
    *       "error": "tipos_catalogoNotFound"
    *     }
    */
    .get(sequelizeHandlers.get(tipos_catalogo))
    /**
    * @api {delete} /api/v1/tipos_catalogos/:id Elimina tipos_catalogo
    * @apiVersion 0.1.0
    * @apiName Deletetipos_catalogo
    * @apiGroup tipos_catalogo
    *
    * @apiParam {Number} id tipos_catalogo unique ID.
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
    * @apiError tipos_catalogo NotFound Id de tipos_catalogo no fue encontrado.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 404 Not Found
    *     {
    *       "error": "tipos_catalogoNotFound"
    *     }
    */
    .delete(sequelizeHandlers.remove(tipos_catalogo))
    /**
    * @api {put} /tipos_catalogo/:id Actualiza la información de tipos_catalogo
    * @apiVersion 0.1.0
    * @apiName Puttipos_catalogo
    * @apiGroup tipos_catalogo
    *
    * @apiParam {Number} id tipos_catalogo unique ID.
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
    * @apiError tipos_catalogo NotFound Id de tipos_catalogo no fue encontrado.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 404 Not Found
    *     {
    *       "error": "tipos_catalogoNotFound"
    *     }
    */
    .put(sequelizeHandlers.update(tipos_catalogo));
};