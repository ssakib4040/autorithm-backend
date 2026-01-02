import { NextResponse } from "next/server";
import client from "@/lib/mongodb";

export async function GET(_request: Request) {
  // get all from users
  const data = await client.collection("users").find({}).toArray();
  console.log(data);
  console.log("Connected to MongoDB");

  return NextResponse.json({ message: "API is running" }, { status: 200 });
}

export async function POST(_request: Request) {
  return NextResponse.json(
    { message: "POST request received" },
    { status: 200 }
  );
}
