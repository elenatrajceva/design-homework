/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-return-await */
const Cafee = require('../db/db_model');

const resolvers = {

  Query: {
    allCafees: async () => await Cafee.find({}).exec(),
    cafeeByName: async (_, { name }) => await Cafee.find({ name }).exec(),
    cafeeByLocation: async (_, { longitude, latitude }) => await Cafee.find({ longitude, latitude }).exec(),
    cafeeByVicinity: async (_, { vicinity }) => await Cafee.find({ vicinity })

  },
  Mutation: {
    addCafee: async (_,
      args) => {
      try {
        const response = await Cafee.create(args);
        return response;
      } catch (e) {
        return e.message;
      }
    }

  }

};
module.exports = resolvers;
