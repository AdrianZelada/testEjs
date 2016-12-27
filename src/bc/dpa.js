import sequelizeHandlers from "sequelize-handlers";
module.exports = app => {
  const Parametros = app.src.db.models.Parametros;
  const dpa = app.src.db.models.dpa;

  /**
   * @api {post} /api/v1/dpas Crea dpa
   * @apiVersion 0.1.0
   * @apiName Postdpa
   * @apiGroup dpa
   *
   * @apiSuccess {Number} code  Código 0 conforme todo ha ido bien.
   * @apiSuccess {Nuumber} dpaId   Id dpa registrado.
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *        "code": 0,
   *        "response": dpaId
   *     }
   *
   * @apiError dpaBadResponse: dpa no ha podido crearse
   *
   * @apiError BaD-Response:
   *     HTTP/1.1 400 Bad Response
   *     {
   *       "error": "BadResponse"
   *     }
   */
  app.post('/api/v1/dpas', sequelizeHandlers.create(dpa));

  /**

   * @api {get} /api/v1/dpas/:id Obtiene la información de dpa
   * @apiVersion 0.1.0
   * @apiName Getdpa
   * @apiGroup dpa
   *
   * @apiParam {Number} id dpa unique ID.
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
   * @apiError dpaNotFound Id de dpa no fue encontrado.
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 404 Not Found
   *     {
   *       "error": "dpaNotFound"
   *     }
   */
  app.get('/api/v1/dpas/:id', sequelizeHandlers.get(dpa));


  app.get('/api/v1/dpas', sequelizeHandlers.query(dpa));


  /**
   * @api {delete} /api/v1/dpas}/:id Elimina dpa
   * @apiVersion 0.1.0
   * @apiName Deletedpa
   * @apiGroup dpa
   *
   * @apiParam {Number} id dpa unique ID.
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
   * @apiError dpa NotFound Id de dpa no fue encontrado.
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 404 Not Found
   *     {
   *       "error": "dpaNotFound"
   *     }
   */
  app.delete('/api/v1/dpas/:id', sequelizeHandlers.remove(dpa));


  /**
   * @api {put} /dpa/:id Actualiza la información de dpa
   * @apiVersion 0.1.0
   * @apiName Putdpa
   * @apiGroup dpa
   *
   * @apiParam {Number} id dpa unique ID.
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
   * @apiError dpa NotFound Id de dpa no fue encontrado.
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 404 Not Found
   *     {
   *       "error": "dpaNotFound"
   *     }
   */
  app.put('/api/v1/dpas/:id', sequelizeHandlers.update(dpa)); 
};
