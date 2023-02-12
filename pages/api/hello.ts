// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { List } from 'postcss/lib/list'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<{}>>
) {
  res.status(200).json([  {    "q_id": 1,    "question": "What is the capital of France?",    "options": [      "London",      "Paris",      "Berlin",      "Rome"    ],
    "difficulty": "easy",
    "answer": "Paris",
    "category": "Geography"
  },
  {
    "q_id": 2,
    "question": "What is the highest mountain in the world?",
    "options": [
      "Mount Everest",
      "K2",
      "Kangchenjunga",
      "Lhotse"
    ],
    "difficulty": "medium",
    "answer": "Mount Everest",
    "category": "Geography"
  },
  {
    "q_id": 3,
    "question": "What is the smallest country in the world by land area?",
    "options": [
      "Maldives",
      "Monaco",
      "San Marino",
      "Vatican City"
    ],
    "difficulty": "easy",
    "answer": "Vatican City",
    "category": "Geography"
  },
  {
    "q_id": 4,
    "question": "What year did the first moon landing occur?",
    "options": [
      "1969",
      "1961",
      "1965",
      "1971"
    ],
    "difficulty": "easy",
    "answer": "1969",
    "category": "History"
  },
  {
    "q_id": 5,
    "question": "Who painted the famous artwork 'The Starry Night'?",
    "options": [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Rembrandt"
    ],
    "difficulty": "easy",
    "answer": "Vincent van Gogh",
    "category": "Art"
  }
]
)
}
