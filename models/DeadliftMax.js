const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class DeadliftMax extends Model {}

DeadliftMax.init({
    deadliftMax: {
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

module.exports = DeadliftMax;