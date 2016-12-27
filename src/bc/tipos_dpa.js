import sequelizeHandlers from "sequelize-handlers";
module.exports = app => {
  const Parametros = app.src.db.models.Parametros;
  const tipos_dpa = app.src.db.models.tipos_dpa;

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
  app.post('/api/v1/tipos_dpas', sequelizeHandlers.create(tipos_dpa));

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

  app.get('/api/v1/tipos_dpas/:id', sequelizeHandlers.get(tipos_dpa));

  app.get('/api/v1/tipos_dpas/:id/childrens', (req, res) => {
    res.send('A');
  });


  // app.get('/api/v1/tipos_dpas', (req, res, next) => {
  //
  //   console.log("¿entró?");
  //
  //   // req.options = "";
  //   //req.options = {};
  // //  console.log(sequelizeHandlers.query(tipos_dpa).length);
  //   sequelizeHandlers.query(tipos_dpa)[0](req, res, next);
  //   sequelizeHandlers.query(tipos_dpa)[1](req, res, next);
  //   sequelizeHandlers.query(tipos_dpa)[2](req, res, next);
  //
  // });

 app.get('/api/v1/tipos_dpas', sequelizeHandlers.query(tipos_dpa));


  /**
   * @api {delete} /api/v1/tipos_dpas}/:id Elimina tipos_dpa
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
  app.delete('/api/v1/tipos_dpas/:id', sequelizeHandlers.remove(tipos_dpa));


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
  app.put('/api/v1/tipos_dpas/:id', sequelizeHandlers.update(tipos_dpa));
};
