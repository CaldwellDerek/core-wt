const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Workout extends Model {}

Workout.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize
});

module.exports = Workout;