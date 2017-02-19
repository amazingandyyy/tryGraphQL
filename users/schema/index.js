import {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } from 'graphql';
import _ from 'lodash';

const users = [
    {
        id: '1',
        firstName: 'Andy',
        age: 23
    }, {
        id: '2',
        firstName: 'Anny',
        age: 25
    }
]

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {
            type: GraphQLString
        },
        firstName: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        }
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, args) {
                return _.find(users, { id: args.id })
            }
        }
    }
});

const schema = new GraphQLSchema({
    query: RootQuery
})

export default schema;