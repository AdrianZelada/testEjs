import logger from "./logger.js";

console.log("configuracion de desarrollo activada");
//Archivo de configuracion para conexion a la base de datos
module.exports = {
  // database: "seq_bd_3",
  //   database: "gob_bo",
    database: "sisDpa_Desarollo",
    username: "postgres",
    password: "030883",
  params: {
    dialect: "postgres",
    port: 5432,
    host: "localhost",
    logging: (sql) => {
      logger.info(`[${new Date()}] ${sql}`);
    },
    define: {
      underscored: true,
    },
  },
  //configuracion con jwt poner una palabra secreta segura
  jwtSecret: "JuPa1986",
  jwtSession: { session: false },
  carpetaInstalacion: "",
  jsonResponse:true
};

