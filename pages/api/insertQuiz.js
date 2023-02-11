import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const quizCollection = db.collection("quiz");

  const newQuiz = {
    quiz_id: "quiz_001",
    quiz_name: "History Quiz",
    no_sections: 5,
    time_limit: new Date(),
  };

  await quizCollection.insertOne(newQuiz);
  res.json({ message: "Quiz inserted successfully" });
}
