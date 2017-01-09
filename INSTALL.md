# Portal Único de Información del Estado, Trámites e Instituciones, GOB.BO (BACKEND - FRONTEND)

## Introducción
Para Realizar la instalación del backend y frontend del portal único de información del estado (primera etapa), se siguen los siguien pasos.
## Creación de la Base de Datos

En primera instancia se debe instalar postgres, para el desarrollo de este portal se instalo la versión 9.6.1.

Primero agregamos el respositorio para el sistema:

    $ deb http://apt.postgresql.org/pub/repos/apt/ xenial-pgdg main  
    
Luego importamos la clave de firma del repositorio:

    $ wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc |  sudo apt-key add -  
  
  
Posteriormente instalamos postgresql 16.9.1:

    $ sudo apt-get install postgresql-9.6  

Cambiamos a una cuenta postgres:

    $ sudo -i -u postgres  

Ingresar a la consola de PostgreSQL:

    $ psql

Por defecto el usuario postgres no tiene contraseña. Para cambiar o editar la contraseña, podemos utilizar el siguiente comando:

    postgres@ubuntu-VirtualBox:~$ psql  
    psql (9.6.0)  
    Type "help" for help.

    postgres=#  

    postgres=# ALTER USER postgres WITH PASSWORD 'nueva_contraseña';

Crear una base de datos en el servidor:

    $ CREATE DATABASE nombre_db WITH OWNER nombre_usuario;
    
Importar la base de datos, un backup se encuentra en la carpeta _db_ dentro del proyecto:

    postgres=# \c nombre_db
    
    nombre_db=# \i "ruta_proyecto"/db/nombre_backup.sql
    

Para más detalle de configuración de __postgresql__ ir a su [documentación](https://www.postgresql.org/docs/9.6/static/auth-methods.html) oficial.
    

## Instalación del proyecto (Backend - Frontend)

Para Instalar el proyecto es necesario clonarlo de gitlab:

    $ git clone git@gitlab.geo.gob.bo:agetic/agetic-portal-tramites.git


## Ejecución del proyecto

Para instalar las dependencias de la aplicación, se ejecuta el siguiente comando, en la raiz de la carpeta donde se clono el proyecto:

    $ npm install

Para ejecutar los servicios del backend y al mismo tiempo ejecutar el frontend, ingresamos el siguiente comando:

    $ npm start