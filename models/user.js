    const { DataTypes } = require('sequelize');
    const sequelize = require('./index')

    const User = sequelize.define('User', {
        // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING
            // allowNull defaults to true
        }
    }, {
        // Other model options go here
    });

    // `sequelize.define` also returns the model
    console.log(User === sequelize.models.User); // true

// User.sync({ force: true });

const Add = async (res)=>{
    console.log(res);
    const jane = User.build(res);
    // console.log(jane);
    await jane.save()
}

module.exports= {
    User,
    Add
}