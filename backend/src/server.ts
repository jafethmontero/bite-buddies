import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config";
import userRoutes from "./routes/userRoutes";
import recipeRoutes from "./routes/recipeRoutes";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req: Request, res: Response): void => {
  res.send("BiteBuddies API is running...");
});

app.use("/api/users", userRoutes);
app.use("/api/recipes", recipeRoutes);

const PORT = process.env.PORT ?? 3000;
const server = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);

export { server, app };
