import { connectToDatabase } from "../../lib/mongodb";
import bcrypt from "bcryptjs";

export default async function signup(req, res) {
  // connect to the database
  const { db } = await connectToDatabase();

  // retrieve the request body
  const { email, password } = req.body;

  // check if the email is already in use
  const existingUser = await db.collection("users").findOne({ email });
  if (existingUser) {
    return res.status(400).json({ error: "Email already in use" });
  }

  // hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // create a new user
  const newUser = { email, password: hashedPassword };
  await db.collection("users").insertOne(newUser);

  // return success
  res.status(201).json({ message: "Signup success" });
}
