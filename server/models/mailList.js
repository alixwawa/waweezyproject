module.exports = function (sequelize, DataTypes) {
    var mailList = sequelize.define("mailList", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
    });
    
    return mailList;
};