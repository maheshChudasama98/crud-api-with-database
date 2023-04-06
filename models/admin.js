module.exports = (sequelize,DataTypes) => {

    const Admin = sequelize.define('Admin', {
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
    console.log(Admin === sequelize.models.Admin); // true
    return Admin
}
