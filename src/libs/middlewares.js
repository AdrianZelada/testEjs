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
