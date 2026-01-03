import db from "../lib/mongodb";
import { allProducts } from "../data/products";
import bcrypt from "bcryptjs";

async function seed() {
  try {
    if (process.env.NODE_ENV === "production") {
      console.log("Seeding is only allowed in development environment.");
      return;
    }

    // Seed products
    const productsCollection = db.collection("products");
    await productsCollection.deleteMany({});
    console.log("Cleared existing products");
    const productResult = await productsCollection.insertMany(allProducts);
    console.log(`Inserted ${productResult.insertedCount} products`);

    // Seed users
    const usersCollection = db.collection("users");
    await usersCollection.deleteMany({});
    console.log("Cleared existing users");

    const users = [
      {
        email: "ssakib6060@gmail.com",
        password: await bcrypt.hash("password", 10),
        name: "Sadman Sakib",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "john@example.com",
        password: await bcrypt.hash("password", 10),
        name: "John Doe",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const userResult = await usersCollection.insertMany(users);
    console.log(`Inserted ${userResult.insertedCount} users`);

    console.log("Seed completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Seed failed:", error);
    process.exit(1);
  }
}

seed();
