import express from 'express';
import expressGraphQL from 'express-graphql';
import schema from './schema';

const app = express();

app.use('/graphql', expressGraphQL({
    graphiql: true,
    schema
}))

app.listen(4000, () => {
    console.log('listen on PORT 4000');
})
