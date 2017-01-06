## Portal Único de Información del Estado, Trámites e Instituciones, GOB.BO

Las tecnologias utilizadas son:

- **Express** como servidor web ejecutar como npm start
- **Sequelize** como ORM
- **ApiDoc** documentacion del apiRest ejecutar como npm run apidoc
- **Babel** como compilador de ecma6 a ecma 5
- **ejs** como motor de plantillas

## Archivos de configuración

Para modificar los datos de conexion a la base de datos y para modificar el puerto de conexion de desarrollo modificar :

- ./libs/config.development.js

Para modificar los datos de conexion a la base de datos y para modificar el puerto de conexion de testing modificar :

- ./libs/config.test.js

Para modificar los datos de conexion al ldap(asilamiento para diferentes tipos de autenticación) :

- ./routes/token.js

Para modificar el acceso (proteccion via CORS)

- ./libs/middlewares.js

Las opciones de ejecucion son las siguientes:

- **npm start**   levanta el sistema, si el modelo no tiene tablas estas son creadas
- **npm test**  ejecuta el sistema y las pruebas unitarias
- **npm run lint**  ejecuta el eslint para verificar el estandar de programacion, actualmente esta basado en: https://github.com/airbnb/javascript
- **npm run apidoc**  genera el apidoc del apirest y se lo encuentra en la tabla public


## Documentación Versión 1.1

## Requerimientos

De lo anterior se desprenden los siguientes requerimientos:

1. node 4.x o 5.x

=======
# testEjs
testEjs
