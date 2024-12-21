import express from "express";

import passport  from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";
import "./config/googleAuthConfig.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(passport.initialize());

// Routes
app.use("/auth", authRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Database Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected."))
  .catch((err) => console.error("MongoDB connection failed:", err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
