const User = require("./User");
const BenchMax = require("./BenchMax");

User.hasMany(BenchMax, { foreignKey: 'userID'} );
BenchMax.belongsTo(User, { foreignKey: 'userID'} );

module.exports = {
    User,
    BenchMax
}