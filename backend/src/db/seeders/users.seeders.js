const { usersModels } = require("../models");

const arrUsers = [
  { email: "john@gmail.com", username: "John Doe", gender: "M" },
  { email: "jane@gmail.com", username: "Jane Smith", gender: "F" },
  { email: "alice@gmail.com", username: "Alice Johnson", gender: "F" },
  { email: "bob@gmail.com", username: "Bob Brown", gender: "M" },
  { email: "charlie@gmail.com", username: "Charlie Davis", gender: "M" },
  { email: "diana@gmail.com", username: "Diana Evans", gender: "F" },
  { email: "eric@gmail.com", username: "Eric Wilson", gender: "M" },
  { email: "fiona@gmail.com", username: "Fiona Clark", gender: "F" },
  { email: "george@gmail.com", username: "George Miller", gender: "M" },
  { email: "hannah@gmail.com", username: "Hannah Taylor", gender: "F" },
];

const seedUsers = async () => {
    try {
        await usersModels.bulkCreate(arrUsers)
        const response = {
            status: "success",
            message: "Seeded users successfully.",
        };
        console.log("\n", response, "\n");
    } catch (err) {
        console.log("Error seeding data users:", err.message);
    }
}

module.exports = seedUsers
