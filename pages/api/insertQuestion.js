import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const quizCollection = db.collection("Question");

  const newQuiz = {
    q_id: "q_001",
    section_id: "mat100",
    difficulty: "easy",
    question: "What is your name",
    options: ["Bobby", "Brown", "Wilkins", "James"],
    answer: "Bobby",
    time_limit: new Date(),
  };

  await quizCollection.insertOne(newQuiz);
  res.json({ message: "Quiz inserted successfully" });
}

(async function () {
  await handler();
})();
