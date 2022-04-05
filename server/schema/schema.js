const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;

var _ = require('lodash');

// dummy db
var books = [
    {name:'olawale', genre: 'fantasy', id:'1'},
    {name:'fist of fury', genre: 'action', id:'2'},
    {name:'the house on the left', genre: 'horror', id:'3'},
]


//  declare object type and parameters
const BookType = new GraphQLObjectType({
    name : 'Book',
    fields: () => ({
        id : {type: GraphQLString},
        name : {type: GraphQLString},
        genre : {type: GraphQLString},
        
    })
})

//  declare rootquery or entrance into the graph
const RootQuery  = new GraphQLObjectType({
    name : 'RootQueryType',
    fields: {

        book:{
            type: BookType,
            args: {id: {type: GraphQLString}},
            resolve(parents, args){
                // code to get data from source or other db
                return _.find(books,{id:args.id})

            }
        }
        
    }
})


// package the object type and query together as a schema
module.exports = new GraphQLSchema({
    query: RootQuery
})