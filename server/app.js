const express = require('express')
const app = express()
const port = 3000

var { graphqlHTTP } = require('express-graphql');

const schema = require('./schema/schema')

// var { buildSchema } = require('graphql');
// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);
// var root = {
//   hello: () => {
//     return 'Hello world!';
//   },
// };


app.use('/graphql', graphqlHTTP({
    schema: schema,
    // rootValue: root,
    graphiql: true,
  }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})