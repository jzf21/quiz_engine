import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.DB_NAME;

// check the MongoDB URI
if (!MONGODB_URI) {
  throw new Error("Define the MONGODB_URI environmental variable");
}

// check the MongoDB DB
if (!MONGODB_DB) {
  throw new Error("Define the MONGODB_DB environmental variable");
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  // if the database connection is cached,
  // use it instead of creating a new connection
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  // set the connection options
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  // connect to the database server
  const client = await MongoClient.connect(MONGODB_URI, opts);

  // select the database
  const db = client.db(MONGODB_DB);

  // cache the connection and database objects
  cachedClient = client;
  cachedDb = db;
  console.log(client, db);
  return { client, db };
}
