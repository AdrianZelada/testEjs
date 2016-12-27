module.exports = app => {
  if (process.env.NODE_ENV !== "test") {
    app.src.db.sequelize.sync().done(() => {
      app.listen(app.get("port"), () => {
        console.log(`
         __
       >(\' )
         )/
        /(
       /  \`----/
       \\  ~=- /
     ~^~^~^~^~^~^~^
	`);
        console.log(`Frame levantado y funcionando en el puerto  ${app.get('port')} `);
      });
    });
  }
};
