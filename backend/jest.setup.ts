import mongoose from "mongoose";
import { server } from "./src/server";

afterAll(async () => {
  await mongoose.connection.close();
  server.close();
});
