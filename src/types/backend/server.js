import express from "express";
import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(express.json());
app.use(cors());

const uri = "mongodb://localhost:27017"; // Replace with your MongoDB URI
const client = new MongoClient(uri);

async function startServer() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("auth_db");
    const usersCollection = db.collection("users");

    // Ensure unique index on email
    await usersCollection.createIndex({ email: 1 }, { unique: true });

    // Signup endpoint
    app.post("/api/signup", async (req, res) => {
      const { name, email, password } = req.body;

      try {
        const existingUser = await usersCollection.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ success: false, message: "Email already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const userId = uuidv4();
        await usersCollection.insertOne({
          id: userId,
          name,
          email,
          password: hashedPassword,
        });

        res.status(201).json({
          success: true,
          user: { id: userId, name, email },
        });
      } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ success: false, message: "Server error" });
      }
    });

    // Login endpoint
    app.post("/api/login", async (req, res) => {
      const { email, password } = req.body;

      try {
        const user = await usersCollection.findOne({ email });
        if (!user) {
          return res.status(401).json({ success: false, message: "Invalid email or password" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return res.status(401).json({ success: false, message: "Invalid email or password" });
        }

        res.json({
          success: true,
          user: { id: user.id, name: user.name, email: user.email },
        });
      } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ success: false, message: "Server error" });
      }
    });

    app.listen(5000, () => console.log("Server running on port 5000"));
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
}

startServer();