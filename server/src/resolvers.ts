const resolvers = {
  Query: {
    // Returns an array of Tracks
    // that will be used to populate the homepage grid of our web client
    // (parent, args, contextValue, info)
    tracksForHome: (_, __, contextValue: { dataSources: any }) => {
      const { dataSources } = contextValue;
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  Track: {
    // Here parent is equal to a Track object
    author: (parent: { authorId: string }, _, { dataSources }) => {
      const { authorId } = parent;
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};

export default resolvers;
