import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { connectToDatabase } from "../../lib/mongodb";

// Define the secret key for the JWT
const JWT_SECRET = process.env.JWT_SECRET;

// Check if the JWT secret is defined
if (!JWT_SECRET) {
  throw new Error("Define the JWT_SECRET environmental variable");
}

// Define the salt rounds for bcrypt
const BCRYPT_SALT_ROUNDS = 10;

export default async function signin(req, res) {
  // Destructure the request body
  const { email, password } = req.body;

  // Connect to the database
  const { db } = await connectToDatabase();

  // Get the user from the database
  const user = await db.collection("users").findOne({ email: email });

  // Check if the user exists
  if (!user) {
    return res.status(401).json({ message: "Email or password is invalid" });
  }

  // Compare the password hash with the provided password
  const isPasswordValid = await bcrypt.compare(password, user.password);

  // Check if the password is valid
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Email or password is invalid" });
  }

  // Sign the JWT with the user id and secret
  const token = jwt.sign({ userId: user._id }, JWT_SECRET);

  // Return the JWT to the client
  return res.json({ token: token });
}
