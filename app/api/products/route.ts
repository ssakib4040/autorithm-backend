import { NextResponse } from "next/server";
import db from "@/lib/mongodb";

// GET /api/products - List all products
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const limit = parseInt(searchParams.get("limit") || "50");
    const skip = parseInt(searchParams.get("skip") || "0");

    // Build query
    const query: Record<string, string> = {};
    if (category) {
      query.category = category;
    }

    // Fetch products
    const products = await db
      .collection("products")
      .find(query, { projection: { _id: 0 } })
      .skip(skip)
      .limit(limit)
      .toArray();

    const total = await db.collection("products").countDocuments(query);

    return NextResponse.json(
      {
        products,
        total,
        limit,
        skip,
      },
      { status: 200 }
    );
  } catch (error) {
    const err = error as Error;
    console.error("Get products error:", err);

    return NextResponse.json(
      { message: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}

// POST /api/products - Create a new product
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, description, price, category, stock } = body;

    // Validate input
    if (!name || !price) {
      return NextResponse.json(
        { message: "Name and price are required" },
        { status: 400 }
      );
    }

    if (typeof price !== "number" || price <= 0) {
      return NextResponse.json(
        { message: "Price must be a positive number" },
        { status: 400 }
      );
    }

    // Create new product
    const newProduct = {
      name,
      description: description || "",
      price,
      category: category || "uncategorized",
      stock: stock || 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await db.collection("products").insertOne(newProduct);

    // Return product data (excluding _id)
    const productResponse = {
      name: newProduct.name,
      description: newProduct.description,
      price: newProduct.price,
      category: newProduct.category,
      stock: newProduct.stock,
      createdAt: newProduct.createdAt,
      updatedAt: newProduct.updatedAt,
    };

    return NextResponse.json(
      {
        message: "Product created successfully",
        product: productResponse,
      },
      { status: 201 }
    );
  } catch (error) {
    const err = error as Error;
    console.error("Create product error:", err);

    return NextResponse.json(
      { message: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}
