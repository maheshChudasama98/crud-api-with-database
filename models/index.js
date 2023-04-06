const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
    'mydemo',
    'root',
    'yug@1226',
    {
        host: 'localhost',
        logging: false,
        dialect: 'mysql'
    }
);

sequelize.authenticate().then(() => {


}).catch((error) => {
    console.error('Unable to connect to the database:', err);
});

console.log('\nConnection has been established successfully.');
const db = {}
db.admin = require('./admin')(sequelize,DataTypes)
console.log(db);
sequelize.sync({ })
module.exports = db 

//  exports user for demo check
// module.exports = sequelize 