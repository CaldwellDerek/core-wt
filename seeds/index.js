const sequelize = require("../config/connection");
const { User } = require("../models");

const userData = [
    {
        email: "derek@gmail.com",
        firstName: "Derek",
        lastName: "Caldwell",
        username: "dcaldwell",
        password: "1234test"
    }
]

const seedUserData = () => User.bulkCreate(userData);

const seedAll = async () => {
    await sequelize.sync({ force: true});
    await seedUserData();
    process.exit(1);
}; 

seedAll();