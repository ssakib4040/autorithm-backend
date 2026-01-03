import db from "../lib/mongodb";
import { allProducts } from "../data/products";

async function seed() {
  try {
    if (process.env.NODE_ENV === "production") {
      console.log("Seeding is only allowed in development environment.");
      return;
    }

    const productsCollection = db.collection("products");

    // Clear existing products
    await productsCollection.deleteMany({});
    console.log("Cleared existing products");

    // Insert products
    const result = await productsCollection.insertMany(allProducts);
    console.log(`Inserted ${result.insertedCount} products`);

    console.log("Seed completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Seed failed:", error);
    process.exit(1);
  }
}

seed();
