const User = require("./User");
const BenchMax = require("./BenchMax");
const SquatMax = require("./SquatMax");
const DeadliftMax = require("./DeadliftMax");
const Workout = require("./Workout");
const Exercise = require("./Exercise");

User.hasMany(BenchMax, { foreignKey: 'userID'} );
BenchMax.belongsTo(User, { foreignKey: 'userID'} );

User.hasMany(SquatMax, { foreignKey: 'userID'} );
SquatMax.belongsTo(User, { foreignKey: 'userID'} );

User.hasMany(DeadliftMax, { foreignKey: 'userID'} );
DeadliftMax.belongsTo(User, { foreignKey: 'userID'} );

// Workout.hasMany(Exercise, { foreignKey: 'workoutID'} );
// Exercise.belongsTo(Workout, { foreignKey: 'workoutID'} );

module.exports = {
    User,
    BenchMax,
    SquatMax,
    DeadliftMax,
    Workout,
    Exercise
}