import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
let db = null;
module.exports = app => {

  if (!db) {
    const config = app.src.libs.config;
    const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config.params);

    db = {
      sequelize,
      Sequelize,
      models: {},
    };

    const dir = path.join(__dirname, "models");
    console.log(dir);
    fs.readdirSync(dir).forEach(file => {
      const modelDir = path.join(dir, file);
      console.log(modelDir);
      const model = sequelize.import(modelDir);
      db.models[model.name] = model;
    });
    Object.keys(db.models).forEach(key => {
      console.log("---->${key+db.models}");
      //console.log(db.models);
      db.models[key].associate(db.models);
    });
  }

 return db;
};
