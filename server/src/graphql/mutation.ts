import { GraphQLBoolean, GraphQLFloat, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { addCar, deleteCar, updateCar } from "./resolvers/carResolver";
import CarType from "./types/carType";

export const Mutation = new GraphQLObjectType ({
    name: 'Mutation',
    fields: {
        addCar: {
            type: CarType,
            args: {
                isreduckilo: { type: new GraphQLNonNull(GraphQLBoolean) },
                isreducprice: { type: new GraphQLNonNull(GraphQLBoolean) },
                title: { type: new GraphQLNonNull(GraphQLString) },
                desc: { type: new GraphQLNonNull(GraphQLString) },
                kilo: { type: new GraphQLNonNull(GraphQLInt) },  // Champ modifié en Int
                carburant: { type: new GraphQLNonNull(GraphQLString) },
                gear: { type: new GraphQLNonNull(GraphQLString) },
                price: { type: new GraphQLNonNull(GraphQLFloat) }  // Champ modifié en Float
            },
            resolve:addCar
        },
        updateCar: {
            type: CarType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
                isreduckilo: { type: new GraphQLNonNull(GraphQLBoolean) },
                isreducprice: { type: new GraphQLNonNull(GraphQLBoolean) },
                title: { type: new GraphQLNonNull(GraphQLString) },
                desc: { type: new GraphQLNonNull(GraphQLString) },
                kilo: { type: new GraphQLNonNull(GraphQLInt) },  // Champ modifié en Int
                carburant: { type: new GraphQLNonNull(GraphQLString) },
                gear: { type: new GraphQLNonNull(GraphQLString) },
                price: { type: new GraphQLNonNull(GraphQLFloat) } 
            },
            resolve:updateCar
        },
        deleteCar: {
            type: CarType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: deleteCar
        }
    }
})