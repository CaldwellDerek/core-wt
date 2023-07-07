const User = require("./User");
const BenchMax = require("./BenchMax");

User.hasMany(BenchMax, { foreignKey: 'user_id'} );
BenchMax.belongsTo(User, { foreignKey: 'user_id'} );

module.exports = {
    User,
    BenchMax
}