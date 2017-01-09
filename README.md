# Portal Único de Información del Estado, Trámites e Instituciones, GOB.BO

Las tecnologias utilizadas son:

- **Express** como servidor web ejecutar como npm start
- **Sequelize** como ORM
- **ApiDoc** documentacion del apiRest ejecutar como npm run apidoc
- **Babel** como compilador de ecma6 a ecma 5
- **ejs** como motor de plantillas

Para la base de datos es necesario contar con:
- **Postgresql** para el manejo de la base de datos, se recomienda usar la 9.6.1. o superior.

## Archivos de configuración

Para modificar los datos de conexion a la base de datos y para modificar el puerto de conexion de desarrollo modificar:

- ./libs/config.development.js

Para modificar los datos de conexion a la base de datos y para modificar el puerto de conexion de testing modificar :


Para modificar el acceso (proteccion via CORS)

- ./src/libs/middlewares.js

Las opciones de ejecucion son las siguientes:

- **npm start**   levanta el sistema, si el modelo no tiene tablas estas son creadas



## Documentación Versión 0.0.1

## Requerimientos

De lo anterior se desprenden los siguientes requerimientos:

1. node 6.x 

=======
# Equipo de Desarrollo
### Responsable de proyecto:
Norman Huasebe
### Responsable de desarrollo Backend:
Adrian Zelada
### Responsable de desarrollo Frontend:
Victor H. Quispe


