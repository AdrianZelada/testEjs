import sequelizeHandlers from "sequelize-handlers";
module.exports = app => {
  const correspondencia = app.src.db.models.correspondencia;
  app.route('/api/v1/correspondencias')
    // Descomentar la siguiente linea para implementar autenticacion JWT
    //.all(app.auth.authenticate())
    /**
    * @api {post} /api/v1/correspondencias Crea correspondencia
    * @apiVersion 0.1.0
    * @apiName Postcorrespondencia
    * @apiGroup correspondencia
    *
    * @apiSuccess {Number} code  Código 0 conforme todo ha ido bien.
    * @apiSuccess {Nuumber} correspondenciaId   Id correspondencia registrado.
    *
    * @apiSuccessExample Success-Response:
    *     HTTP/1.1 200 OK
    *     {
    *        "code": 0,
    *        "response": correspondenciaId
    *     }
    *
    * @apiError correspondenciaBadResponse: correspondencia no ha podido crearse
    *
    * @apiError BaD-Response:
    *     HTTP/1.1 400 Bad Response
    *     {
    *       "error": "BadResponse"
    *     }
    */
    .post(sequelizeHandlers.create(correspondencia))
    /**
    * @api {get} /api/v1/correspondencias Obtiene la información de correspondencia
    * @apiVersion 0.1.0
    * @apiName Getcorrespondencia
    * @apiGroup correspondencia
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
    * @apiError correspondenciaNotFound datos de  correspondencia no fueron encontrados.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 404 Not Found
    *     {
    *       "error": "correspondenciaNotFound"
    *     }
    */
    .get(sequelizeHandlers.query(correspondencia));
  app.route('/api/v1/correspondencias/:id')
    // Descomentar la siguiente linea para implementar autenticacion JWT
    //.all(app.auth.authenticate())
    /**
    * @api {get} /api/v1/correspondencias/:id Obtiene la información de correspondencia
    * @apiVersion 0.1.0
    * @apiName Getcorrespondencia
    * @apiGroup correspondencia
    *
    * @apiParam {Number} id correspondencia unique ID.
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
    * @apiError correspondenciaNotFound Id de correspondencia no fue encontrado.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 404 Not Found
    *     {
    *       "error": "correspondenciaNotFound"
    *     }
    */
    .get(sequelizeHandlers.get(correspondencia))
    /**
    * @api {delete} /api/v1/correspondencias/:id Elimina correspondencia
    * @apiVersion 0.1.0
    * @apiName Deletecorrespondencia
    * @apiGroup correspondencia
    *
    * @apiParam {Number} id correspondencia unique ID.
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
    * @apiError correspondencia NotFound Id de correspondencia no fue encontrado.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 404 Not Found
    *     {
    *       "error": "correspondenciaNotFound"
    *     }
    */
    .delete(sequelizeHandlers.remove(correspondencia))
    /**
    * @api {put} /correspondencia/:id Actualiza la información de correspondencia
    * @apiVersion 0.1.0
    * @apiName Putcorrespondencia
    * @apiGroup correspondencia
    *
    * @apiParam {Number} id correspondencia unique ID.
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
    * @apiError correspondencia NotFound Id de correspondencia no fue encontrado.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 404 Not Found
    *     {
    *       "error": "correspondenciaNotFound"
    *     }
    */
    .put(sequelizeHandlers.update(correspondencia));
};