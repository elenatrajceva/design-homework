/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
const { gql } = require('apollo-server-express');

const typeDefs = gql`

    
    type Query{
        allCafees : [Cafee]
        cafeeByName (name:String!): [Cafee]
        cafeeByLocation (  longitude: String!, latitude: String! ) : Cafee
        cafeeByVicinity (vicinity: String!) : [Cafee]

    }
    type Mutation{
        addCafee(
            name: String!,
            longitude: String!,
            latitude: String!,
            vicinity: String,
            workingDays: String,
            workingHoursStart: String,
            workingHoursEnd: String,) : Cafee

    }
    type Cafee{
        id: String
        name: String!,
        longitude: String!,
        latitude: String!,
        vicinity: String,
        workingDays: String,
        workingHoursStart: String,
        workingHoursEnd: String,
    }
`;

module.exports = typeDefs;
