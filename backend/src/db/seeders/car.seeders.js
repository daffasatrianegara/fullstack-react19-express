const { CarsModels } = require("../models");

const arrCars = [
  {
    owner_name: "John Doe",
    brand: "Toyota",
    plate_number: "B1234CD",
    color: "Black",
  },
  {
    owner_name: "Jane Smith",
    brand: "Honda",
    plate_number: "D5678EF",
    color: "White",
  },
  {
    owner_name: "Alice Johnson",
    brand: "Suzuki",
    plate_number: "F9101GH",
    color: "Red",
  },
  {
    owner_name: "Bob Brown",
    brand: "Daihatsu",
    plate_number: "B1213IJ",
    color: "Blue",
  },
  {
    owner_name: "Charlie Davis",
    brand: "Hyundai",
    plate_number: "E1415KL",
    color: "Silver",
  },
  {
    owner_name: "Diana Evans",
    brand: "Nissan",
    plate_number: "G1617MN",
    color: "Gray",
  },
  {
    owner_name: "Eric Wilson",
    brand: "Mazda",
    plate_number: "H1819OP",
    color: "Yellow",
  },
  {
    owner_name: "Fiona Clark",
    brand: "Kia",
    plate_number: "B2021QR",
    color: "Green",
  },
  {
    owner_name: "George Miller",
    brand: "Mitsubishi",
    plate_number: "Z2223ST",
    color: "Maroon",
  },
  {
    owner_name: "Hannah Taylor",
    brand: "Chevrolet",
    plate_number: "Y2425UV",
    color: "Orange",
  },
];

const seedCars = async () => {
    try {
        await CarsModels.bulkCreate(arrCars);
        const response = {
        status: "success",
        message: "Seeded cars successfully.",
        };
        console.log("\n", response, "\n");
    } catch (err) {
        console.log("Error seeding data cars:", err.message);
    }
}

module.exports = seedCars