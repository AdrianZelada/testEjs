import sequelizeHandlers from "sequelize-handlers";
module.exports = app => {
  const ex = app.src.db.models.ex;
  app.route('/api/v1/exs')
    // Descomentar la siguiente linea para implementar autenticacion JWT
    //.all(app.auth.authenticate())
    /**
    * @api {post} /api/v1/exs Crea ex
    * @apiVersion 0.1.0
    * @apiName Postex
    * @apiGroup ex
    *
    * @apiSuccess {Number} code  Código 0 conforme todo ha ido bien.
    * @apiSuccess {Nuumber} exId   Id ex registrado.
    *
    * @apiSuccessExample Success-Response:
    *     HTTP/1.1 200 OK
    *     {
    *        "code": 0,
    *        "response": exId
    *     }
    *
    * @apiError exBadResponse: ex no ha podido crearse
    *
    * @apiError BaD-Response:
    *     HTTP/1.1 400 Bad Response
    *     {
    *       "error": "BadResponse"
    *     }
    */
    .post(sequelizeHandlers.create(ex))
    /**
    * @api {get} /api/v1/exs Obtiene la información de ex
    * @apiVersion 0.1.0
    * @apiName Getex
    * @apiGroup ex
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
    * @apiError exNotFound datos de  ex no fueron encontrados.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 404 Not Found
    *     {
    *       "error": "exNotFound"
    *     }
    */
    .get(sequelizeHandlers.query(ex));
  app.route('/api/v1/exs/:id')
    // Descomentar la siguiente linea para implementar autenticacion JWT
    //.all(app.auth.authenticate())
    /**
    * @api {get} /api/v1/exs/:id Obtiene la información de ex
    * @apiVersion 0.1.0
    * @apiName Getex
    * @apiGroup ex
    *
    * @apiParam {Number} id ex unique ID.
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
    * @apiError exNotFound Id de ex no fue encontrado.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 404 Not Found
    *     {
    *       "error": "exNotFound"
    *     }
    */
    .get(sequelizeHandlers.get(ex))
    /**
    * @api {delete} /api/v1/exs/:id Elimina ex
    * @apiVersion 0.1.0
    * @apiName Deleteex
    * @apiGroup ex
    *
    * @apiParam {Number} id ex unique ID.
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
    * @apiError ex NotFound Id de ex no fue encontrado.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 404 Not Found
    *     {
    *       "error": "exNotFound"
    *     }
    */
    .delete(sequelizeHandlers.remove(ex))
    /**
    * @api {put} /ex/:id Actualiza la información de ex
    * @apiVersion 0.1.0
    * @apiName Putex
    * @apiGroup ex
    *
    * @apiParam {Number} id ex unique ID.
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
    * @apiError ex NotFound Id de ex no fue encontrado.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 404 Not Found
    *     {
    *       "error": "exNotFound"
    *     }
    */
    .put(sequelizeHandlers.update(ex));
};