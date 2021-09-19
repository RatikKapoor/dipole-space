import { Db, MongoClient } from "mongodb";

export async function connectDB(): Promise<Db> {
  let url: string;

  const { DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

  const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.h6sum.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

  // const mongoClient = await MongoClient.connect(uri, {
  //   useUnifiedTopology: true,
  //   useNewUrlParser: true,
  // });

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  //   (err) => {
  //   const collection = client.db("test").collection("devices");
  //   console.log(collection);
  //   // perform actions on the collection object
  //   // client.close();
  // });

  // get db instance
  const db = client.db(DB_DATABASE);

  return db;
}
