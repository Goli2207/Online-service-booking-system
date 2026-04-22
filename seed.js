import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Service from "./models/Service.js";
import services from "./data/services.js";

dotenv.config();

const seedServices = async () => {
  try {
    await connectDB();
    await Service.deleteMany();
    await Service.insertMany(services);
    console.log("Services seeded successfully");
    process.exit();
  } catch (error) {
    console.error(`Seed failed: ${error.message}`);
    process.exit(1);
  }
};

seedServices();

