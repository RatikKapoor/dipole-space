import express, { Request, Response } from "express";
import { graphqlHTTP } from "express-graphql";

const app = express();

const PORT = 4000;

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World");
});

app.use("/graphql", graphqlHTTP(options);

app.listen(PORT, () => {
  console.log(`GraphQL server running on port ${PORT} `);
});
