import { GET } from "@/app/api/hello/route";
import { NextRequest } from "next/server";

describe("API Tests", () => {
  describe("Root API Route", () => {
    it("should return 500 error", async () => {
      const request = new NextRequest("http://localhost:3000/api/hello");
      const response = await GET(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data).toEqual({ message: "API is running" });
    });
  });
});
