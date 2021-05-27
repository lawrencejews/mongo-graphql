import { ApolloServer } from "apollo-server-express";
import { resolvers } from "./models/resolvers";
import { typeDefs } from "./models/typeDefs";
import express from "express";
import mongoose from "mongoose";

//GraphQL server
const startServer = async () => {
    const PORT = 4000;

    const app = express();

    const server = new ApolloServer({ typeDefs, resolvers });
    server.applyMiddleware({ app });

    try {
        //https://mongoosejs.com/ --> Mongo-server-connection
        await mongoose.connect(
            "mongodb+srv://Lubs:<password>@graphql.cvzzc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
    } catch (err) {
        console.log(err);
    }
    app.listen({ port: PORT }, () =>
        console.log(
            `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
        )
    );
};

startServer();
