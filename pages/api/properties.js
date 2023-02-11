import { connectToDatabase } from "../../lib/mongodb";
import Quiz from "../../models/quiz";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const quiz = await db
    .collection("quiz")
    .find({})

    .limit(20)
    .toArray();
  res.json(quiz);
  const quizData = [
    {
      quiz_id: "quiz1",
      quiz_name: "Quiz 1",
      no_sections: 5,
      time_limit: new Date(),
    },
    {
      quiz_id: "quiz2",
      quiz_name: "Quiz 2",
      no_sections: 10,
      time_limit: new Date(),
    },
  ];


}
