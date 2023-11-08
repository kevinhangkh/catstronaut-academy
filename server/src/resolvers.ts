import { Resolvers } from './types';

const resolvers: Resolvers = {
  Query: {
    // Returns an array of Tracks
    // that will be used to populate the homepage grid of our web client
    // (parent, args, contextValue, info)
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  Track: {
    // Here parent is equal to a Track object
    // and we're getting the authorId from it
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};

export default resolvers;
