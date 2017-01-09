
import express from 'express';
import consign from 'consign';
// import cons from './src/console'
// cons()
const app = express();

// var console = process.console;
consign({verbose:false});
consign()
  //carga las configuraciones de base de datos y otras como el puerto de escucha y la palabra secreta para la encriptacion
  .include('src/libs/config.js')
  // carga las utilidades necesarias
  // .then('src/console.js')
  .then('src/libs/util.js')
  //carga el modulo de sequelize para que tambien cargue los modelos
  .then('src/db.js')
  //carga el modulo de passport con jwt para la autenticacion del apirest
  .then('src/auth.js')
  //acá se encuentra el midleware por si es necesario cargar algun otro datos
  .then('src/libs/middlewares.js')
  // carga todas las rutas del api rest
  .then('src/routes')
  // levanta todo el sistema
  .then('src/libs/boot.js')
  .into(app);


module.exports=app;
// cons()