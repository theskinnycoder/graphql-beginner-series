const names = ["Dani", "Mia", "Lana"];

const resolvers = {
  Query: {
    helloThere: () => "General Kenobi",
    // sayCheese: () => 5
    // sayCheese: () => null
    sayCheese: () => "Cheeeese!",
    names: () => names
  }
};

export default resolvers;
