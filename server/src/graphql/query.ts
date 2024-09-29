import { GraphQLList, GraphQLObjectType } from "graphql";
import { getAllCars } from "./resolvers/carResolver";
import CarType from "./types/carType";


export const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        getAllCars: {
            type: new GraphQLList(CarType),
            resolve: getAllCars
        },
    }
})