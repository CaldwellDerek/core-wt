const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class SquatMax extends Model {}

SquatMax.init({
    squatMax: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    userID: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    sequelize
});

module.exports = SquatMax;