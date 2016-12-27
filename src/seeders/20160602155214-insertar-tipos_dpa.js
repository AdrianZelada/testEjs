'use strict';
import DataTypes from "sequelize/lib/data-types";
module.exports = {
  up: (queryInterface, Sequelize)  => {
    const tipos_dpa = [
      {nombre:"pais" },
      {nombre:"departamento", id_tipo_dpa_superior:"1"},
      {nombre:"provincia", id_tipo_dpa_superior:"2"},
      {nombre:"municipio", id_tipo_dpa_superior:"3"},
      {nombre:"recinto", id_tipo_dpa_superior:"4"},
    ];
    return queryInterface.bulkInsert('tipos_dpa', tipos_dpa, {});
  },
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('tipos_dpa',{nombre: {$in:["pais","departamento","provincia","municipio","recinto"]}}, {}),

};
