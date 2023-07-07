const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class BenchMax extends Model {}

BenchMax.init({
    benchMax: {
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

module.exports = BenchMax;