module.exports = (sequelize, DataTypes) => {
  const dpa = sequelize.define('dpa', {
    id_dpa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_tipo_dpa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_dpa_superior: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    id_dpa_madre: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    codigo_gbe: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    codigo_padre_gbe: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
      direccion: {
          type: DataTypes.STRING,
          allowNull: true,
      },
      sitio_web: {
          type: DataTypes.STRING,
          allowNull: true,
      },
      mision: {
          type: DataTypes.STRING,
          allowNull: true,
      },
      correo: {
          type: DataTypes.STRING,
          allowNull: true,
      },
      sigla: {
          type: DataTypes.STRING,
          allowNull: true,
      },
      telefonos: {
          type: DataTypes.STRING,
          allowNull: true,
      },
      twitter: {
          type: DataTypes.STRING,
          allowNull: true,
      },
      url: {
          type: DataTypes.STRING,
          allowNull: true,
      }
  },{
    timestamps: false,
    freezeTableName: true,
    // Define el nombre de la tabla
    tableName: 'dpa',
    classMethods: {
      associate: (models) => {
        dpa.belongsTo(models.tipos_dpa, { foreignKey: 'id_tipo_dpa' });
        dpa.hasMany(models.dpa, { as: 'children', foreignKey: 'id_dpa_superior' });
        dpa.belongsTo(models.dpa, { as: 'parent', foreignKey: 'id_dpa_superior' });
        dpa.hasMany(models.dpa, { as: 'children', foreignKey: 'id_dpa_madre' });
        dpa.belongsTo(models.dpa, { as: 'parent', foreignKey: 'id_dpa_madre' });
        dpa.hasMany(models.correspondencia, { as: 'children', foreignKey: 'id_dpa' });
      },
      obtenerDpas: (codigo, funcionCallback) => {
        let objsOficiales = [];
        let objsReferenciales = [];
        const intLargoCadena = codigo.length;
        let datosOficialesSQL;
        let datosRefSQL;
        switch (intLargoCadena) {
        case 0:
        case 6: //Municipios
          //Query de los datos oficiales
          datosOficialesSQL = `select DISTINCT cdpto.valor as departamento, ccdpto.valor as codigo_departamento, cprov.valor as provincia, ccprov.valor as codigo_provincia,
            ct.* from crosstab_catalogo_oficial('select id_dpa, catalogo.detalle, valor
            from correspondencia inner join catalogo on catalogo.id_catalogo = correspondencia.id_catalogo where catalogo.id_tipo_catalogo = 1
            order by 1,2', 'select detalle from catalogo  where catalogo.id_tipo_catalogo = 1 order by 1') as ct
            INNER JOIN dpa on dpa.id_dpa = ct.id_dpa
            INNER JOIN dpa as provincia on provincia.id_dpa = dpa.id_dpa_superior
            INNER JOIN correspondencia as cprov on cprov.id_dpa = provincia.id_dpa and cprov.id_catalogo = 2
            INNER JOIN correspondencia as ccprov on ccprov.id_dpa = provincia.id_dpa and ccprov.id_catalogo = 1
            INNER JOIN dpa as departamento on departamento.id_dpa = provincia.id_dpa_superior
            INNER JOIN correspondencia as cdpto on cdpto.id_dpa = departamento.id_dpa and cdpto.id_catalogo = 2
            INNER JOIN correspondencia as ccdpto on ccdpto.id_dpa = departamento.id_dpa and ccdpto.id_catalogo = 1
            where dpa.id_tipo_dpa = 4  `;
          //Query de los datos referenciales
          datosRefSQL = `select ct.* from crosstab_catalogo_referencial('select id_dpa, catalogo.detalle, valor
            from correspondencia inner join catalogo on catalogo.id_catalogo = correspondencia.id_catalogo where catalogo.id_tipo_catalogo = 2
            order by 1,2', 'select detalle from catalogo  where catalogo.id_tipo_catalogo = 2 order by 1') as ct
            INNER JOIN correspondencia on correspondencia.id_dpa = ct.id_dpa and correspondencia.valor = ' ${codigo}'
            INNER JOIN dpa on dpa.id_dpa = ct.id_dpa \
            where dpa.id_tipo_dpa = 4   `;
          datosOficialesSQL = (codigo) ? `${datosOficialesSQL} and ct.codigo = '${codigo}'` : `${datosOficialesSQL}  order by 5;`;
          break;
        case 4: //Provincias
          //Query de los datos oficiales
          datosOficialesSQL = `select DISTINCT cdpto.valor as departamento, ccdpto.valor as codigo_departamento,
            ct.* from crosstab_catalogo_oficial('select id_dpa, catalogo.detalle, valor from correspondencia
            inner join catalogo on catalogo.id_catalogo = correspondencia.id_catalogo where catalogo.id_tipo_catalogo = 1
            order by 1,2', 'select detalle from catalogo  where catalogo.id_tipo_catalogo = 1 order by 1') as ct
            INNER JOIN dpa on dpa.id_dpa = ct.id_dpa
            INNER JOIN dpa as departamento on departamento.id_dpa = dpa.id_dpa_superior
            INNER JOIN correspondencia as cdpto on cdpto.id_dpa = departamento.id_dpa and cdpto.id_catalogo = 2
            INNER JOIN correspondencia as ccdpto on ccdpto.id_dpa = departamento.id_dpa and ccdpto.id_catalogo = 1
            where dpa.id_tipo_dpa = 3   `;
          //Query de los datos referenciales
          datosRefSQL = `select DISTINCT cdpto.valor as departamento, ccdpto.valor as codigo_departamento,
            ct.* from crosstab_catalogo_referencial('select id_dpa, catalogo.detalle, valor from correspondencia inner join catalogo on catalogo.id_catalogo = correspondencia.id_catalogo
            where catalogo.id_tipo_catalogo = 2  order by 1,2', 'select detalle from catalogo  where catalogo.id_tipo_catalogo = 2 order by 1')
            as ct \
            INNER JOIN correspondencia on correspondencia.id_dpa = ct.id_dpa and correspondencia.valor = '${codigo}'
            INNER JOIN dpa on dpa.id_dpa = ct.id_dpa
            INNER JOIN dpa as departamento on departamento.id_dpa = dpa.id_dpa_superior
            INNER JOIN correspondencia as cdpto on cdpto.id_dpa = departamento.id_dpa and cdpto.id_catalogo = 2
            INNER JOIN correspondencia as ccdpto on ccdpto.id_dpa = departamento.id_dpa and ccdpto.id_catalogo = 1
            where dpa.id_tipo_dpa = 3 Order by 3`;
          datosOficialesSQL = (codigo) ? `${datosOficialesSQL} and ct.codigo = '${codigo}'` : `${datosOficialesSQL}  order by ct.codigo;`;
          break;
        case 2: // Departamentos
          //Query para los datos oficiales
          datosOficialesSQL = `select ct.* from crosstab_catalogo_oficial('select id_dpa, catalogo.detalle, valor from correspondencia
            inner join catalogo on catalogo.id_catalogo = correspondencia.id_catalogo where catalogo.id_tipo_catalogo = 1
            order by 1,2', 'select detalle from catalogo  where catalogo.id_tipo_catalogo = 1 order by 1') as ct
            INNER JOIN dpa on dpa.id_dpa = ct.id_dpa
            where dpa.id_tipo_dpa = 2   `;
          //Query para los datos referenciales
          datosRefSQL = `select ct.* from crosstab_catalogo_referencial
            ('select id_dpa, catalogo.detalle, valor from correspondencia inner join catalogo  on catalogo.id_catalogo = correspondencia.id_catalogo where catalogo.id_tipo_catalogo = 2 order by 1,2',
            'select detalle from catalogo  where catalogo.id_tipo_catalogo = 2 order by 1') as ct
            INNER JOIN correspondencia on correspondencia.id_dpa = ct.id_dpa and correspondencia.valor = '${codigo}'
            INNER JOIN dpa on dpa.id_dpa = ct.id_dpa
            where dpa.id_tipo_dpa = 2 `;
          datosOficialesSQL = (codigo) ? `${datosOficialesSQL} and ct.codigo = '${codigo}'` : `${datosOficialesSQL} order by ct.codigo;`;
          break;
        default: break;
        }
        //Ejecutar Oficiales
        sequelize.query(datosOficialesSQL).spread((resultsOf, metadataOf) => {
          objsOficiales = resultsOf;
          //Ejecturar Referenciales
          sequelize.query(datosRefSQL).spread((resultsRef, metadataRef) => {
            if (resultsRef.length === 0 && resultsOf.length === 0) {
              funcionCallback("No hay resultados", null);
              return;
            }
            objsReferenciales = resultsRef;
            const objJsonOficiales = { oficiales: objsOficiales };
            const objJsonReferenciales = { referenciales: objsReferenciales };
            let objs = [];
            objs = objs.concat(objJsonOficiales);
            objs = objs.concat(objJsonReferenciales);
            const arrayObjs = [objs];
            funcionCallback("Sin Errores", arrayObjs);
          });
        });
      },
      obtenerProvincias: (codigo, funcionCallback) => {
        let objsOficiales
      },
        listDpa:(tipo_dpa)=> {
            // var paragraph = "bolivia de vivienda";
            // var words = paragraph.split(" ").filter(function (word) {
            //     return word.length >= 4;
            // });
            //
            // var arrayLike = words.map(function (word) {
            //     return '%' + word + '%'
            // })
            // words = words.concat(arrayLike);
            //
            // return dpa.findAll({
            //   include:[{
            //       model: tipo_dpa,
            //       required:true
            //   }],
            //     where:{
            //         nombre:{
            //             $ilike:{
            //                 $any:words
            //             }
            //         }
            //     },
            //     order:[
            //         ['id_dpa','DESC']
            //     ]
            // })

            return dpa.findAll({
                include: [{
                    model: tipo_dpa,
                    required:true,
                    }
                ]
            })
        },
    instanceMethods: {},
  }
  })
  return dpa;
};