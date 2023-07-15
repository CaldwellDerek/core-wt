const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Exercise extends Model {}

Exercise.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sets: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    reps: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    workoutID: {
        type: DataTypes.NUMBER,
        allowNull: false
    }
},{
    sequelize
});

module.exports = Exercise;