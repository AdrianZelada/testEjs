import sequelizeHandlers from "sequelize-handlers";
module.exports = app => {
  const tipos_dpa = app.src.db.models.tipos_dpa;
  app.route('/api/v1/tipos_dpas')
    // Descomentar la siguiente linea para implementar autenticacion JWT
    //.all(app.auth.authenticate())
    /**
    * @api {post} /api/v1/tipos_dpas Crea tipos_dpa
    * @apiVersion 0.1.0
    * @apiName Posttipos_dpa
    * @apiGroup tipos_dpa
    *
    * @apiSuccess {Number} code  Código 0 conforme todo ha ido bien.
    * @apiSuccess {Nuumber} tipos_dpaId   Id tipos_dpa registrado.
    *
    * @apiSuccessExample Success-Response:
    *     HTTP/1.1 200 OK
    *     {
    *        "code": 0,
    *        "response": tipos_dpaId
    *     }
    *
    * @apiError tipos_dpaBadResponse: tipos_dpa no ha podido crearse
    *
    * @apiError BaD-Response:
    *     HTTP/1.1 400 Bad Response
    *     {
    *       "error": "BadResponse"
    *     }
    */
    .post(sequelizeHandlers.create(tipos_dpa))
    /**
    * @api {get} /api/v1/tipos_dpas Obtiene la información de tipos_dpa
    * @apiVersion 0.1.0
    * @apiName Gettipos_dpa
    * @apiGroup tipos_dpa
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
    * @apiError tipos_dpaNotFound datos de  tipos_dpa no fueron encontrados.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 404 Not Found
    *     {
    *       "error": "tipos_dpaNotFound"
    *     }
    */
    .get(sequelizeHandlers.query(tipos_dpa));
  app.route('/api/v1/tipos_dpas/:id')
    // Descomentar la siguiente linea para implementar autenticacion JWT
    //.all(app.auth.authenticate())
    /**
    * @api {get} /api/v1/tipos_dpas/:id Obtiene la información de tipos_dpa
    * @apiVersion 0.1.0
    * @apiName Gettipos_dpa
    * @apiGroup tipos_dpa
    *
    * @apiParam {Number} id tipos_dpa unique ID.
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
    * @apiError tipos_dpaNotFound Id de tipos_dpa no fue encontrado.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 404 Not Found
    *     {
    *       "error": "tipos_dpaNotFound"
    *     }
    */
    .get(sequelizeHandlers.get(tipos_dpa))
    /**
    * @api {delete} /api/v1/tipos_dpas/:id Elimina tipos_dpa
    * @apiVersion 0.1.0
    * @apiName Deletetipos_dpa
    * @apiGroup tipos_dpa
    *
    * @apiParam {Number} id tipos_dpa unique ID.
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
    * @apiError tipos_dpa NotFound Id de tipos_dpa no fue encontrado.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 404 Not Found
    *     {
    *       "error": "tipos_dpaNotFound"
    *     }
    */
    .delete(sequelizeHandlers.remove(tipos_dpa))
    /**
    * @api {put} /tipos_dpa/:id Actualiza la información de tipos_dpa
    * @apiVersion 0.1.0
    * @apiName Puttipos_dpa
    * @apiGroup tipos_dpa
    *
    * @apiParam {Number} id tipos_dpa unique ID.
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
    * @apiError tipos_dpa NotFound Id de tipos_dpa no fue encontrado.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 404 Not Found
    *     {
    *       "error": "tipos_dpaNotFound"
    *     }
    */
    .put(sequelizeHandlers.update(tipos_dpa));
};