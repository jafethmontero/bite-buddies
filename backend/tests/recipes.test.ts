import request from "supertest";
import { app } from "../src/server";

describe("GET /api/recipes", () => {
  it("should return all recipes", async () => {
    const res = await request(app).get("/api/recipes");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
