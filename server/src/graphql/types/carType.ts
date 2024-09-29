import { GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean } from "graphql";

const CarType = new GraphQLObjectType({
    name: 'Car',
    fields: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        isreduckilo: { type: new GraphQLNonNull(GraphQLBoolean) },  // Modifié en Boolean
        isreducprice: { type: new GraphQLNonNull(GraphQLBoolean) },  // Modifié en Boolean
        title: { type: new GraphQLNonNull(GraphQLString) },
        desc: { type: new GraphQLNonNull(GraphQLString) },
        kilo: { type: new GraphQLNonNull(GraphQLInt) },
        carburant: { type: new GraphQLNonNull(GraphQLString) },
        gear: { type: new GraphQLNonNull(GraphQLString) },
        price: { type: new GraphQLNonNull(GraphQLFloat) }
    }
});

export default CarType;












