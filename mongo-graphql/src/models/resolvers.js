import { Cat } from "./middleware";

const resolvers = {
    Query: {
        hello: () => "Hello world!",
        cats: () => {
          Cats.find()
        }
    },

    Mutation: {
        createCat: async (_, { name }) => {
            const kitty = new Cat({ name });
            await kitty.save().then(() => console.log("meow"));
        },
    },
};
