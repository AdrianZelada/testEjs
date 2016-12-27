import fs from 'fs';
import path from 'path';
import plantilla from './plantilla-routers'
const basename = path.basename(module.filename);
const route = {};

const dirRoutes = `${__dirname}/src/routes`;
const dirModels =   `${__dirname}/src/models`;
const dirRoutesTest = `${__dirname}/src/test/routes`;
let apiVersion = '';
/*
* process.argv contiene un arreglo con los parámetros que se envía por consola al ejecutar el script.
* Los primeros dos parámetros siempre son 'node' y el nombre del archivo que contiene el script; entonces, nos deshacemos de ellos
*/
let arrParametros = process.argv.slice(2);
apiVersion = arrParametros[0]? arrParametros[0] : 'v1';
const arrArgsModelos = arrParametros.slice(1);
if(arrArgsModelos.length > 0) {
  arrArgsModelos.forEach((val) => {
    fs.exists(`${dirRoutes}/${apiVersion}/${val}`, (exists) => {
      if(!exists) {
        const contenido = plantilla(val, apiVersion);
        escribirCarpeta(`${dirRoutes}/${apiVersion}`);
        const dirRoutesFile = `${dirRoutes}/${apiVersion}/${val}.js`;
        escribirArchivo(contenido, dirRoutesFile);
      }
    });
  });
} else {
  console.log(apiVersion);
  fs.readdirSync(dirModels).filter((fileCompleto) =>
    (fileCompleto.indexOf('.') !== 0) && (fileCompleto !== basename)
  )
  .forEach((fileCompleto) => {
    if(fileCompleto.slice(-3)!== '.js'){
      return;
    }
    const file = fileCompleto.substr(0, fileCompleto.length - 3);
    console.log(fileCompleto);
    fs.exists(`${dirRoutes}/${apiVersion}/${fileCompleto}`, (exists) => {
      if(!exists) {
        const contenido = plantilla(file, apiVersion);
        escribirCarpeta(`${dirRoutes}/${apiVersion}`);
        const dirRoutesFile = `${dirRoutes}/${apiVersion}/${file}.js`;
        escribirArchivo(contenido, dirRoutesFile);
      }
    });
  });
}

const escribirCarpeta =  (directorio) => {
  if (!fs.existsSync(directorio)){
    fs.mkdirSync(directorio);
  }
};

const escribirArchivo = (contenido, dirRoutesFile) => {

  fs.writeFile(dirRoutesFile, contenido, { flag: 'wx' }, (err) => {
    return !err;
  });
};
