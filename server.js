const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

// import typedefs and resolvers
const filePath = path.join(__dirname, "typeDefs.gql");
const typeDefs = fs.readFileSync(filePath, "utf-8");
const resolvers = require("./resolvers");

//import Environment variables and mongoose models
require("dotenv").config({ path: "variables.env" });
const User = require("./models/User");
const Post = require("./models/Post");

// Connect to Mlad Database
mongoose
  .connect(
    process.env.MONGO_URI,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
     }
  )
  .then(() => console.log("DB connected"))
  .catch(err => console.error(err));

  // Create Apollo/GraphQl server and wire it together with Apollo Server Constructor
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    User,
    Post
  }
});

server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`);
});
