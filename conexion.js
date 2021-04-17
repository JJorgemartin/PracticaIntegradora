const Sequelize = require('sequelize');
const path = 'mysql://root:156475868Jor@localhost:3306/integradora';
const sequelize = new Sequelize(path);

sequelize.authenticate().then(() => {
    console.log('conectado a la BD');
}).catch(err => {
    console.log('error de conexcion a la BD: ', err);
}).finally(() => {
    // sequelize.close();
})

module.exports = sequelize;