import sequelizeHandlers from "sequelize-handlers";
module.exports = app => {
  const Parametros = app.src.db.models.Parametros;
  const correspondencia = app.src.db.models.correspondencia;

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
  app.post('/api/v1/correspondencias', sequelizeHandlers.create(correspondencia));

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
  app.get('/api/v1/correspondencias/:id', sequelizeHandlers.get(correspondencia));


  app.get('/api/v1/correspondencias', sequelizeHandlers.query(correspondencia));


  /**
   * @api {delete} /api/v1/correspondencias}/:id Elimina correspondencia
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
  app.delete('/api/v1/correspondencias/:id', sequelizeHandlers.remove(correspondencia));


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
  app.put('/api/v1/correspondencias/:id', sequelizeHandlers.update(correspondencia));
};
