import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import logger from "./logger.js";
// import socket from 'socket.io';
import ejsLayouts from "express-ejs-layouts";

// var io = socket(http);
module.exports = (app,console) => {

  //puerto de escucha
    // console.log('hola')
    //
    // console=require('./src/console')(io,console)
  app.set("port", 8002);
  app.use(morgan("common", {
    stream: {
      write: (message) => {
        logger.info(message);
      },
    },
  }))
  // usa un motor de renderizado de plantillas, puede usarse jade(descomentar para usar como engine)
  app.set('view engine', 'ejs');
  app.use(ejsLayouts);
  // Showtests

  // app.param('busqueda', function(req, res, next, busqueda) {
  //
  //     // check if the user with that name exists
  //     // do some validations
  //     // add -dude to the name
  //     var modified = busqueda + '-dude';
  //     console.info(busqueda)
  //     console.log(busqueda)
  //     // save name to the request
  //     req.busqueda = modified;
  //
  //     next();
  // });

    app.param(function(name, fn){
        if (fn instanceof RegExp) {
            return function(req, res, next, val){
                var captures;
                if (captures = fn.exec(String(val))) {
                    req.params[name] = captures;
                    next();
                } else {
                    res.redirect('/error');
                }
            }
        }
    });
    app.param('idTramite',/^\d+$/);
    app.param('idOrganizacion',/^\d+$/);
    app.param('idSuperior',/^\d+$/);
    app.param('idCategoria',/^\d+$/);
    // app.param('busqueda',/^[a-zA-Z\s]*$/);
  app.use((req, res, next) => {
    res.locals.showTests = app.get('env') !== 'production' &&
    req.query.test === '1';
    next();
  });
  //adicionando soporte para cross, habilitar ips especificas no dejarlo completamente abierto, los metodos permitidos
  app.use(cors());
  //permite recibir datos json como body
  app.use(bodyParser.json());
  //es para que se use la authenticacion de passport
  app.use(app.src.auth.initialize());
  //eliminar ids en caso de que lo envien por si quieren hacer sqlinjection
  app.use((req, res, next) => {
    delete req.body.id;
    next();
  });
  //para generar un espacio publico, archivos estaticos
  app.use(express.static("public"));
  //app.use(express.static(__dirname + '/public'));
  //// verifica si hay errores en el formato json
  app.use((err, req, res, next) => {
    if (err instanceof SyntaxError) {

      res.status(400).json({ mensaje: "Problemas en el formato JSON" });
    } else {
      res.status(500).send('Error interno!');
      console.error(err.stack);
    }
  });

};
